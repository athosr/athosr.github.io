import{r as m,b as A,a as R}from"./vendor-Bp0i8vgi.js";import{u as N,L as g,a as I,b as M,B as D,R as P,c as u}from"./router-DfC7HiYo.js";import{m as n,A as _}from"./motion-hWeiHczv.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();var S={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=m,U=Symbol.for("react.element"),B=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,F=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function C(t,a,i){var s,o={},r=null,l=null;i!==void 0&&(r=""+i),a.key!==void 0&&(r=""+a.key),a.ref!==void 0&&(l=a.ref);for(s in a)W.call(a,s)&&!V.hasOwnProperty(s)&&(o[s]=a[s]);if(t&&t.defaultProps)for(s in a=t.defaultProps,a)o[s]===void 0&&(o[s]=a[s]);return{$$typeof:U,type:t,key:r,ref:l,props:o,_owner:F.current}}x.Fragment=B;x.jsx=C;x.jsxs=C;S.exports=x;var e=S.exports,y={},w=A;y.createRoot=w.createRoot,y.hydrateRoot=w.hydrateRoot;const E=m.createContext(),z=()=>{const t=m.useContext(E);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},H=({children:t})=>{const[a,i]=m.useState(()=>{if(typeof window<"u"){const o=localStorage.getItem("theme");if(o)return o==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),o==="dark";const r=window.matchMedia("(prefers-color-scheme: dark)").matches;return r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),r}return!1});m.useEffect(()=>{const o=document.documentElement;a?(o.classList.add("dark"),localStorage.setItem("theme","dark")):(o.classList.remove("dark"),localStorage.setItem("theme","light"))},[a]);const s=()=>{i(o=>!o)};return e.jsx(E.Provider,{value:{isDark:a,toggleTheme:s},children:t})},f=[{id:"careerxr",title:"CareerXR",description:"CareerXR is an innovative VR application designed to transform the way people prepare for job interviews. Leveraging cutting-edge virtual reality and AI-driven interaction, CareerXR immerses users in a fully simulated interview environment, recreating the high-stakes feel of real-life interviews.",fullDescription:`CareerXR is an innovative VR application designed to transform the way people prepare for job interviews. Leveraging cutting-edge virtual reality and AI-driven interaction, CareerXR immerses users in a fully simulated interview environment, recreating the high-stakes feel of real-life interviews. The application dynamically adjusts to user responses, providing tailored follow-up questions, feedback, and suggestions to enhance interview skills over time.

Within CareerXR, users can select from various interview scenarios and industries, practice for behavioral and technical questions, and even customize the difficulty level to meet their specific needs. The AI behind CareerXR evaluates body language, tone, and content of responses, offering personalized insights to help users refine their delivery and confidence.

Perfect for job seekers, career switchers, and students, CareerXR provides a unique blend of realism and adaptability, ensuring that users are fully prepared to tackle interviews with poise and professionalism.`,image:"/images/careerxr.png",categories:["VR","Productivity","Learning"],role:["Lead VR Developer"],videoUrl:"https://www.youtube.com/embed/rznnxzi8mK0",websiteUrl:null},{id:"obnd",title:"Old Books & Dice",description:"Reimagine the tabletop role-playing experience across platforms, empowering brands, creators, and players to craft and immerse in epic stories together, all powered by AI.",fullDescription:"Reimagine the tabletop role-playing experience across platforms, empowering brands, creators, and players to craft and immerse in epic stories together, all powered by AI.",image:"/images/obnd.png",categories:["VR","RPG"],role:["Lead VR Developer"],videoUrl:null,videoUrls:["https://www.youtube.com/embed/EW-nBn2Tetc","https://www.youtube.com/embed/zGW4Z8UhhQ8"],websiteUrl:null,gallery:null},{id:"yur",title:"YUR World",description:"YUR World® is your virtual world. Ignite your imagination and heart rate. Explore new worlds, compete, and map your progress. With YUR's community by your side, you'll never go it alone.",fullDescription:"YUR World® is your virtual world. Ignite your imagination and heart rate. Explore new worlds, compete, and map your progress. With YUR's community by your side, you'll never go it alone. Enjoy the journey, not just the destination.",image:"/images/yurworld.png",categories:["XR","Fitness"],role:["Gameplay Engineer"],videoUrl:null,websiteUrl:"https://yur.world/",gallery:null},{id:"oww",title:"Occupy White Walls",description:"Enter Occupy White Walls, a PC sandbox-building, AI-driven MMO game about building and curating your own art gallery, while allowing players to discover both classic artworks from historical figures, to contemporary paintings from modern artists.",fullDescription:"Enter Occupy White Walls, a PC sandbox-building, AI-driven MMO game about building and curating your own art gallery, while allowing players to discover both classic artworks from historical figures, to contemporary paintings from modern artists.",image:"/images/oww.png",categories:["MMO","Sandbox","AI-driven"],role:["Senior Unreal Engine Programmer"],videoUrl:null,websiteUrl:"https://oww.io/",gallery:["/images/oww/oww1.png","/images/oww/oww2.png","/images/oww/oww3.png","/images/oww/oww4.png","/images/oww/oww5.png"]},{id:"btc",title:"Between Two Castles",description:"Between Two Castles of Mad King Ludwig is a competitive tile-drafting game in which each tile is a room in a castle. You work together with two other players to design two different castles.",fullDescription:"Between Two Castles of Mad King Ludwig is a competitive tile-drafting game in which each tile is a room in a castle. You work together with two other players to design two different castles. On each turn you select two tiles from your hand, reveal them, then work with your partners to place them. To win, you have to share your attention and your devotion between two castles.",image:"/images/b2c.jpg",categories:["Competitive","Tile-drafting"],role:["Gameplay Programmer"],videoUrl:null,websiteUrl:"https://store.steampowered.com/app/1158500/Between_Two_Castles__Digital_Edition/",gallery:["/images/btc/btc1.png","/images/btc/btc2.png","/images/btc/btc3.png"]},{id:"infamy",title:"Infamy",description:"In the Martian mining colony of ARES-6, crime pays. Three factions vie for control of this corrupt new world and everything within it.",fullDescription:`In the Martian mining colony of ARES-6, crime pays. Three factions vie for control of this corrupt new world and everything within it. You are a mercenary known as a "freelancer", here to profit off the conflict, to make a name for yourself – but ambition alone isn't enough. A network of seedy contacts will assist you in undertaking the dangerous missions necessary to bolster your rep. Whether it's hiring henchmen to carry out your dirty work or plotting with secret schemes, you'll let nothing stand between you and your squalid goals.`,image:"/images/infamy.jpg",categories:["Strategy","Cyberpunk"],role:["Gameplay Programmer"],videoUrl:null,websiteUrl:null,gallery:["/images/infamy/infamy1.png","/images/infamy/infamy2.png","/images/infamy/infamy3.png","/images/infamy/infamy4.png","/images/infamy/infamy5.png","/images/infamy/infamy6.gif"]},{id:"unearth",title:"Unearth",description:"Long ago, your ancestors built great cities across the world. Now your tribe must explore forests, deserts, islands, mountains, and caverns to find these lost cities.",fullDescription:"Long ago, your ancestors built great cities across the world. Now your tribe must explore forests, deserts, islands, mountains, and caverns to find these lost cities. Claim the ruins, build places of power, and restore the glory of a bygone age. Unearth is a mobile bend-your-luck game of dice placement and set collection. Designed by Jason Harner and Matthew Ransom, it plays in under an hour with 2-4 players. Each player leads a tribe of Delvers, represented by five dice (3 six-sided, 1 four-sided, and 1 eight-sided). Players take turns rolling and placing dice in an attempt to claim Ruins.",image:"/images/unearth.jpg",categories:["Bend-your-luck","Dice placement","Set collection"],role:["Gameplay Programmer"],videoUrl:null,websiteUrl:null,gallery:["/images/unearth/unearth1.png","/images/unearth/unearth2.png","/images/unearth/unearth3.png","/images/unearth/unearth4.png"]},{id:"data",title:"Data Projects",description:"Documenting projects I've been working on related to Data Engineering",fullDescription:"Documenting projects I've been working on related to Data Engineering",image:"/images/dataprojects.png",categories:["Data Engineering","ETL","Analytics"],role:["Data Engineer"],videoUrl:null,websiteUrl:null,isDataProjects:!0,projects:[{title:"Automated Stock Market Data Pipeline with Astronomer, Airflow, Python and Snowflake",description:"Designed and deployed a fully automated data pipeline using Apache Airflow managed by Astronomer to ingest and store stock market data. The pipeline retrieves structured data from a public REST API, processes it using Pandas, and stores the results in Snowflake for downstream analytics and reporting.",details:["Used the @dag and @task decorators from Airflow's functional API to define a DAG scheduled to run every 12h (0 */12 * * *), ensuring up-to-date data ingestion.","Fetched real-time data on top stock gainers by sending GET requests to a configurable REST endpoint. The response is normalized and transformed into a pandas.DataFrame.","Utilized the snowflake-connector python library to connect to a Snowflake data warehouse."],images:["/images/data/astronomer.png","/images/data/stock_pipeline_dag.png","/images/data/stock_pipeline_tasks.png"],code:{language:"python",content:`from airflow.decorators import dag, task
from datetime import datetime
import pandas as pd
import requests
import snowflake.connector
import os
from dotenv import load_dotenv

load_dotenv()

# Configuration from .env
REST_API_URL = os.getenv("REST_API_URL")
SNOWFLAKE_CONFIG = {
    "user": os.getenv("SNOWFLAKE_USER"),
    "password": os.getenv("SNOWFLAKE_PASSWORD"),
    "account": os.getenv("SNOWFLAKE_ACCOUNT"),
    "warehouse": os.getenv("SNOWFLAKE_WAREHOUSE"),
    "database": os.getenv("SNOWFLAKE_DATABASE"),
    "schema": os.getenv("SNOWFLAKE_SCHEMA"),
}
TABLE_NAME = "TOP_GAINERS"

@task
def fetch_json_from_api(url):
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    df = pd.json_normalize(data)
    print(f"Loaded {len(df)} records from API.")
    return df

@task
def upload_to_snowflake(df, config, table_name):
    ctx = snowflake.connector.connect(autocommit=True, **config)
    cs = ctx.cursor()

    try:
        columns = ", ".join(f'"{col}" STRING' for col in df.columns)
        cs.execute(f"""
            CREATE TABLE IF NOT EXISTS {table_name} (
                {columns}
            );
        """)

        for _, row in df.iterrows():
            values = ", ".join(f"'{str(v).replace("'", "''")}'" for v in row)
            cs.execute(f"INSERT INTO {table_name} VALUES ({values});")

        print("Upload complete.")
    finally:
        cs.close()
        ctx.close()

@dag(
    dag_id='stock_gainers_pipeline',
    start_date=datetime(2025, 5, 12),
    schedule='0 */12 * * *',
    catchup=False,
    default_args={
        'owner': 'airflow',
        'retries': 1,
    },
)
def stock_gainers_dag():
    df = fetch_json_from_api(REST_API_URL)
    upload_to_snowflake(df, SNOWFLAKE_CONFIG, TABLE_NAME)

stock_gainers_dag()`}},{title:"Crypto Data ETL Scraper",description:"This project is a Python-based web scraper that collects real-time data of the top 100 cryptocurrencies from CoinGecko and stores it in both a local CSV file and Google Sheets. Using Selenium for web scraping, the script extracts details like coin names, symbols, and prices, handling dynamic web content and cookie popups. The data is processed with pandas and exported via the gspread API for easy access and sharing. Features include headless browser operation, error logging, and a clean context manager for driver setup.",details:[],images:["/images/data/PythonETL.png","/images/data/WebScrapingToSpreadsheet.png"],code:{language:"python",content:`from selenium import webdriver
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
    main()`}},{title:"ETL using Node.js",description:"In this ETL process, I used Node.js along with the xml-flow and fast-csv libraries to stream and transform XML data into a CSV file using a predefined delimiter. By processing each <item> element as it is parsed, the code avoids loading the entire XML file into memory, making it suitable for large datasets. The implementation is fully non-blocking, leveraging Node.js's asynchronous stream-based architecture to efficiently handle I/O operations without blocking the event loop. All files are processed locally in this example.",details:[],images:["/images/data/NodejsETL.png"],code:{language:"javascript",content:`const fs = require("fs");
const xmlFlow = require("xml-flow");
const { format } = require("fast-csv");

const DELIMITER = "," // Change to "\\t" for tab-separated values
const xmlFilePath = "data.xml";
const csvFilePath = "output.csv";

// Create readable stream for XML file
const readStream = fs.createReadStream(xmlFilePath, { encoding: "utf8" });
const writeStream = fs.createWriteStream(csvFilePath);

// Initialize XML streaming parser
const xmlStream = xmlFlow(readStream);

// Create CSV stream
const csvStream = format({ headers: true, delimiter: DELIMITER });
csvStream.pipe(writeStream);

// Process each item element in XML
xmlStream.on("tag:item", item => {
    csvStream.write({
        id: item.id,
        name: item.name,
        value: item.value
    });
});

xmlStream.on("end", () => {
    csvStream.end();
    console.log("CSV file written successfully.");
});`},additionalCode:{description:"This code uses mysql2 and fast-csv libraries to connect to a MySQL database, retrieves all rows from the items table, and streams them to a CSV file. It's asynchronous, memory-efficient, and handles both database and file I/O without blocking the Node.js event loop.",language:"javascript",content:`const mysql = require("mysql2/promise");
const fs = require("fs");
const { writeToStream } = require("fast-csv");

const DELIMITER = ",";

async function sqlToCsv(csvFilePath, delimiter = DELIMITER) {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "password",
        database: "database"
    });

    try {
        console.log("Connected to MySQL database.");

        const [rows] = await connection.execute("SELECT * FROM items");

        await new Promise((resolve, reject) => {
            const ws = fs.createWriteStream(csvFilePath);
            writeToStream(ws, rows, { headers: true, delimiter })
                .on("finish", resolve)
                .on("error", reject);
        });

        console.log("CSV file written successfully!");
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await connection.end();
        console.log("Connection closed.");
    }
}

sqlToCsv("output.csv");`}},{title:"Serverless Event Driven Data Processing",description:"This solution is for situations where files are uploaded on an ad hoc basis and require transformation before being loaded into a data target. In this case, files are uploaded in JSON format and converted to Parquet. Thanks to the SNS->SQS pipeline, the system is highly scalable, even with AWS Lambda limitations, and it's also extendable if there's a need to use the same event from the file upload in the data source for other purposes.",details:[],images:["/images/data/ServerlessEventDrivenDataProcessing.svg"],code:{language:"python",content:`import boto3
import pandas as pd
from io import StringIO, BytesIO
import json

s3 = boto3.client('s3')

def lambda_handler(event, context):
    try:
        print("Starting lambda execution")
        
        # Loop through SQS messages
        for record in event['Records']:
            print("Processing record")
            
            # Extract the body of the SQS message
            sqs_body = record['body']
            sns_message = json.loads(sqs_body)['Message']
            s3_event = json.loads(sns_message)
            
            bucket_name = s3_event['detail']['bucket']['name']
            object_key = s3_event['detail']['object']['key']
            
            print(f"Fetching object from S3: Bucket={bucket_name}, Key={object_key}")
            s3_object = s3.get_object(Bucket=bucket_name, Key=object_key)
            
            object_content = s3_object['Body'].read().decode('utf-8')
            print("Fetched S3 object content")
            
            json_data = json.loads(object_content)
            df = pd.json_normalize(json_data)
            print("Converted JSON to DataFrame")
            
            # Convert DataFrame to Parquet and write to an in-memory buffer
            buffer = BytesIO()
            df.to_parquet(buffer, engine='pyarrow')
            buffer.seek(0)  # Reset buffer pointer
            print("Converted DataFrame to Parquet")
            
            # Upload the parquet file to S3
            s3.upload_fileobj(buffer, 'endpoint-data-driven-processing-test', object_key.replace('json', 'parquet'))
            print("Uploaded Parquet file to S3")
        
        return {
            'statusCode': 200,
            'body': json.dumps('Successfully processed S3 event')
        }
    
    except Exception as e:
        print(f"Error processing event: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps(f"Error: {str(e)}")
        }`}}]}],d={name:"Athos Santos",title:"Software Engineer & Game Developer",bio:`Started learning game development as a teenager working on some old VB6 engines and RPG Maker, then decided to move into general programming, learning many languages such as C#, Python and Lua, but sticked to C and C++.

For years now I've been working professionally on multiple titles for many platforms such as PC, Android and Meta Quest, mostly using Unreal Engine.`,image:"/images/me.jpg",resume:"/assets/Athos Santos - Resume.pdf",social:{linkedin:"https://www.linkedin.com/in/athos-santos/",github:"https://github.com/athosr"}},q=()=>{const[t,a]=m.useState(!1),[i,s]=m.useState(!1),o=N(),{isDark:r,toggleTheme:l}=z(),h=c=>{c.preventDefault(),c.stopPropagation(),l()};m.useEffect(()=>{const c=()=>{a(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const p=[{path:"/work",label:"Work"},{path:"/about",label:"Profile"},{path:d.social.linkedin,label:"Contact",external:!0}];return e.jsxs(n.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.6,ease:"easeOut"},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-20",children:[e.jsx(g,{to:"/",className:"text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10 relative",children:d.name}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:p.map(c=>c.external?e.jsx("a",{href:c.path,target:"_blank",rel:"noopener noreferrer",className:"text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors",children:c.label},c.path):e.jsx(g,{to:c.path,className:`font-medium transition-colors ${o.pathname===c.path?"text-primary-600 dark:text-primary-400":"text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"}`,children:c.label},c.path))}),e.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[e.jsx("button",{onClick:h,className:"p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors","aria-label":"Toggle dark mode",type:"button",children:r?e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),e.jsx("a",{href:d.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),e.jsx("a",{href:d.social.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors","aria-label":"GitHub",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})})]}),e.jsxs("div",{className:"md:hidden flex items-center space-x-2",children:[e.jsx("button",{onClick:h,className:"p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors","aria-label":"Toggle dark mode",type:"button",children:r?e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),e.jsx("button",{className:"text-gray-700 dark:text-gray-300 focus:outline-none",onClick:()=>s(!i),"aria-label":"Toggle menu",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:i?e.jsx("path",{d:"M6 18L18 6M6 6l12 12"}):e.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),e.jsx(_,{children:i&&e.jsx(n.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"px-4 py-4 space-y-4",children:[p.map(c=>c.external?e.jsx("a",{href:c.path,target:"_blank",rel:"noopener noreferrer",className:"block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium",onClick:()=>s(!1),children:c.label},c.path):e.jsx(g,{to:c.path,className:`block font-medium ${o.pathname===c.path?"text-primary-600 dark:text-primary-400":"text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"}`,onClick:()=>s(!1),children:c.label},c.path)),e.jsxs("div",{className:"flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700",children:[e.jsx("a",{href:d.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),e.jsx("a",{href:d.social.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"GitHub",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})})]})]})})})]})},G=()=>{const{pathname:t}=N();return m.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),null},$=()=>e.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10",children:e.jsxs("div",{className:"text-center",children:[e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"mb-8",children:e.jsx("div",{className:"inline-block mb-6",children:e.jsx(n.img,{src:d.image,alt:d.name,className:"w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl",initial:{scale:0},animate:{scale:1},transition:{duration:.6,delay:.2,type:"spring"}})})}),e.jsx(n.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4",children:d.name}),e.jsx(n.p,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium",children:d.title}),e.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.5},className:"flex flex-wrap justify-center gap-4",children:[e.jsx("a",{href:d.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl",children:"Let's work together"}),e.jsx("a",{href:"#work",className:"inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors",children:"View my work"})]})]})}),e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.8},className:"absolute bottom-8 left-1/2 transform -translate-x-1/2",children:e.jsx(n.div,{animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0},className:"w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center",children:e.jsx(n.div,{animate:{y:[0,12,0]},transition:{duration:1.5,repeat:1/0},className:"w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"})})})]}),b=t=>{if(!t)return null;const a=t.match(/youtube\.com\/embed\/([^/?]+)/);if(a)return a[1];const i=t.match(/youtube\.com\/watch\?v=([^&]+)/);if(i)return i[1];const s=t.match(/youtu\.be\/([^/?]+)/);if(s)return s[1];const o=t.match(/youtu\.be\/([^/?]+)/);return o?o[1]:null},k=t=>t?`https://img.youtube.com/vi/${t}/maxresdefault.jpg`:null,X=t=>{if(t.image)return t.image;if(t.videoUrl){const a=b(t.videoUrl);if(a)return k(a)}if(t.videoUrls&&t.videoUrls.length>0){const a=b(t.videoUrls[0]);if(a)return k(a)}return null},K=t=>{const a=[];return t.videoUrl&&a.push(t.videoUrl),t.videoUrls&&t.videoUrls.length>0&&a.push(...t.videoUrls),a},L=({project:t,index:a})=>{const i=X(t),s=t.videoUrl||t.videoUrls&&t.videoUrls.length>0;return e.jsx(n.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,delay:a*.1},className:"group",children:e.jsxs(g,{to:`/work/${t.id}`,className:"block relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] transition-transform duration-300 hover:scale-[1.02]",children:[i?e.jsx("div",{className:"absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110",style:{backgroundImage:`url(${i})`}}):e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center",children:e.jsx("div",{className:"text-white text-center",children:s&&e.jsx("svg",{className:"w-16 h-16 mx-auto mb-2 opacity-50",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M8 5v14l11-7z"})})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("div",{className:"absolute inset-0 flex flex-col justify-end p-6 sm:p-8",children:e.jsxs("div",{className:"transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",children:[e.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:t.title}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:t.categories.map((o,r)=>e.jsx("span",{className:"px-3 py-1 text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-full",children:o},r))}),e.jsx("p",{className:"text-white/90 text-sm sm:text-base line-clamp-2",children:t.description})]})})]})})},Y=()=>e.jsx("section",{id:"work",className:"py-20 sm:py-32 bg-gray-50 dark:bg-gray-900",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(n.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"My Work"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"A collection of projects I've worked on throughout my career"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",children:f.map((t,a)=>e.jsx(L,{project:t,index:a},t.id))})]})}),T=()=>e.jsx("section",{className:"py-20 sm:py-32 bg-white dark:bg-gray-900",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-12 lg:gap-16 items-center",children:[e.jsxs(n.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"relative",children:[e.jsx("div",{className:"aspect-square rounded-2xl overflow-hidden shadow-2xl",children:e.jsx("img",{src:d.image,alt:d.name,className:"w-full h-full object-cover"})}),e.jsx("div",{className:"absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-2xl -z-10"})]}),e.jsxs(n.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx("h2",{className:"text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6",children:"A little about me"}),e.jsx("div",{className:"space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8",children:d.bio.split(`

`).map((t,a)=>e.jsx("p",{children:t},a))}),e.jsxs("div",{className:"flex items-center space-x-4 mb-8",children:[e.jsx("a",{href:d.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),e.jsx("a",{href:d.social.github,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors","aria-label":"GitHub",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})})]})]})]}),e.jsxs(n.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"mt-20",children:[e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center",children:"Resume"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"w-full max-w-4xl bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg",children:[e.jsx("embed",{src:d.resume,type:"application/pdf",className:"w-full h-[600px] sm:h-[800px] rounded-lg"}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx("a",{href:d.resume,target:"_blank",rel:"noopener noreferrer",className:"text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 font-medium",children:"Click here if it doesn't appear."})})]})})]})]})}),v=()=>e.jsx("footer",{className:"bg-gray-900 dark:bg-gray-950 text-white py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsxs(n.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-6 md:mb-0",children:[e.jsx("h3",{className:"text-2xl font-bold mb-2",children:d.name}),e.jsx("p",{className:"text-gray-400 dark:text-gray-500",children:d.title})]}),e.jsxs(n.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"flex items-center space-x-6",children:[e.jsx("a",{href:d.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors","aria-label":"LinkedIn",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),e.jsx("a",{href:d.social.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors","aria-label":"GitHub",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})})]})]}),e.jsx(n.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4},className:"mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center text-gray-400 dark:text-gray-500 text-sm",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," ",d.name,". All rights reserved."]})})]})}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsx(Y,{}),e.jsx(T,{}),e.jsx(v,{})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pt-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-16",children:[e.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"My Work"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"A collection of projects I've worked on throughout my career"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",children:f.map((t,a)=>e.jsx(L,{project:t,index:a},t.id))})]})}),e.jsx(v,{})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900 pt-20",children:e.jsx(T,{})}),e.jsx(v,{})]}),j=({code:t,language:a,title:i="Show Code"})=>{const[s,o]=m.useState(!1);return m.useEffect(()=>{s&&window.Prism&&window.Prism.highlightAll()},[s]),e.jsxs("div",{className:"my-6",children:[e.jsx(n.button,{onClick:()=>o(!s),whileHover:{scale:1.02},whileTap:{scale:.98},className:"px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-md",children:s?"Hide Code":i}),e.jsx(_,{children:s&&e.jsx(n.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"mt-4 overflow-hidden",children:e.jsx("div",{className:"bg-gray-900 rounded-lg overflow-hidden shadow-xl",children:e.jsx("pre",{className:"text-sm",children:e.jsx("code",{className:`language-${a}`,children:t})})})})})]})},ee=()=>{const{id:t}=I(),a=M(),i=f.find(r=>r.id===t);if(m.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),!i)return e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Project not found"}),e.jsx(g,{to:"/work",className:"text-primary-600 hover:text-primary-700",children:"Back to work"})]})});const s=K(i),o=s.length>0;return e.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900 pt-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs(n.button,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},onClick:()=>a(-1),className:"mb-8 flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors",children:[e.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Back"]}),i.image?e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12 rounded-2xl overflow-hidden shadow-2xl",children:e.jsx("img",{src:i.image,alt:i.title,className:"w-full h-[400px] sm:h-[500px] object-cover"})}):o?e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:`mb-12 ${s.length>1?"space-y-8":""}`,children:s.map((r,l)=>e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:l*.1},className:"rounded-2xl overflow-hidden shadow-2xl bg-black",children:e.jsx("div",{style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",width:"100%"},children:e.jsx("iframe",{src:r,title:`${i.title} - Video ${l+1}`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,loading:"lazy"})})},`video-${l}-${r}`))}):null,e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[e.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6",children:i.title}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:i.categories.map((r,l)=>e.jsx("span",{className:"px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium",children:r},l))}),i.role&&e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-3",children:"Role"}),e.jsx("ul",{className:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300",children:i.role.map((r,l)=>e.jsx("li",{children:r},l))})]}),e.jsx("div",{className:"prose prose-lg max-w-none mb-8 text-gray-700 dark:text-gray-300 leading-relaxed",children:i.fullDescription.split(`

`).map((r,l)=>e.jsx("p",{className:"mb-4",children:r},l))}),i.websiteUrl&&e.jsxs(n.a,{href:i.websiteUrl,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg mb-8",children:["Visit Website",e.jsx("svg",{className:"w-5 h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}),i.image&&o&&e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:`mb-12 ${s.length>1?"space-y-8":""}`,children:s.map((r,l)=>e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4+l*.1},className:"rounded-2xl overflow-hidden shadow-xl bg-black",children:e.jsx("div",{style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",width:"100%"},children:e.jsx("iframe",{src:r,title:`${i.title} - Video ${l+1}`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,loading:"lazy"})})},`video-below-${l}-${r}`))}),i.gallery&&i.gallery.length>0&&!i.isDataProjects&&e.jsx(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12",children:i.gallery.map((r,l)=>e.jsx(n.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4,delay:.6+l*.1},className:"rounded-xl overflow-hidden shadow-lg",children:e.jsx("img",{src:r,alt:`${i.title} screenshot ${l+1}`,className:"w-full h-auto object-cover"})},l))}),i.isDataProjects&&i.projects&&e.jsx("div",{className:"space-y-16 mt-12",children:i.projects.map((r,l)=>e.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4+l*.1},className:"border-t border-gray-200 dark:border-gray-700 pt-12",children:[e.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6",children:r.title}),e.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed",children:r.description}),r.details&&r.details.length>0&&e.jsx("ul",{className:"list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300",children:r.details.map((h,p)=>e.jsx("li",{children:h},p))}),r.images&&r.images.length>0&&e.jsx("div",{className:"grid grid-cols-1 gap-6 my-8",children:r.images.map((h,p)=>e.jsx(n.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,delay:.1*p},className:"rounded-xl overflow-hidden shadow-lg",children:e.jsx("img",{src:h,alt:`${r.title} ${p+1}`,className:"w-full h-auto object-cover"})},p))}),r.code&&e.jsx(j,{code:r.code.content,language:r.code.language,title:"Show Code"}),r.additionalCode&&e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:r.additionalCode.description}),e.jsx(j,{code:r.additionalCode.content,language:r.additionalCode.language,title:"Show Code"})]})]},l))})]})}),e.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},className:"mt-20 text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-4",children:"Let's work together"}),e.jsx("a",{href:d.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg",children:"Get in touch"})]})]})})};function te(){return e.jsx(H,{children:e.jsxs(D,{children:[e.jsx(G,{}),e.jsxs("div",{className:"App bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300",children:[e.jsx(q,{}),e.jsxs(P,{children:[e.jsx(u,{path:"/",element:e.jsx(Q,{})}),e.jsx(u,{path:"/work",element:e.jsx(J,{})}),e.jsx(u,{path:"/work/:id",element:e.jsx(ee,{})}),e.jsx(u,{path:"/about",element:e.jsx(Z,{})})]})]})]})})}y.createRoot(document.getElementById("root")).render(e.jsx(R.StrictMode,{children:e.jsx(te,{})}));
