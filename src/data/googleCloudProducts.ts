// Curated product and feature map, based on Google Cloud catalog and reviewed 2026-09-23.
// An item may appear in more than one category when it serves more than one role.
export type CloudProduct = { name: string; description: string; formerly?: string; featured?: boolean };
export type CloudCategory = { id: string; slug: string; title: string; summary: string; label: string; products: CloudProduct[] };
export const cloudCategories: CloudCategory[] = [
  {
    "id": "01",
    "slug": "compute-containers",
    "title": "Compute & Containers",
    "summary": "VM、コンテナ、バッチ、AI向け計算基盤",
    "label": "COMPUTE",
    "products": [
      {
        "name": "Compute Engine",
        "description": "Google Cloud上でVMを動かす基本サービス",
        "featured": true
      },
      {
        "name": "Google Kubernetes Engine (GKE)",
        "description": "Kubernetesクラスタのマネージドサービス",
        "featured": true
      },
      {
        "name": "Cloud Run",
        "description": "コンテナをサーバーレスで実行",
        "featured": true
      },
      {
        "name": "Cloud Run functions",
        "description": "イベント駆動のサーバーレス関数"
      },
      {
        "name": "App Engine",
        "description": "アプリをコード中心でデプロイできるPaaS"
      },
      {
        "name": "Batch",
        "description": "大量のバッチジョブをマネージド実行"
      },
      {
        "name": "Cloud TPU",
        "description": "Google製MLアクセラレータ",
        "featured": true
      },
      {
        "name": "Cloud GPUs",
        "description": "GPUコンピューティング"
      },
      {
        "name": "AI Hypercomputer",
        "description": "TPU/GPU/ネットワークを組み合わせた大規模AI基盤"
      },
      {
        "name": "Cluster Toolkit",
        "description": "HPC・AIクラスタ構築"
      },
      {
        "name": "Cluster Director",
        "description": "Kubernetesクラスタ群の管理"
      },
      {
        "name": "Capacity Planner",
        "description": "Computeリソース需要・容量計画"
      },
      {
        "name": "VM Manager",
        "description": "VMのOS・パッチ・ポリシー管理"
      },
      {
        "name": "Shielded VMs",
        "description": "VMのブート・改ざん保護"
      },
      {
        "name": "Container-Optimized OS",
        "description": "コンテナ実行向けGoogle製OS"
      },
      {
        "name": "VMware Engine",
        "description": "VMware環境をGoogle Cloudで実行"
      },
      {
        "name": "Oracle on Google Cloud Compute",
        "description": "Oracleワークロード向けCompute環境"
      },
      {
        "name": "Workload Manager",
        "description": "SAP等のワークロード構成を評価・管理"
      }
    ]
  },
  {
    "id": "02",
    "slug": "storage",
    "title": "Storage",
    "summary": "オブジェクト、ファイル、ブロックの保存",
    "label": "STORAGE",
    "products": [
      {
        "name": "Cloud Storage",
        "description": "S3相当のオブジェクトストレージ",
        "featured": true
      },
      {
        "name": "Filestore",
        "description": "マネージドNFSファイルストレージ",
        "featured": true
      },
      {
        "name": "NetApp Volumes",
        "description": "NetApp ONTAPベースの高性能ファイルストレージ"
      },
      {
        "name": "Backup and DR Service",
        "description": "バックアップ・災害復旧"
      },
      {
        "name": "Persistent Disk",
        "description": "Compute Engine向けブロックストレージ",
        "featured": true
      },
      {
        "name": "Hyperdisk",
        "description": "高性能・高スループットのブロックストレージ",
        "featured": true
      },
      {
        "name": "Data Transfer Essentials",
        "description": "大量データをGoogle Cloudへ転送"
      }
    ]
  },
  {
    "id": "03",
    "slug": "networking",
    "title": "Networking",
    "summary": "VPC、接続、負荷分散、配信、ネットワーク防御",
    "label": "NETWORK",
    "products": [
      {
        "name": "Virtual Private Cloud (VPC)",
        "description": "Google Cloudの仮想ネットワーク",
        "featured": true
      },
      {
        "name": "Cloud Load Balancing",
        "description": "L4/L7ロードバランサ",
        "featured": true
      },
      {
        "name": "Cloud DNS",
        "description": "マネージドDNS",
        "featured": true
      },
      {
        "name": "Cloud NAT",
        "description": "Private VMからインターネットへのNAT"
      },
      {
        "name": "Cloud Router",
        "description": "BGPによる動的ルーティング"
      },
      {
        "name": "Cloud VPN",
        "description": "IPsec VPN接続",
        "featured": true
      },
      {
        "name": "Cloud Interconnect",
        "description": "オンプレとの専用線接続"
      },
      {
        "name": "Network Connectivity Center",
        "description": "VPC・拠点・クラウド間ネットワーク統合"
      },
      {
        "name": "Cloud CDN",
        "description": "Webコンテンツ向けCDN"
      },
      {
        "name": "Media CDN",
        "description": "動画・大規模配信向けCDN"
      },
      {
        "name": "Cloud Armor",
        "description": "DDoS防御・WAF"
      },
      {
        "name": "Cloud NGFW",
        "description": "マネージド次世代ファイアウォール"
      },
      {
        "name": "Cloud IDS",
        "description": "ネットワーク侵入検知"
      },
      {
        "name": "Secure Web Proxy",
        "description": "Web通信のセキュアプロキシ"
      },
      {
        "name": "Secure Access Connect",
        "description": "オンプレ等から安全にサービス接続"
      },
      {
        "name": "Cloud Service Mesh",
        "description": "マイクロサービス間通信管理"
      },
      {
        "name": "Network Intelligence Center",
        "description": "ネットワーク監視・トポロジ可視化"
      },
      {
        "name": "Network Service Tiers",
        "description": "ネットワーク性能・料金Tier"
      },
      {
        "name": "Service Extensions",
        "description": "Load Balancer等に独自ロジック追加"
      },
      {
        "name": "Network Security Integration",
        "description": "外部セキュリティ製品との統合"
      },
      {
        "name": "Cloud Domains",
        "description": "ドメイン登録・管理"
      },
      {
        "name": "VPC Service Controls",
        "description": "Google Cloudサービス周囲にセキュリティ境界"
      },
      {
        "name": "Cloud Number Registry",
        "description": "電話番号リソース管理"
      }
    ]
  },
  {
    "id": "04",
    "slug": "databases",
    "title": "Databases",
    "summary": "RDB、NoSQL、キャッシュ、移行",
    "label": "DATABASE",
    "products": [
      {
        "name": "Cloud SQL",
        "description": "MySQL / PostgreSQL / SQL Server",
        "featured": true
      },
      {
        "name": "AlloyDB for PostgreSQL",
        "description": "高性能PostgreSQL互換DB",
        "featured": true
      },
      {
        "name": "Spanner",
        "description": "グローバル分散RDB",
        "featured": true
      },
      {
        "name": "Bigtable",
        "description": "大規模Wide-column NoSQL",
        "featured": true
      },
      {
        "name": "Firestore",
        "description": "サーバーレスDocument DB",
        "featured": true
      },
      {
        "name": "Firestore with MongoDB compatibility",
        "description": "MongoDB互換Firestore"
      },
      {
        "name": "Memorystore for Valkey",
        "description": "インメモリKey-Value DB"
      },
      {
        "name": "Memorystore for Redis Cluster",
        "description": "マネージドRedis Cluster"
      },
      {
        "name": "AlloyDB Omni",
        "description": "オンプレ/他クラウドでも動くAlloyDB"
      },
      {
        "name": "Database Migration Service",
        "description": "DB移行"
      },
      {
        "name": "Datastream",
        "description": "CDC / リアルタイムデータレプリケーション"
      },
      {
        "name": "Database Center",
        "description": "DB群を統合管理"
      },
      {
        "name": "Oracle Database@Google Cloud",
        "description": "Oracle DatabaseをGoogle Cloud DC内で利用"
      },
      {
        "name": "Bare Metal Solution for Oracle",
        "description": "Oracle向けBare Metal環境"
      }
    ]
  },
  {
    "id": "05",
    "slug": "data-analytics",
    "title": "Data & Analytics",
    "summary": "収集、変換、分析、ガバナンス、BI",
    "label": "DATA",
    "products": [
      {
        "name": "BigQuery",
        "description": "サーバーレスDWH / Analytics",
        "featured": true
      },
      {
        "name": "Lakehouse",
        "description": "Google CloudのオープンLakehouse基盤",
        "formerly": "BigLake"
      },
      {
        "name": "Dataflow",
        "description": "Apache BeamベースのBatch / Streaming処理",
        "featured": true
      },
      {
        "name": "Managed Service for Apache Spark",
        "description": "Spark処理基盤",
        "formerly": "Dataproc"
      },
      {
        "name": "Pub/Sub",
        "description": "リアルタイムメッセージング・イベント取り込み",
        "featured": true
      },
      {
        "name": "Managed Service for Apache Kafka",
        "description": "マネージドKafka"
      },
      {
        "name": "Managed Service for Apache Airflow",
        "description": "AirflowによるWorkflow Orchestration",
        "formerly": "Cloud Composer",
        "featured": true
      },
      {
        "name": "Dataform",
        "description": "SQLベースELT・データ変換"
      },
      {
        "name": "Cloud Data Fusion",
        "description": "GUIベースのデータ統合・ETL"
      },
      {
        "name": "Datastream",
        "description": "CDC / データレプリケーション"
      },
      {
        "name": "Knowledge Catalog",
        "description": "データカタログ・ガバナンス・AIコンテキスト",
        "formerly": "Dataplex Universal Catalog"
      },
      {
        "name": "Dataproc Metastore",
        "description": "Hive Metastore"
      },
      {
        "name": "Looker",
        "description": "Enterprise BI",
        "featured": true
      },
      {
        "name": "Data Studio",
        "description": "ダッシュボード・セルフサービスBI",
        "formerly": "Looker Studio"
      },
      {
        "name": "Cortex Framework",
        "description": "SAPなどの企業データ分析テンプレート"
      },
      {
        "name": "Blockchain Analytics",
        "description": "Blockchainデータ分析"
      },
      {
        "name": "Manufacturing Data Engine",
        "description": "製造データ統合・分析"
      },
      {
        "name": "Data Agent Kit",
        "description": "Data Engineering / Science向けAgentツール群"
      }
    ]
  },
  {
    "id": "06",
    "slug": "ai-machine-learning",
    "title": "AI & Machine Learning",
    "summary": "モデルの利用・開発とエージェント運用",
    "label": "AI",
    "products": [
      {
        "name": "Gemini Enterprise Agent Platform",
        "description": "Google CloudのAI/ML・生成AI・Agent統合基盤",
        "formerly": "Vertex AI Platform",
        "featured": true
      },
      {
        "name": "Agent Studio",
        "description": "Prompt / Model / AgentをGUIで開発",
        "formerly": "Vertex AI Studio",
        "featured": true
      },
      {
        "name": "Model Garden",
        "description": "Google・OSS・他社モデルの探索・利用",
        "formerly": "Vertex AI Model Garden",
        "featured": true
      },
      {
        "name": "Agent Development Kit (ADK)",
        "description": "コードでAI Agentを開発",
        "featured": true
      },
      {
        "name": "Agent Runtime",
        "description": "Agentを本番実行"
      },
      {
        "name": "Colab Enterprise",
        "description": "Enterprise向けNotebook"
      },
      {
        "name": "Workbench",
        "description": "ML開発Notebook環境"
      },
      {
        "name": "Model Registry",
        "description": "MLモデル管理"
      },
      {
        "name": "Feature Store",
        "description": "ML Feature管理"
      },
      {
        "name": "Pipelines",
        "description": "ML Pipeline / MLOps"
      },
      {
        "name": "Model Evaluation",
        "description": "モデル評価"
      },
      {
        "name": "Custom Training",
        "description": "独自MLモデル学習"
      },
      {
        "name": "Gemini models",
        "description": "LLM / Multimodal AI",
        "featured": true
      },
      {
        "name": "Imagen",
        "description": "画像生成"
      },
      {
        "name": "Veo",
        "description": "動画生成"
      },
      {
        "name": "Cloud TPU",
        "description": "AI学習・推論アクセラレータ"
      },
      {
        "name": "Deep Learning VM",
        "description": "ML環境構築済みVM"
      },
      {
        "name": "Deep Learning Containers",
        "description": "ML環境構築済みContainer"
      },
      {
        "name": "TensorFlow Enterprise",
        "description": "Enterprise TensorFlow"
      },
      {
        "name": "Speech-to-Text",
        "description": "音声→テキスト"
      },
      {
        "name": "Text-to-Speech",
        "description": "テキスト→音声"
      },
      {
        "name": "Translation",
        "description": "翻訳"
      },
      {
        "name": "Vision API",
        "description": "画像認識"
      },
      {
        "name": "Video Intelligence API",
        "description": "動画解析"
      },
      {
        "name": "DocAI",
        "description": "文書解析"
      },
      {
        "name": "Agent Platform Vision",
        "description": "動画データをAI Agentで利用"
      },
      {
        "name": "Enterprise Knowledge Graph",
        "description": "Enterprise Knowledge Graph"
      },
      {
        "name": "Dialogflow ES",
        "description": "会話AI"
      },
      {
        "name": "Agent Search",
        "description": "AI検索 / Grounding"
      },
      {
        "name": "Vector Embeddings & Search",
        "description": "Embedding生成・Vector Search"
      },
      {
        "name": "Model Armor",
        "description": "AIモデル・Prompt/Responseのセキュリティ"
      }
    ]
  },
  {
    "id": "07",
    "slug": "application-platform-integration",
    "title": "Application Platform & Integration",
    "summary": "API、イベント、サーバーレスアプリ",
    "label": "APP",
    "products": [
      {
        "name": "Cloud Run",
        "description": "Serverless Container",
        "featured": true
      },
      {
        "name": "Cloud Run functions",
        "description": "Function as a Service"
      },
      {
        "name": "App Engine",
        "description": "PaaS"
      },
      {
        "name": "API Gateway",
        "description": "API Gateway",
        "featured": true
      },
      {
        "name": "Apigee",
        "description": "Enterprise API Management"
      },
      {
        "name": "Eventarc",
        "description": "Event Routing",
        "featured": true
      },
      {
        "name": "Cloud Tasks",
        "description": "非同期Task Queue"
      },
      {
        "name": "Cloud Scheduler",
        "description": "Cron Scheduler"
      },
      {
        "name": "Workflows",
        "description": "サービス間Workflow",
        "featured": true
      },
      {
        "name": "Application Integration",
        "description": "SaaS / Enterprise App統合"
      },
      {
        "name": "Integration Connectors",
        "description": "外部システムConnector"
      },
      {
        "name": "Service Infrastructure",
        "description": "API/Service提供基盤"
      },
      {
        "name": "Blockchain Node Engine",
        "description": "Blockchain Node Hosting"
      },
      {
        "name": "Buildpacks",
        "description": "Source → Container変換"
      }
    ]
  },
  {
    "id": "08",
    "slug": "devops-developer-tools",
    "title": "DevOps & Developer Tools",
    "summary": "コードからビルド、配布、デプロイまで",
    "label": "DEVOPS",
    "products": [
      {
        "name": "Gemini Code Assist",
        "description": "AI Coding Assistant"
      },
      {
        "name": "Cloud Shell",
        "description": "Browser Terminal",
        "featured": true
      },
      {
        "name": "gcloud CLI",
        "description": "Google Cloud CLI"
      },
      {
        "name": "Cloud Code",
        "description": "VS Code / JetBrains連携"
      },
      {
        "name": "Cloud Workstations",
        "description": "Cloud Developer Environment"
      },
      {
        "name": "Cloud Build",
        "description": "CI",
        "featured": true
      },
      {
        "name": "Cloud Deploy",
        "description": "CD",
        "featured": true
      },
      {
        "name": "Artifact Registry",
        "description": "Container / Package Registry",
        "featured": true
      },
      {
        "name": "Artifact Analysis",
        "description": "Artifact脆弱性分析"
      },
      {
        "name": "Secure Source Manager",
        "description": "Managed Git Repository"
      },
      {
        "name": "Developer Connect",
        "description": "GitHub等のSource連携"
      },
      {
        "name": "Config Connector",
        "description": "KubernetesからGCPリソース管理"
      },
      {
        "name": "Infrastructure Manager",
        "description": "IaCベースInfrastructure Deployment"
      },
      {
        "name": "Software Supply Chain Security",
        "description": "ソフトウェア供給網保護"
      },
      {
        "name": "App Design Center",
        "description": "Cloud Architecture設計"
      },
      {
        "name": "App Hub",
        "description": "Application Resources可視化"
      }
    ]
  },
  {
    "id": "09",
    "slug": "security-identity",
    "title": "Security & Identity",
    "summary": "アクセス、暗号鍵、脅威検出、境界",
    "label": "SECURITY",
    "products": [
      {
        "name": "IAM",
        "description": "ユーザー・Service Accountの権限制御",
        "featured": true
      },
      {
        "name": "Cloud Identity",
        "description": "Identity / Device管理"
      },
      {
        "name": "Identity Platform",
        "description": "アプリユーザー認証"
      },
      {
        "name": "Identity-Aware Proxy",
        "description": "IdentityベースApplication Access"
      },
      {
        "name": "Access Context Manager",
        "description": "Context-aware access"
      },
      {
        "name": "Cloud KMS",
        "description": "暗号鍵管理",
        "featured": true
      },
      {
        "name": "Secret Manager",
        "description": "Password / API Key等の秘密情報管理",
        "featured": true
      },
      {
        "name": "Certificate Authority Service",
        "description": "Private CA"
      },
      {
        "name": "Certificate Manager",
        "description": "TLS Certificate管理"
      },
      {
        "name": "Security Command Center",
        "description": "Cloud Security統合管理",
        "featured": true
      },
      {
        "name": "Google Security Operations",
        "description": "SIEM / SOAR / Threat Detection"
      },
      {
        "name": "Sensitive Data Protection",
        "description": "個人情報等の検出・Masking"
      },
      {
        "name": "Cloud Asset Inventory",
        "description": "Cloud Resource Inventory"
      },
      {
        "name": "Cloud Armor",
        "description": "WAF / DDoS"
      },
      {
        "name": "Cloud IDS",
        "description": "Intrusion Detection"
      },
      {
        "name": "Cloud NGFW",
        "description": "Firewall"
      },
      {
        "name": "VPC Service Controls",
        "description": "Data Exfiltration防止境界"
      },
      {
        "name": "Binary Authorization",
        "description": "Container Deployment Security"
      },
      {
        "name": "Model Armor",
        "description": "AI Security"
      },
      {
        "name": "Web Risk",
        "description": "危険URL検知"
      },
      {
        "name": "Fraud Defense",
        "description": "Fraud / Bot検知"
      },
      {
        "name": "Policy Intelligence",
        "description": "IAM Policy分析"
      },
      {
        "name": "Access Approval",
        "description": "GoogleによるData Accessを承認制に"
      },
      {
        "name": "Access Transparency",
        "description": "Google側アクセスをAudit"
      },
      {
        "name": "Assured Workloads",
        "description": "規制・Compliance環境"
      },
      {
        "name": "Assured OSS",
        "description": "検証済OSS Package"
      },
      {
        "name": "Audit Manager",
        "description": "Compliance Audit管理"
      },
      {
        "name": "Chrome Enterprise Premium",
        "description": "Zero Trust Access"
      },
      {
        "name": "Sovereign Controls by Partners",
        "description": "Sovereign Cloud制御"
      }
    ]
  },
  {
    "id": "10",
    "slug": "management-observability",
    "title": "Management & Observability",
    "summary": "監視、ログ、課金、リソース管理",
    "label": "OPERATIONS",
    "products": [
      {
        "name": "Cloud Monitoring",
        "description": "Metrics / Alert / Dashboard",
        "featured": true
      },
      {
        "name": "Cloud Logging",
        "description": "Logs集約・検索",
        "featured": true
      },
      {
        "name": "Cloud Trace",
        "description": "Distributed Trace"
      },
      {
        "name": "Cloud Profiler",
        "description": "CPU / Memory Profiling"
      },
      {
        "name": "Error Reporting",
        "description": "Application Error集約"
      },
      {
        "name": "Cloud Billing",
        "description": "Billing / Cost管理",
        "featured": true
      },
      {
        "name": "Cloud Quotas",
        "description": "Quota管理"
      },
      {
        "name": "Recommender",
        "description": "Cost / Security / Resource最適化提案"
      },
      {
        "name": "Cloud Hub",
        "description": "Cloud Resource統合管理"
      },
      {
        "name": "Resource Manager",
        "description": "Organization / Folder / Project管理",
        "featured": true
      },
      {
        "name": "Service Usage",
        "description": "API有効化・Usage管理"
      },
      {
        "name": "Service Health",
        "description": "Google Cloud障害情報"
      },
      {
        "name": "Unified Maintenance",
        "description": "Maintenance / Update管理"
      },
      {
        "name": "Cloud Marketplace",
        "description": "SaaS / VM Image等導入"
      },
      {
        "name": "Service Catalog",
        "description": "社内向け承認済みService Catalog"
      }
    ]
  },
  {
    "id": "11",
    "slug": "hybrid-multicloud-migration",
    "title": "Hybrid, Multicloud & Migration",
    "summary": "他クラウド・オンプレとの接続と移行",
    "label": "HYBRID",
    "products": [
      {
        "name": "GKE Multi-Cloud",
        "description": "AWS / Azure等も含むKubernetes管理",
        "featured": true
      },
      {
        "name": "Config Sync",
        "description": "Git等をSource of TruthにしてK8s設定同期"
      },
      {
        "name": "Policy Controller",
        "description": "Kubernetes Policy管理"
      },
      {
        "name": "Config Controller",
        "description": "Declarative Infrastructure管理"
      },
      {
        "name": "Service Directory",
        "description": "Service Discovery"
      },
      {
        "name": "Migration Center",
        "description": "Cloud Migration全体の評価・計画",
        "featured": true
      },
      {
        "name": "Migrate to VMs",
        "description": "VM → Compute Engine",
        "featured": true
      },
      {
        "name": "Migrate to Containers",
        "description": "VM → Container / GKE"
      },
      {
        "name": "Mainframe Assessment Tool",
        "description": "Mainframe移行評価"
      },
      {
        "name": "Mainframe Connector",
        "description": "Mainframe ↔ Google Cloud接続"
      },
      {
        "name": "Dual Run",
        "description": "Migration時に旧新システム並行処理"
      },
      {
        "name": "Cloud Location Finder",
        "description": "最適Region選定"
      }
    ]
  },
  {
    "id": "12",
    "slug": "industry-specialized",
    "title": "Industry & Specialized",
    "summary": "業界・メディア・専門用途のソリューション",
    "label": "INDUSTRY",
    "products": [
      {
        "name": "Anti Money Laundering AI",
        "description": "金融機関向けAML検知",
        "featured": true
      },
      {
        "name": "Healthcare Data Engine",
        "description": "医療データ統合",
        "featured": true
      },
      {
        "name": "Manufacturing Data Engine",
        "description": "製造データ統合",
        "featured": true
      },
      {
        "name": "AI Commerce Search",
        "description": "EC向けAI検索"
      },
      {
        "name": "Talent Solutions",
        "description": "求人・Job Search AI"
      },
      {
        "name": "Telecom Network Automation",
        "description": "通信ネットワーク自動化"
      },
      {
        "name": "Telecom Subscriber Insights API",
        "description": "通信契約者分析"
      },
      {
        "name": "Vision API Product Search",
        "description": "画像から商品検索"
      },
      {
        "name": "Live Stream API",
        "description": "Live Streaming"
      },
      {
        "name": "Transcoder API",
        "description": "Video Transcoding"
      },
      {
        "name": "Video Stitcher API",
        "description": "動画への広告挿入"
      },
      {
        "name": "Blockchain Analytics",
        "description": "Blockchain Analytics"
      },
      {
        "name": "Blockchain Node Engine",
        "description": "Managed Blockchain Nodes"
      },
      {
        "name": "Spectrum Access System",
        "description": "Spectrum共有管理"
      }
    ]
  }
];
