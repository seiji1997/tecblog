# SnowPro Core Diagram Registry

Total: 36 diagrams

| ID | Domain | Priority | Status | Diagram | Purpose | Keywords | Route |
|---|---|---|---|---|---|---|---|
| M-01 | MASTER | P0 | ready | SnowPro Core Full Study Map | 5ドメイン・配点・主要概念・学習順序を1枚で俯瞰する。 | COF-C03, 5 domains, study flow | snowpro-core-full-study-map |
| FA-01 | D1 | P0 | next | Three-layer Architecture | Database Storage / Compute / Cloud Servicesの役割と接続関係を理解する。 | Database Storage, Compute, Cloud Services, MPP | three-layer-architecture |
| FA-02 | D1 | P1 | planned | Object Hierarchy & Account Structure | Organization / Account / Database / Schema / Objectの階層を整理する。 | Organization, Account, Database, Schema, Table, View | object-hierarchy-account-structure |
| FA-03 | D1 | P1 | planned | Snowflake / Iceberg / Hybrid Tables | 主要テーブル型と、データ・メタデータをどこで管理するかを比較する。 | Snowflake Table, Iceberg Table, Hybrid Table, Unistore | table-storage-types |
| FA-04 | D1 | P0 | planned | Micro-partitions & Storage Model | Snowflakeテーブルがマイクロパーティションへ自動分割される仕組みを理解する。 | Micro-partitions, Columnar, Metadata, Automatic clustering | micro-partitions-storage-model |
| FA-05 | D1 | P0 | planned | Virtual Warehouse Model | Warehouseが独立Computeとして、SQL・DML・ロード等へComputeを提供する構造を理解する。 | Virtual Warehouse, Compute, Size, Auto suspend, Workload isolation | virtual-warehouse-model |
| FA-06 | D1 | P2 | planned | Editions, Regions & Cloud Providers | Edition・Region・Cloud Providerによって変わる提供機能と配置を整理する。 | Standard, Enterprise, Business Critical, Region, AWS, Azure, GCP | editions-regions-cloud-providers |
| FA-07 | D1 | P1 | planned | Snowpark / Streamlit / Notebooks / Git Map | Snowflake上でコード・分析・アプリを作る主要開発機能の位置づけを整理する。 | Snowpark, Streamlit, Notebooks, Git integration | developer-experience-map |
| FA-08 | D1 | P1 | planned | Cortex AI & ML Feature Map | Snowflake Cortexを中心にAI / ML機能の役割を俯瞰する。 | Cortex AI, Cortex Search, Cortex Analyst, Document AI, ML | cortex-ai-ml-map |
| AG-01 | D2 | P0 | planned | RBAC Grant Chain | User → Role → Privilege → Objectの権限付与経路を図解する。 | RBAC, Role, Privilege, Grant, Ownership | rbac-grant-chain |
| AG-02 | D2 | P0 | planned | System-defined Roles & Hierarchy | ACCOUNTADMIN / SECURITYADMIN / SYSADMIN等のシステムロールと継承を整理する。 | ACCOUNTADMIN, SECURITYADMIN, SYSADMIN, USERADMIN, PUBLIC | system-role-hierarchy |
| AG-03 | D2 | P1 | planned | Authentication Map | Password / MFA / SSO / Key-pair / OAuth等の認証方式を比較する。 | MFA, SSO, SAML, Key pair, OAuth | authentication-map |
| AG-04 | D2 | P1 | planned | Network Security Map | Network PolicyやPrivate Connectivityなど接続経路の制御を整理する。 | Network policy, Private connectivity, IP allowlist | network-security-map |
| AG-05 | D2 | P0 | planned | Governance Policies | Masking Policy / Row Access Policy / Tags / Classificationの役割を整理する。 | Masking policy, Row access policy, Tags, Classification | governance-policies |
| AG-06 | D2 | P2 | planned | Access History, Lineage & Trust Center | 誰がどのデータを使ったか、データがどこから来たか、リスクをどう確認するかを整理する。 | Access History, Lineage, Trust Center, Governance | access-history-lineage-trust |
| AG-07 | D2 | P1 | planned | Resource Monitors & Cost Governance | Credits、Warehouse消費、Resource Monitorによるコスト統制を整理する。 | Credits, Resource Monitor, Usage, Cost | resource-monitors-cost-governance |
| LC-01 | D3 | P0 | planned | Stage Types | User / Table / Named StageとInternal / External Stageを整理する。 | User stage, Table stage, Named stage, Internal, External | stage-types |
| LC-02 | D3 | P1 | planned | File Formats | CSV / JSON / Parquet / Avro / ORC等とFile Format Objectの関係を整理する。 | CSV, JSON, Parquet, Avro, ORC, FILE FORMAT | file-formats |
| LC-03 | D3 | P0 | planned | COPY INTO <table> | StageからTableへBulk Loadする基本フロー、Validation、変換を理解する。 | COPY INTO table, ON_ERROR, VALIDATION_MODE, Transformation | copy-into-table |
| LC-04 | D3 | P1 | planned | COPY INTO <location> / Unloading | Table / Query ResultからStageや外部ストレージへアンロードする流れを理解する。 | COPY INTO location, Unload, Stage, File format | copy-into-location |
| LC-05 | D3 | P0 | planned | Snowpipe vs Snowpipe Streaming | ファイルベース継続ロードと低レイテンシストリーミングの違いを整理する。 | Snowpipe, Snowpipe Streaming, Continuous load, Streaming | snowpipe-streaming |
| LC-06 | D3 | P0 | planned | Structured / Semi-structured / Unstructured Ingestion | データ形状ごとの取り込み・型・格納方法を比較する。 | Structured, Semi-structured, Unstructured, VARIANT, FILE | data-shapes-ingestion |
| LC-07 | D3 | P0 | planned | Drivers, Connectors, CLI & APIs | Snowsight / CLI / Drivers / Connectors / APIs / BI Toolsの接続方法を俯瞰する。 | Snowsight, CLI, JDBC, ODBC, Python Connector, API, BI | connectivity-map |
| PT-01 | D4 | P0 | planned | Query Execution & Caching | Query Result Cache / Warehouse Cacheを含むクエリ実行とキャッシュの考え方を整理する。 | Result cache, Warehouse cache, Query execution | query-execution-caching |
| PT-02 | D4 | P0 | planned | Micro-partition Pruning | マイクロパーティションのメタデータを使ってスキャン対象を削減する仕組みを理解する。 | Micro-partition, Pruning, Metadata, Scan | micro-partition-pruning |
| PT-03 | D4 | P1 | planned | Clustering & Clustering Depth | 自然クラスタリング、Clustering Key、Clustering Depthの関係を整理する。 | Clustering key, Clustering depth, Reclustering | clustering-depth |
| PT-04 | D4 | P0 | planned | Warehouse Tuning Decision Map | Scale up / Scale out / Multi-cluster / Queue / Spillを状況別に判断する。 | Scale up, Scale out, Multi-cluster, Queue, Spill | warehouse-tuning |
| PT-05 | D4 | P0 | planned | Query Profile Reading Guide | Query Profileの演算子・時間・スキャン・Spillを見てボトルネックを特定する。 | Query Profile, Operator, Scan, Spill, Bottleneck | query-profile |
| PT-06 | D4 | P1 | planned | Optimization Services | Search Optimization / Materialized Views / Query Accelerationの役割と適用条件を比較する。 | Search Optimization, Materialized View, Query Acceleration | optimization-services |
| PT-07 | D4 | P0 | planned | SQL & Semi-structured Transformation | VARIANTアクセス、FLATTEN、CAST、SQL変換の基本パターンを整理する。 | VARIANT, FLATTEN, LATERAL, CAST, SQL | sql-semi-structured-transform |
| PT-08 | D4 | P0 | planned | Streams, Tasks & Dynamic Tables | 変更追跡・スケジュール実行・宣言的パイプラインの違いを整理する。 | Streams, Tasks, Dynamic Tables, CDC, Pipeline | streams-tasks-dynamic-tables |
| CO-01 | D5 | P0 | planned | Secure Data Sharing | Provider / Share / Consumerでデータをコピーせず共有する仕組みを理解する。 | Provider, Consumer, Share, Secure Data Sharing | secure-data-sharing |
| CO-02 | D5 | P1 | planned | Listings & Marketplace | Listings、Private Listings、Marketplaceの配布モデルを整理する。 | Listing, Marketplace, Private listing | listings-marketplace |
| CO-03 | D5 | P1 | planned | Reader Accounts | Snowflakeアカウントを持たないConsumerへ共有するReader Accountの位置づけを理解する。 | Reader Account, Consumer, Provider | reader-accounts |
| CO-04 | D5 | P2 | planned | Data Clean Rooms | 複数組織が生データを直接公開せず分析・照合するコラボレーションモデルを理解する。 | Data Clean Rooms, Collaboration, Privacy | data-clean-rooms |
| CO-05 | D5 | P0 | planned | Time Travel, Fail-safe & Zero-copy Clone | 履歴参照・復旧・保護・Cloneの役割と保持期間の考え方を区別する。 | Time Travel, Fail-safe, Zero-copy Clone, UNDROP | time-travel-failsafe-clone |
