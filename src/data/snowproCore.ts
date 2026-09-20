export type SnowProDomainId = 'D1' | 'D2' | 'D3' | 'D4' | 'D5';

export type SnowProDomain = {
  id: SnowProDomainId;
  slug: string;
  title: string;
  shortTitle: string;
  weight: number;
  color: string;
  summary: string;
  focus: string[];
  outcomes: string[];
  docs: { label: string; href: string }[];
};

export type SnowProDiagram = {
  id: string;
  slug: string;
  domain: SnowProDomainId | 'MASTER';
  title: string;
  purpose: string;
  keywords: string[];
  priority: 'P0' | 'P1' | 'P2';
  status: 'ready' | 'next' | 'planned';
  related: string[];
  docs: { label: string; href: string }[];
};

export const exam = {
  code: 'COF-C03',
  title: 'SnowPro Core',
  candidateExperience: 'Snowflakeを使用した6か月以上の実務経験が推奨',
  certificationUrl: 'https://learn.snowflake.com/en/certifications/snowpro-core-jpn-C03/',
  studyGuideUrl: 'https://learn.snowflake.com/en/certifications/snowpro-core-jpn-C03/?pdf_name=SnowProCoreStudyGuideC03_JPN',
};

export const publicCapabilities = [
  { label: 'AIデータクラウドアーキテクチャ', domains: ['D1'] },
  { label: 'アカウント / 仮想ウェアハウス管理', domains: ['D1', 'D2'] },
  { label: 'ロード / アンロード / 変換', domains: ['D3', 'D4'] },
  { label: '構造化 / 半構造化 / 非構造化データ', domains: ['D1', 'D3', 'D4'] },
  { label: 'パフォーマンス監視 / 最適化', domains: ['D4'] },
  { label: 'データコラボレーション / 保護', domains: ['D2', 'D5'] },
  { label: 'Snowflake接続', domains: ['D3'] },
] as const;

export const domains: SnowProDomain[] = [
  {
    id: 'D1',
    slug: 'features-architecture',
    title: 'Snowflake AI Data Cloud Features & Architecture',
    shortTitle: 'Features & Architecture',
    weight: 31,
    color: '#67d8ff',
    summary: 'Snowflakeの土台となるアーキテクチャ、Compute / Storage、テーブル、主要開発機能、AI機能を理解する最大配点領域。',
    focus: [
      '3層アーキテクチャ',
      'Virtual Warehouse',
      'Micro-partitions',
      'Snowflake / Iceberg / Hybrid Tables',
      'Snowpark / Streamlit / Notebooks',
      'Snowflake Cortex / AI機能',
      'Edition / Region / Cloud provider',
    ],
    outcomes: [
      'Snowflakeの各レイヤーが何を担当するか説明できる',
      'StorageとComputeが分離されているメリットを説明できる',
      '主要テーブル型・開発機能・AI機能の位置づけを判断できる',
    ],
    docs: [
      { label: '重要な概念およびアーキテクチャ', href: 'https://docs.snowflake.com/ja/user-guide/intro-key-concepts' },
      { label: 'ウェアハウスの概要', href: 'https://docs.snowflake.com/ja/user-guide/warehouses-overview' },
    ],
  },
  {
    id: 'D2',
    slug: 'account-governance',
    title: 'Account Management & Data Governance',
    shortTitle: 'Account & Governance',
    weight: 20,
    color: '#7ee6b6',
    summary: 'アカウント、RBAC、認証、ネットワーク、ガバナンス、コスト統制など、Snowflakeを安全に運用するための領域。',
    focus: [
      'RBAC / Ownership',
      'System roles',
      'Authentication / MFA / SSO / Key pair',
      'Network policies',
      'Masking / Row Access / Tags',
      'Resource Monitor / Cost control',
      'Access History / Lineage / Trust Center',
    ],
    outcomes: [
      '誰が何にアクセスできるかをRoleとPrivilegeで追える',
      '認証・ネットワーク・データポリシーを用途別に区別できる',
      'アカウント利用状況とコスト統制の基本を説明できる',
    ],
    docs: [
      { label: 'アクセス制御の概要', href: 'https://docs.snowflake.com/ja/user-guide/security-access-control-overview' },
      { label: 'Snowflake認証の概要', href: 'https://docs.snowflake.com/ja/user-guide/security-authentication-overview' },
    ],
  },
  {
    id: 'D3',
    slug: 'loading-connectivity',
    title: 'Data Loading, Unloading & Connectivity',
    shortTitle: 'Loading & Connectivity',
    weight: 18,
    color: '#f8c45c',
    summary: 'Stage、File Format、COPY、Snowpipe、外部ストレージ、Drivers / Connectorsまで、データをSnowflakeへ出し入れする領域。',
    focus: [
      'Internal / External Stage',
      'File Format',
      'COPY INTO',
      'Snowpipe / Snowpipe Streaming',
      'Structured / Semi-structured / Unstructured data',
      'Drivers / Connectors / CLI / APIs',
      'External data patterns',
    ],
    outcomes: [
      'Source → Stage → Tableのロード経路を説明できる',
      'Bulk / Continuous ingestionを要件で選べる',
      'アプリケーションやBIツールの接続手段を整理できる',
    ],
    docs: [
      { label: 'データのロードの概要', href: 'https://docs.snowflake.com/ja/user-guide/data-load-overview' },
      { label: 'Snowflakeに接続するためのアプリケーションおよびツール', href: 'https://docs.snowflake.com/ja/guides-overview-connecting' },
    ],
  },
  {
    id: 'D4',
    slug: 'performance-transformation',
    title: 'Performance Optimization, Querying & Transformation',
    shortTitle: 'Performance & Transformation',
    weight: 21,
    color: '#a991ff',
    summary: 'Query Profile、キャッシュ、Pruning、Clustering、最適化サービス、Streams / Tasks / Dynamic Tablesなどを扱う領域。',
    focus: [
      'Caching',
      'Micro-partition pruning',
      'Warehouse tuning',
      'Query Profile',
      'Search Optimization / Materialized Views / Query Acceleration',
      'SQL / FLATTEN',
      'Streams / Tasks / Dynamic Tables',
      'UDF / Stored Procedure / Snowpark execution',
    ],
    outcomes: [
      '遅いクエリの原因を複数観点で切り分けられる',
      'Pruning・Caching・Warehouse tuningの違いを説明できる',
      '継続的な変換処理の選択肢を比較できる',
    ],
    docs: [
      { label: 'Snowflakeでのパフォーマンスの最適化', href: 'https://docs.snowflake.com/ja/guides-overview-performance' },
      { label: '半構造化データの操作', href: 'https://docs.snowflake.com/ja/user-guide/querying-semistructured' },
    ],
  },
  {
    id: 'D5',
    slug: 'collaboration',
    title: 'Data Collaboration',
    shortTitle: 'Collaboration',
    weight: 10,
    color: '#ff8eaf',
    summary: 'Secure Data Sharing、Listings、Marketplace、Reader Account、Data Clean Roomsなど、データを安全に共有・活用する領域。',
    focus: [
      'Secure Data Sharing',
      'Provider / Consumer',
      'Listings / Marketplace',
      'Reader Accounts',
      'Data Clean Rooms',
      'Time Travel / Fail-safe / Zero-copy Clone',
    ],
    outcomes: [
      'コピーなし共有の仕組みを説明できる',
      'Marketplace / Listings / Reader Accountの用途を区別できる',
      '共有・保護機能を要件に合わせて選べる',
    ],
    docs: [
      { label: 'Secure Data Sharingについて', href: 'https://docs.snowflake.com/ja/user-guide/data-sharing-intro' },
      { label: 'Time Travelの理解と使用', href: 'https://docs.snowflake.com/ja/user-guide/data-time-travel' },
    ],
  },
];

export const diagrams: SnowProDiagram[] = [
  {
    id: 'M-01', slug: 'snowpro-core-full-study-map', domain: 'MASTER',
    title: 'SnowPro Core Full Study Map',
    purpose: '5ドメイン・配点・主要概念・学習順序を1枚で俯瞰する。',
    keywords: ['COF-C03', '5 domains', '31/20/18/21/10', 'study flow'],
    priority: 'P0', status: 'ready', related: ['FA-01', 'AG-01', 'LC-01', 'PT-01', 'CO-01'],
    docs: [{ label: 'SnowPro Core', href: 'https://learn.snowflake.com/en/certifications/snowpro-core-jpn-C03/' }],
  },

  { id:'FA-01', slug:'three-layer-architecture', domain:'D1', title:'Three-layer Architecture', purpose:'Database Storage / Compute / Cloud Servicesの役割と接続関係を理解する。', keywords:['Database Storage','Compute','Cloud Services','MPP'], priority:'P0', status:'next', related:['FA-04','FA-05'], docs:[{label:'重要な概念およびアーキテクチャ',href:'https://docs.snowflake.com/ja/user-guide/intro-key-concepts'}] },
  { id:'FA-02', slug:'object-hierarchy-account-structure', domain:'D1', title:'Object Hierarchy & Account Structure', purpose:'Organization / Account / Database / Schema / Objectの階層を整理する。', keywords:['Organization','Account','Database','Schema','Table','View'], priority:'P1', status:'planned', related:['AG-01'], docs:[] },
  { id:'FA-03', slug:'table-storage-types', domain:'D1', title:'Snowflake / Iceberg / Hybrid Tables', purpose:'主要テーブル型と、データ・メタデータをどこで管理するかを比較する。', keywords:['Snowflake Table','Iceberg Table','Hybrid Table','Unistore'], priority:'P1', status:'planned', related:['FA-04','LC-07'], docs:[{label:'重要な概念およびアーキテクチャ',href:'https://docs.snowflake.com/ja/user-guide/intro-key-concepts'}] },
  { id:'FA-04', slug:'micro-partitions-storage-model', domain:'D1', title:'Micro-partitions & Storage Model', purpose:'Snowflakeテーブルがマイクロパーティションへ自動分割される仕組みを理解する。', keywords:['Micro-partitions','Columnar','Metadata','Automatic clustering'], priority:'P0', status:'planned', related:['PT-02','PT-03'], docs:[{label:'重要な概念およびアーキテクチャ',href:'https://docs.snowflake.com/ja/user-guide/intro-key-concepts'}] },
  { id:'FA-05', slug:'virtual-warehouse-model', domain:'D1', title:'Virtual Warehouse Model', purpose:'Warehouseが独立Computeとして、SQL・DML・ロード等へComputeを提供する構造を理解する。', keywords:['Virtual Warehouse','Compute','Size','Auto suspend','Workload isolation'], priority:'P0', status:'planned', related:['PT-04','AG-07'], docs:[{label:'ウェアハウスの概要',href:'https://docs.snowflake.com/ja/user-guide/warehouses-overview'}] },
  { id:'FA-06', slug:'editions-regions-cloud-providers', domain:'D1', title:'Editions, Regions & Cloud Providers', purpose:'Edition・Region・Cloud Providerによって変わる提供機能と配置を整理する。', keywords:['Standard','Enterprise','Business Critical','Region','AWS','Azure','GCP'], priority:'P2', status:'planned', related:['AG-05','CO-04'], docs:[] },
  { id:'FA-07', slug:'developer-experience-map', domain:'D1', title:'Snowpark / Streamlit / Notebooks / Git Map', purpose:'Snowflake上でコード・分析・アプリを作る主要開発機能の位置づけを整理する。', keywords:['Snowpark','Streamlit','Notebooks','Git integration'], priority:'P1', status:'planned', related:['PT-08'], docs:[] },
  { id:'FA-08', slug:'cortex-ai-ml-map', domain:'D1', title:'Cortex AI & ML Feature Map', purpose:'Snowflake Cortexを中心にAI / ML機能の役割を俯瞰する。', keywords:['Cortex AI','Cortex Search','Cortex Analyst','Document AI','ML'], priority:'P1', status:'planned', related:['FA-07'], docs:[] },

  { id:'AG-01', slug:'rbac-grant-chain', domain:'D2', title:'RBAC Grant Chain', purpose:'User → Role → Privilege → Objectの権限付与経路を図解する。', keywords:['RBAC','Role','Privilege','Grant','Ownership'], priority:'P0', status:'planned', related:['AG-02','AG-03'], docs:[{label:'アクセス制御の概要',href:'https://docs.snowflake.com/ja/user-guide/security-access-control-overview'}] },
  { id:'AG-02', slug:'system-role-hierarchy', domain:'D2', title:'System-defined Roles & Hierarchy', purpose:'ACCOUNTADMIN / SECURITYADMIN / SYSADMIN等のシステムロールと継承を整理する。', keywords:['ACCOUNTADMIN','SECURITYADMIN','SYSADMIN','USERADMIN','PUBLIC'], priority:'P0', status:'planned', related:['AG-01'], docs:[] },
  { id:'AG-03', slug:'authentication-map', domain:'D2', title:'Authentication Map', purpose:'Password / MFA / SSO / Key-pair / OAuth等の認証方式を比較する。', keywords:['MFA','SSO','SAML','Key pair','OAuth'], priority:'P1', status:'planned', related:['AG-04','LC-07'], docs:[{label:'Snowflake認証の概要',href:'https://docs.snowflake.com/ja/user-guide/security-authentication-overview'}] },
  { id:'AG-04', slug:'network-security-map', domain:'D2', title:'Network Security Map', purpose:'Network PolicyやPrivate Connectivityなど接続経路の制御を整理する。', keywords:['Network policy','Private connectivity','IP allowlist'], priority:'P1', status:'planned', related:['AG-03','LC-07'], docs:[] },
  { id:'AG-05', slug:'governance-policies', domain:'D2', title:'Governance Policies', purpose:'Masking Policy / Row Access Policy / Tags / Classificationの役割を整理する。', keywords:['Masking policy','Row access policy','Tags','Classification'], priority:'P0', status:'planned', related:['AG-06'], docs:[] },
  { id:'AG-06', slug:'access-history-lineage-trust', domain:'D2', title:'Access History, Lineage & Trust Center', purpose:'誰がどのデータを使ったか、データがどこから来たか、リスクをどう確認するかを整理する。', keywords:['Access History','Lineage','Trust Center','Governance'], priority:'P2', status:'planned', related:['AG-05'], docs:[] },
  { id:'AG-07', slug:'resource-monitors-cost-governance', domain:'D2', title:'Resource Monitors & Cost Governance', purpose:'Credits、Warehouse消費、Resource Monitorによるコスト統制を整理する。', keywords:['Credits','Resource Monitor','Usage','Cost'], priority:'P1', status:'planned', related:['FA-05','PT-04'], docs:[] },

  { id:'LC-01', slug:'stage-types', domain:'D3', title:'Stage Types', purpose:'User / Table / Named StageとInternal / External Stageを整理する。', keywords:['User stage','Table stage','Named stage','Internal','External'], priority:'P0', status:'planned', related:['LC-02','LC-03'], docs:[{label:'データのロードの概要',href:'https://docs.snowflake.com/ja/user-guide/data-load-overview'}] },
  { id:'LC-02', slug:'file-formats', domain:'D3', title:'File Formats', purpose:'CSV / JSON / Parquet / Avro / ORC等とFile Format Objectの関係を整理する。', keywords:['CSV','JSON','Parquet','Avro','ORC','FILE FORMAT'], priority:'P1', status:'planned', related:['LC-01','LC-06'], docs:[] },
  { id:'LC-03', slug:'copy-into-table', domain:'D3', title:'COPY INTO <table>', purpose:'StageからTableへBulk Loadする基本フロー、Validation、変換を理解する。', keywords:['COPY INTO table','ON_ERROR','VALIDATION_MODE','Transformation'], priority:'P0', status:'planned', related:['LC-01','LC-02','LC-04'], docs:[{label:'データのロードの概要',href:'https://docs.snowflake.com/ja/user-guide/data-load-overview'}] },
  { id:'LC-04', slug:'copy-into-location', domain:'D3', title:'COPY INTO <location> / Unloading', purpose:'Table / Query ResultからStageや外部ストレージへアンロードする流れを理解する。', keywords:['COPY INTO location','Unload','Stage','File format'], priority:'P1', status:'planned', related:['LC-03'], docs:[{label:'データのアンロードの概要',href:'https://docs.snowflake.com/ja/user-guide/data-unload-overview'}] },
  { id:'LC-05', slug:'snowpipe-streaming', domain:'D3', title:'Snowpipe vs Snowpipe Streaming', purpose:'ファイルベース継続ロードと低レイテンシストリーミングの違いを整理する。', keywords:['Snowpipe','Snowpipe Streaming','Continuous load','Streaming'], priority:'P0', status:'planned', related:['LC-03','PT-08'], docs:[] },
  { id:'LC-06', slug:'data-shapes-ingestion', domain:'D3', title:'Structured / Semi-structured / Unstructured Ingestion', purpose:'データ形状ごとの取り込み・型・格納方法を比較する。', keywords:['Structured','Semi-structured','Unstructured','VARIANT','FILE'], priority:'P0', status:'planned', related:['LC-02','PT-07'], docs:[{label:'半構造化データのロード',href:'https://docs.snowflake.com/ja/user-guide/semistructured-intro'}] },
  { id:'LC-07', slug:'connectivity-map', domain:'D3', title:'Drivers, Connectors, CLI & APIs', purpose:'Snowsight / CLI / Drivers / Connectors / APIs / BI Toolsの接続方法を俯瞰する。', keywords:['Snowsight','CLI','JDBC','ODBC','Python Connector','API','BI'], priority:'P0', status:'planned', related:['AG-03','AG-04'], docs:[{label:'Snowflakeに接続するためのアプリケーションおよびツール',href:'https://docs.snowflake.com/ja/guides-overview-connecting'}] },

  { id:'PT-01', slug:'query-execution-caching', domain:'D4', title:'Query Execution & Caching', purpose:'Query Result Cache / Warehouse Cacheを含むクエリ実行とキャッシュの考え方を整理する。', keywords:['Result cache','Warehouse cache','Query execution'], priority:'P0', status:'planned', related:['PT-04','PT-05'], docs:[{label:'パフォーマンスの最適化',href:'https://docs.snowflake.com/ja/guides-overview-performance'}] },
  { id:'PT-02', slug:'micro-partition-pruning', domain:'D4', title:'Micro-partition Pruning', purpose:'マイクロパーティションのメタデータを使ってスキャン対象を削減する仕組みを理解する。', keywords:['Micro-partition','Pruning','Metadata','Scan'], priority:'P0', status:'planned', related:['FA-04','PT-03'], docs:[] },
  { id:'PT-03', slug:'clustering-depth', domain:'D4', title:'Clustering & Clustering Depth', purpose:'自然クラスタリング、Clustering Key、Clustering Depthの関係を整理する。', keywords:['Clustering key','Clustering depth','Reclustering'], priority:'P1', status:'planned', related:['PT-02','PT-06'], docs:[] },
  { id:'PT-04', slug:'warehouse-tuning', domain:'D4', title:'Warehouse Tuning Decision Map', purpose:'Scale up / Scale out / Multi-cluster / Queue / Spillを状況別に判断する。', keywords:['Scale up','Scale out','Multi-cluster','Queue','Spill'], priority:'P0', status:'planned', related:['FA-05','AG-07','PT-05'], docs:[{label:'ウェアハウスのパフォーマンス最適化',href:'https://docs.snowflake.com/ja/user-guide/performance-query-warehouse'}] },
  { id:'PT-05', slug:'query-profile', domain:'D4', title:'Query Profile Reading Guide', purpose:'Query Profileの演算子・時間・スキャン・Spillを見てボトルネックを特定する。', keywords:['Query Profile','Operator','Scan','Spill','Bottleneck'], priority:'P0', status:'planned', related:['PT-01','PT-04','PT-06'], docs:[] },
  { id:'PT-06', slug:'optimization-services', domain:'D4', title:'Optimization Services', purpose:'Search Optimization / Materialized Views / Query Accelerationの役割と適用条件を比較する。', keywords:['Search Optimization','Materialized View','Query Acceleration'], priority:'P1', status:'planned', related:['PT-03','PT-05'], docs:[] },
  { id:'PT-07', slug:'sql-semi-structured-transform', domain:'D4', title:'SQL & Semi-structured Transformation', purpose:'VARIANTアクセス、FLATTEN、CAST、SQL変換の基本パターンを整理する。', keywords:['VARIANT','FLATTEN','LATERAL','CAST','SQL'], priority:'P0', status:'planned', related:['LC-06','PT-08'], docs:[{label:'半構造化データのクエリ',href:'https://docs.snowflake.com/ja/user-guide/querying-semistructured'}] },
  { id:'PT-08', slug:'streams-tasks-dynamic-tables', domain:'D4', title:'Streams, Tasks & Dynamic Tables', purpose:'変更追跡・スケジュール実行・宣言的パイプラインの違いを整理する。', keywords:['Streams','Tasks','Dynamic Tables','CDC','Pipeline'], priority:'P0', status:'planned', related:['LC-05','FA-07'], docs:[] },

  { id:'CO-01', slug:'secure-data-sharing', domain:'D5', title:'Secure Data Sharing', purpose:'Provider / Share / Consumerでデータをコピーせず共有する仕組みを理解する。', keywords:['Provider','Consumer','Share','Secure Data Sharing'], priority:'P0', status:'planned', related:['CO-02','CO-03'], docs:[{label:'Secure Data Sharingについて',href:'https://docs.snowflake.com/ja/user-guide/data-sharing-intro'}] },
  { id:'CO-02', slug:'listings-marketplace', domain:'D5', title:'Listings & Marketplace', purpose:'Listings、Private Listings、Marketplaceの配布モデルを整理する。', keywords:['Listing','Marketplace','Private listing'], priority:'P1', status:'planned', related:['CO-01','CO-03'], docs:[] },
  { id:'CO-03', slug:'reader-accounts', domain:'D5', title:'Reader Accounts', purpose:'Snowflakeアカウントを持たないConsumerへ共有するReader Accountの位置づけを理解する。', keywords:['Reader Account','Consumer','Provider'], priority:'P1', status:'planned', related:['CO-01','CO-02'], docs:[] },
  { id:'CO-04', slug:'data-clean-rooms', domain:'D5', title:'Data Clean Rooms', purpose:'複数組織が生データを直接公開せず分析・照合するコラボレーションモデルを理解する。', keywords:['Data Clean Rooms','Collaboration','Privacy'], priority:'P2', status:'planned', related:['CO-01','AG-05'], docs:[] },
  { id:'CO-05', slug:'time-travel-failsafe-clone', domain:'D5', title:'Time Travel, Fail-safe & Zero-copy Clone', purpose:'履歴参照・復旧・保護・Cloneの役割と保持期間の考え方を区別する。', keywords:['Time Travel','Fail-safe','Zero-copy Clone','UNDROP'], priority:'P0', status:'planned', related:['FA-04','AG-05'], docs:[{label:'Time Travelの理解と使用',href:'https://docs.snowflake.com/ja/user-guide/data-time-travel'},{label:'Fail-safeの理解',href:'https://docs.snowflake.com/ja/user-guide/data-failsafe'}] },
];

export const glossary = [
  ['Account', 'Snowflakeの管理・課金・セキュリティ境界となる単位', 'D2'],
  ['Organization', '複数のSnowflake Accountをまとめて管理する上位単位', 'D1'],
  ['Database', 'Schemaを格納する論理コンテナ', 'D1'],
  ['Schema', 'Table / View / Stage等のObjectを整理する論理コンテナ', 'D1'],
  ['Virtual Warehouse', 'クエリやDML、ロード処理などを実行する独立Computeクラスタ', 'D1'],
  ['Micro-partition', 'Snowflakeがテーブルデータを自動管理する連続ストレージ単位', 'D1'],
  ['Cloud Services', '認証、メタデータ、クエリ最適化等を担うSnowflakeの制御レイヤー', 'D1'],
  ['Snowflake Table', 'Snowflake管理ストレージに最適化形式で保持される標準テーブル', 'D1'],
  ['Iceberg Table', '外部クラウドストレージ上のIcebergデータをSnowflakeで扱うテーブル', 'D1'],
  ['Hybrid Table', '低レイテンシのランダムRead / Writeやトランザクション用途向けテーブル', 'D1'],
  ['Snowpark', 'Snowflake内でPython等によるデータ処理を実行する開発フレームワーク', 'D1'],
  ['Streamlit', 'Snowflake上でデータアプリを構築できるPythonベースのUIフレームワーク', 'D1'],
  ['Snowflake Notebooks', 'Snowflake上でSQL / Pythonを対話的に実行するNotebook環境', 'D1'],
  ['Cortex', 'SnowflakeのAI / ML関連機能群', 'D1'],
  ['RBAC', 'Roleを介してPrivilegeをUserへ付与するアクセス制御モデル', 'D2'],
  ['Privilege', 'Objectに対して実行できる操作権限', 'D2'],
  ['Ownership', 'Objectを所有し、権限管理できる特別なPrivilege', 'D2'],
  ['Masking Policy', '列データをRole等に応じて動的にマスクするPolicy', 'D2'],
  ['Row Access Policy', '行単位で参照可否を制御するPolicy', 'D2'],
  ['Network Policy', '接続元IP等を基準にSnowflakeへのアクセスを制限するPolicy', 'D2'],
  ['Resource Monitor', 'WarehouseのCredit消費を監視・通知・制御する仕組み', 'D2'],
  ['Stage', 'ロード / アンロードするファイルの置き場所を表すSnowflake Object / Location', 'D3'],
  ['File Format', 'CSV / JSON等の解析ルールを定義するObject', 'D3'],
  ['COPY INTO', 'TableへのロードまたはLocationへのアンロードに使うSQLコマンド', 'D3'],
  ['Snowpipe', 'Cloud Storageのファイルを継続的に取り込むサーバーレス機能', 'D3'],
  ['Snowpipe Streaming', '低レイテンシで行データを継続取り込みするストリーミング機能', 'D3'],
  ['VARIANT', '半構造化データを柔軟に格納するSnowflakeデータ型', 'D3'],
  ['FILE', 'Stage上の非構造化ファイルへの参照情報を保持するデータ型', 'D3'],
  ['Driver', 'JDBC / ODBC等、アプリケーションからSnowflakeへ接続するクライアント部品', 'D3'],
  ['Connector', 'Python Connector等、言語 / ツール向けの接続ライブラリ', 'D3'],
  ['Result Cache', '同一クエリ結果を再利用するキャッシュ', 'D4'],
  ['Warehouse Cache', 'Warehouseローカルのデータキャッシュ', 'D4'],
  ['Pruning', 'Micro-partitionメタデータを使って不要なスキャンを除外する処理', 'D4'],
  ['Clustering Key', '大規模テーブルのデータ配置を特定列で改善するためのキー', 'D4'],
  ['Query Profile', 'クエリの実行計画と処理時間・データ量等を可視化する機能', 'D4'],
  ['Search Optimization', '選択性の高い検索パターンを高速化する最適化サービス', 'D4'],
  ['Materialized View', 'クエリ結果を事前計算・保持して参照を高速化するView', 'D4'],
  ['Query Acceleration', 'クエリの一部を追加Computeへオフロードして高速化するサービス', 'D4'],
  ['Stream', 'Tableの変更情報を追跡するChange Data Capture Object', 'D4'],
  ['Task', 'SQL等をスケジュールまたは依存関係で実行するObject', 'D4'],
  ['Dynamic Table', 'Target Lagに基づきクエリ結果を継続更新する宣言的パイプラインObject', 'D4'],
  ['FLATTEN', 'ARRAY / OBJECT等の半構造化データを行へ展開するTable Function', 'D4'],
  ['UDF', '再利用可能なユーザー定義関数', 'D4'],
  ['Stored Procedure', '複数ステップの処理ロジックをSnowflake内で実行するProcedure', 'D4'],
  ['Secure Data Sharing', '基礎データをコピーせず他Accountへ共有するSnowflake機能', 'D5'],
  ['Share', 'ProviderがConsumerへ公開するObject集合', 'D5'],
  ['Listing', 'Snowflake上でData Productを配布する仕組み', 'D5'],
  ['Marketplace', 'Listingsを発見・利用できるSnowflake Marketplace', 'D5'],
  ['Reader Account', 'Snowflake Accountを持たない利用者へShared Dataを提供するProvider管理Account', 'D5'],
  ['Data Clean Room', '生データを直接公開せず複数組織で安全に分析する環境', 'D5'],
  ['Time Travel', '過去時点のデータ参照・復旧・Cloneを可能にする継続的データ保護機能', 'D5'],
  ['Fail-safe', 'Time Travel期間後にSnowflakeが災害復旧目的で保持する追加保護期間', 'D5'],
  ['Zero-copy Clone', 'データを物理コピーせずObjectを高速Cloneする仕組み', 'D5'],
] as const;

export const resources = [
  { category:'Certification', label:'SnowPro Core', href: exam.certificationUrl },
  { category:'Certification', label:'COF-C03 Study Guide', href: exam.studyGuideUrl },
  { category:'Architecture', label:'重要な概念およびアーキテクチャ', href:'https://docs.snowflake.com/ja/user-guide/intro-key-concepts' },
  { category:'Warehouse', label:'ウェアハウスの概要', href:'https://docs.snowflake.com/ja/user-guide/warehouses-overview' },
  { category:'Security', label:'アクセス制御の概要', href:'https://docs.snowflake.com/ja/user-guide/security-access-control-overview' },
  { category:'Loading', label:'データのロードの概要', href:'https://docs.snowflake.com/ja/user-guide/data-load-overview' },
  { category:'Semi-structured', label:'半構造化データのロード', href:'https://docs.snowflake.com/ja/user-guide/semistructured-intro' },
  { category:'Performance', label:'パフォーマンスの最適化', href:'https://docs.snowflake.com/ja/guides-overview-performance' },
  { category:'Sharing', label:'Secure Data Sharingについて', href:'https://docs.snowflake.com/ja/user-guide/data-sharing-intro' },
  { category:'Connectivity', label:'Snowflakeに接続するアプリケーションおよびツール', href:'https://docs.snowflake.com/ja/guides-overview-connecting' },
];

export const domainById = (id: SnowProDomainId) => domains.find((domain) => domain.id === id)!;
export const domainBySlug = (slug: string) => domains.find((domain) => domain.slug === slug);
export const diagramsForDomain = (id: SnowProDomainId) => diagrams.filter((diagram) => diagram.domain === id);
export const diagramBySlug = (slug: string) => diagrams.find((diagram) => diagram.slug === slug);
