---
title: Crypto Data ETL Scraper
date: 2025-05-01
slug: work-data-crypto-etl-scraper
tags: etl,python,selenium,analytics
summary: Created a Python ETL scraper that collects top crypto market data from CoinGecko and publishes results to CSV and Google Sheets.
---

This post covers the crypto ETL scraper from my Data Projects portfolio work.

## Goal

Capture near real-time data for top cryptocurrencies and make it available in both local and shareable formats.

## Stack

- Python + Selenium + pandas
- CoinGecko web scraping
- Google Sheets integration with `gspread`

## Implementation

- Used Selenium in headless mode to handle dynamic page rendering.
- Added logic for cookie popups and table extraction stability.
- Parsed coin name, symbol, and price for top rows.
- Exported outputs to local CSV and to a Google Sheets worksheet.
- Added structured logging and context-managed driver setup/cleanup.

## Detailed notes

- Scrapes CoinGecko with explicit waits to reduce flaky extraction on dynamic content.
- Handles cookie popups defensively so scraping does not fail when banners appear.
- Uses a context manager for Chrome driver lifecycle and clean teardown.
- Writes a local debug HTML snapshot on failure for troubleshooting.

## Code

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from dotenv import load_dotenv
import os
from contextlib import contextmanager
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@contextmanager
def setup_driver():
    """Context manager for Chrome driver setup and cleanup"""
    service = Service(os.path.join(os.getcwd(), "chromedriver.exe"))
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--disable-blink-features=AutomationControlled')
    options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36')
    driver = webdriver.Chrome(service=service, options=options)
    try:
        yield driver
    finally:
        driver.quit()

def scrape_coingecko(driver):
    """Scrape cryptocurrency data from CoinGecko"""
    try:
        driver.get("https://www.coingecko.com/")
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight / 2);")
        
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.XPATH, '//table//tr[contains(., "Bitcoin")]'))
        )

        # Handle cookie popup
        try:
            WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.XPATH, '//button[contains(text(), "Accept")]'))
            ).click()
        except:
            logger.info("No cookie popup found")

        # Extract data
        rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')
        data = []
        
        for i, row in enumerate(rows, 1):
            try:
                # Extract name (only the direct text of div.tw-font-semibold)
                name_element = row.find_element(By.CSS_SELECTOR, 'td:nth-child(3) div.tw-font-semibold')
                name = driver.execute_script(
                    "return arguments[0].childNodes[0].nodeValue.trim()", name_element
                )
                symbol = row.find_element(By.CSS_SELECTOR, 'td:nth-child(3) div.tw-text-xs').text.strip()
                price = row.find_element(By.CSS_SELECTOR, 'td:nth-child(5) span[data-price-target="price"]').text.strip()
                price_clean = price.replace('$', '').replace(',', '')
                data.append({'Name': name, 'Symbol': symbol, 'Price': price_clean})
                logger.info(f"Row {i}: {name}, {symbol}, {price}")
            except Exception as e:
                logger.error(f"Error processing row {i}: {e}")

        return data

    except Exception as e:
        logger.error(f"Scraping error: {e}")
        with open('page_source.html', 'w', encoding='utf-8') as f:
            f.write(driver.page_source)
        logger.info("Page source saved to 'page_source.html'")
        return []

def save_to_csv(data):
    """Save data to CSV file"""
    df = pd.DataFrame(data)
    if not df.empty:
        df.to_csv('coingecko_top_coins.csv', index=False)
        logger.info("\\nDataFrame head:\\n%s", df.head())
    else:
        logger.warning("No data to save to CSV")
    return df

def update_google_sheets(df):
    """Update Google Sheets with data"""
    load_dotenv()
    SPREADSHEET_ID = os.getenv("SPREADSHEET_ID")
    
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    creds = ServiceAccountCredentials.from_json_keyfile_name("google_credentials.json", scope)
    client = gspread.authorize(creds)
    
    spreadsheet = client.open_by_key(SPREADSHEET_ID)
    worksheet = spreadsheet.worksheet("Test")
    
    worksheet.update(
        values=[df.columns.values.tolist()] + df.values.tolist(),
        range_name='A1'
    )
    logger.info("Data successfully written to Google Sheets")

def main():
    """Main execution function"""
    with setup_driver() as driver:
        data = scrape_coingecko(driver)
        df = save_to_csv(data)
        if not df.empty:
            update_google_sheets(df)

if __name__ == "__main__":
    main()
```

## Assets

![Python ETL architecture](/images/data/PythonETL.png)
![Web scraping to spreadsheet flow](/images/data/WebScrapingToSpreadsheet.png)

## Key takeaway

For scrape-based ETL, resilience and observability are just as important as extraction logic.
