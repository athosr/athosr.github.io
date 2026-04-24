---
title: Automated Stock Market Data Pipeline
date: 2025-05-14
slug: work-data-stock-pipeline
tags: data-engineering,airflow,snowflake,etl
summary: Built an automated Airflow pipeline on Astronomer to ingest stock gainers from a REST API, transform with pandas, and load into Snowflake.
---

This post documents my stock market ingestion project from the Data Projects track.

## Goal

Design a reliable scheduled pipeline to ingest stock market data, normalize it, and publish it to Snowflake for downstream analytics.

## Stack

- Astronomer + Apache Airflow
- Python (`requests`, `pandas`)
- Snowflake (`snowflake-connector-python`)

## Implementation

- Built a DAG with Airflow functional decorators (`@dag`, `@task`) scheduled every 12 hours (`0 */12 * * *`).
- Pulled top gainers data from a configurable REST endpoint.
- Normalized JSON payloads into a DataFrame.
- Created destination table dynamically and inserted records into Snowflake.
- Kept configuration in environment variables for portability.

## Detailed notes

- Used Airflow's functional API to keep orchestration and task logic explicit.
- Implemented `response.raise_for_status()` to fail fast on API errors.
- Loaded credentials from `.env` and centralized Snowflake connection settings.
- Created columns dynamically from DataFrame schema for flexible ingestion.

```python
from airflow.decorators import dag, task
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
            values = ", ".join(f"'{str(v).replace(\"'\", \"''\")}'" for v in row)
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

stock_gainers_dag()
```


![Astronomer setup](/images/data/astronomer.png)
![Airflow DAG view](/images/data/stock_pipeline_dag.png)
![Airflow tasks view](/images/data/stock_pipeline_tasks.png)

## Key takeaway

Separating ingestion, transformation, and load into explicit tasks makes operational debugging and future extension significantly easier.
