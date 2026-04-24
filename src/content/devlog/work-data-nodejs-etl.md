---
title: ETL Using Node.js
date: 2025-04-04
slug: work-data-nodejs-etl
tags: nodejs,etl,streaming,csv
summary: Implemented non-blocking ETL flows in Node.js to stream XML into CSV and export SQL table data to CSV efficiently.
---

This entry documents my Node.js ETL experiments from the Data Projects set.

## Goal

Process structured data locally with streaming patterns that avoid high memory usage and keep I/O non-blocking.

## Stack

- Node.js
- `xml-flow` + `fast-csv`
- `mysql2/promise`

## Implementation

- Streamed XML data using `xml-flow` and transformed each `<item>` record directly into CSV output.
- Avoided loading the full XML file into memory, which keeps the process scalable for larger files.
- Built a SQL-to-CSV flow using `mysql2/promise` with `fast-csv` stream writing.
- Kept both flows asynchronous and event-loop friendly.

## Detailed notes

- XML ingestion and CSV export are fully stream-based to support large input files.
- Delimiter is configurable, allowing CSV/TSV style output with the same pipeline.
- SQL export uses async/await and stream writing for memory-efficient large table exports.
- Added a second ETL flow from MySQL to CSV to cover relational extraction.

## Code (XML to CSV)

```javascript
const fs = require("fs");
const xmlFlow = require("xml-flow");
const { format } = require("fast-csv");

const DELIMITER = "," // Change to "\t" for tab-separated values
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
});
```

## Code (MySQL to CSV)

```javascript
const mysql = require("mysql2/promise");
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

sqlToCsv("output.csv");
```

## Asset

![Node.js ETL flow](/images/data/NodejsETL.png)

## Key takeaway

Node.js streaming is a strong fit for ETL tasks where throughput and memory efficiency matter more than complex in-memory transformations.
