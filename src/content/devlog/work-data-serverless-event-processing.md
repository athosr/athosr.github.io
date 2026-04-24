---
title: Serverless Event-Driven Data Processing
date: 2024-11-26
slug: work-data-serverless-event-processing
tags: aws,serverless,event-driven,data-engineering
summary: Built an AWS event-driven pipeline that transforms ad hoc JSON uploads into Parquet using SNS, SQS, Lambda, and S3.
---

This post describes the serverless data processing architecture from my Data Projects work.

## Goal

Handle ad hoc file uploads and transform them into analytics-friendly Parquet files using a scalable event-driven pattern.

## Stack

- AWS S3 + SNS + SQS + Lambda
- Python + pandas + `pyarrow`

## Implementation

- Triggered processing from S3 upload events routed through SNS to SQS.
- Parsed queue messages in Lambda and fetched uploaded JSON payloads from S3.
- Normalized JSON into a DataFrame and converted it to Parquet in memory.
- Wrote transformed files back to S3 with output path/key conversion.
- Used queue-based decoupling to support scale and extensibility for future consumers.

## Detailed notes

- Designed for ad hoc uploads where input cadence is bursty and unpredictable.
- SNS -> SQS buffering smooths spikes and keeps Lambda processing scalable.
- Conversion uses in-memory buffers (`BytesIO`) to avoid local disk dependencies.
- Output format switch from JSON to Parquet improves downstream analytics performance.

## Code

```python
import boto3
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
        }
```

## Asset

![Serverless event-driven architecture](/images/data/ServerlessEventDrivenDataProcessing.svg)

## Key takeaway

SNS + SQS buffering around Lambda is a practical way to build resilient, scalable transformation pipelines for irregular upload workloads.
