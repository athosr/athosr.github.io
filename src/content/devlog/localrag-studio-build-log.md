---
title: Building LocalRAG Studio
date: 2026-04-24
slug: localrag-studio-build-log
tags: rag,electron,python,postgres
summary: I built a local-first RAG desktop app that ingests personal documents, runs retrieval with pgvector/pgvectorscale, and returns grounded answers with citations.
---

Last week I worked on [LocalRAG Studio](https://github.com/athosr/LocalRAG_Studio), an open-source desktop app that lets you chat with your own documents through a fully local, privacy-focused RAG pipeline.

![Feature progress screenshot](/devlog/localragstudio.png)

## What I built

- An Electron desktop shell with React UI for document library, chat, and settings.
- A local Python FastAPI `rag-service` for ingest, embeddings, retrieval, and answer generation.
- PostgreSQL 18 + `pgvector` + `pgvectorscale` (StreamingDiskANN + cosine search) for vector storage and retrieval.
- End-to-end citations in answers using `[#n]` references mapped back to source chunks.

## Why this project matters

I built LocalRAG Studio to solve a practical requirement in my own workflow: private knowledge retrieval with predictable control over data, infrastructure, and model behavior.  
Instead of depending on third-party cloud platforms for document indexing and inference, I designed the stack to run locally end to end and use self-hosted models through Ollama.  
This approach gives me stronger data ownership, lower operational friction for experimentation, and a development environment where retrieval quality and model configuration can be tuned directly without external platform constraints, while still preserving the option to connect to other LLM APIs when needed.

## Technical highlights

- Monorepo split across `apps/desktop`, `packages/*`, and `rag-service`.
- Versioned SQL migrations and typed config validation.
- Ingestion flow with chunking + dedupe by content hash.
- Query flow that embeds the question, performs vector search, and builds grounded responses with citations.

