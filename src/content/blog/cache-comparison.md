---
title: "Snowflakeのキャッシュを整理する"
description: "Result CacheとWarehouse Cacheの違いを、試験で迷わない粒度まで整理する。"
publishedAt: 2026-09-20
category: "Snowflake"
topic: "snowflake"
subtopic: "Performance"
tags: ["Snowflake", "Performance", "Cache"]
---

## Result Cache

同一クエリ結果を再利用できるキャッシュ。Warehouseを動かさずに結果が返るケースがある。

## Warehouse Cache

Virtual Warehouseのローカルディスクに保持されるデータキャッシュ。Warehouseを再開・サイズ変更すると挙動が変わるため、Result Cacheとは別物として覚える。

## 試験での見分け方

「クエリ結果そのものを再利用」なら Result Cache。  
「Warehouseが読み込んだデータをローカルに保持」なら Warehouse Cache。
