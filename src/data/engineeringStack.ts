import { getLesson, lessonUrl, route } from './snowproDataEngineer';

export interface StackService { id: string; name: string; role: string; group?: string }
export interface StackCategory {
  id: string; title: string; label: string; color: string; question: string;
  responsibility: string; position: string; comparison: string; distinction: string;
  services: StackService[]; related: { label: string; href: string }[];
  sources?: { label: string; href: string }[];
}
const service = (id: string, name: string, role: string, group?: string): StackService => ({ id, name, role, group });
const lesson = (id: string, label: string) => ({ label, href: lessonUrl(getLesson(id)) });
const page = (path: string, label: string) => ({ label, href: route(path) });

export const stackCategories: StackCategory[] = [
  {
    id: 'sources', title: 'Business Systems / Data Sources', label: '業務とデータの発生源', color: '#7eafff', question: 'どこで、何のデータが生まれる？',
    responsibility: '受注、会計、人事、顧客対応などの業務を実行し、その結果を記録する。業務アプリの背後にあるDB、公開API、ファイルもデータの入口になる。',
    position: '主な出発点は業務側。OLTPは短い更新・参照を扱う取引処理、OLAPは大量データの集計・分析を中心に考える。業務システムにも分析機能はあるが、役割を分けると構成を理解しやすい。',
    comparison: '同じ業務要件を満たすERP、CRM、人事システム同士で比較する。ERPとCRM、人事システムは担当する業務が異なり、企業内で併用される。',
    distinction: 'Snowflakeなどの分析基盤は、受注・給与計算といった業務アプリそのものの置換ではない。APIとFilesは製品名ではなく、データを受け渡すインターフェースや形態。',
    services: [
      service('sap-s4hana','SAP S/4HANA','会計・販売・購買・生産などを統合するERP。SAP HANAデータベース上で動く。'),
      service('salesforce','Salesforce','営業・顧客対応などのCRMを中心とする製品群。ここでは業務データの発生源として捉える。'),
      service('workday','Workday','人事・財務などの業務を扱うクラウドアプリケーション群。'),
      service('operational-db','Operational Database','アプリの取引データを保持するDB。変更をCDCで下流へ届ける構成もある。'),
      service('source-api','API','業務機能やデータへアクセスする契約された接続口。認証・制限・変更管理が必要。'),
      service('files','Files','CSV、JSON、Parquet、文書など。形式、配置場所、到着頻度を確認する。'),
    ],
    related: [page('topics/data-engineering/','Data Engineering'),lesson('DEA-DM-01','データソースに応じたロード方式')],
    sources: [{label:'SAP S/4HANA',href:'https://www.sap.com/products/erp/s4hana.html'}],
  },
  {
    id: 'integration', title: 'Integration / Ingestion', label: '連携・取り込み', color: '#69d6e8', question: 'どう運び、どれだけ新鮮に保つ？',
    responsibility: 'データやイベントをシステム間で運ぶ。接続、認証、同期、到着検知、形式変換、再送を扱い、必要な鮮度と完全性を満たす。',
    position: 'ソースとデータ基盤の間が中心。Batchはまとめて処理、CDCは変更を取得する手法、Streamingは継続的な流れを扱う方式。CDCをStreamingで運ぶなど、組合せもある。',
    comparison: 'データ複製・取込ではFivetran、Airbyte、Informatica等を比較。業務アプリやAPIの連携ではSAP Integration Suite、MuleSoft等を比較。Kafka／Confluentはイベント配信の要件から検討する。',
    distinction: 'Kafkaはイベントを保持・配信できるが、分析用DWHとは役割が違う。ConfluentはKafkaを基盤とするストリーミング製品・サービスを提供する。Informaticaも単一の取込機能だけを指す名前ではない。',
    services: [
      service('informatica','Informatica','データ連携、品質、MDMなどの製品群。ここでは主に取込・統合の機能を見る。'),
      service('fivetran','Fivetran','管理されたConnectorによるデータ複製・同期。ソース対応と変更の伝播を確認する。'),
      service('airbyte','Airbyte','Connectorベースのデータ連携基盤。提供形態と運用責任を確認する。'),
      service('sap-integration-suite','SAP Integration Suite','SAP／非SAPアプリやAPI等をつなぐ連携サービス群。SAP BTPの文脈で位置付ける。'),
      service('mulesoft','MuleSoft','API管理とアプリケーション・データ連携の基盤。'),
      service('kafka-confluent','Kafka / Confluent','イベントストリーミング基盤。Producer、Topic、Consumerと再読取り位置を設計する。'),
    ],
    related: [lesson('DEA-DM-07','Connectorの選択'),lesson('DEA-DM-05','Streamingと復旧境界')],
    sources: [{label:'Apache Kafka',href:'https://kafka.apache.org/intro/'}],
  },
  {
    id: 'platforms', title: 'Data Platforms', label: '蓄積・処理の基盤', color: '#81dfba', question: 'どこに保存し、どこで計算する？',
    responsibility: 'データの保存、問い合わせ、計算、分析・AI向けの処理を支える。DWH、Data Lake、Lakehouseなどの構成を、必要なワークロードに合わせて選ぶ。',
    position: '複数ソースを集めて使う中心基盤。図の「蓄積・処理」に置くが、製品には取込・変換・ガバナンス・BI・AIの機能も含まれ、複数カテゴリにまたがる。',
    comparison: 'Snowflake、Databricks、BigQuery、Fabric、Redshiftは分析基盤の選択肢として比較できる。ただし統合範囲、実行エンジン、クラウド、データ形式、運用・課金単位は異なる。',
    distinction: 'AWS・Azure・Google Cloudはクラウド基盤で、その上の個別データ製品とは粒度が違う。dbtは主にこの基盤へ変換処理を実行させる。FabricはPower BIだけを指す名称ではない。',
    services: [
      service('snowflake','Snowflake','分析・データエンジニアリング・共有・AIなどを扱うデータプラットフォーム。'),
      service('databricks','Databricks','Lakehouseを軸にデータ処理、分析、AIを統合するプラットフォーム。Apache Spark自体とは区別する。'),
      service('bigquery','Google BigQuery','Google Cloudのマネージドな分析データ基盤。SQL分析などを提供する。'),
      service('fabric','Microsoft Fabric','OneLakeを土台に連携、エンジニアリング、DWH、分析等を統合するSaaS基盤。Power BIも含む。'),
      service('redshift','Amazon Redshift','AWSが提供する、SQL分析を中心としたクラウドDWHサービス。'),
    ],
    related: [page('topics/snowflake/','Snowflake'),page('topics/snowflake/core/','SnowPro Core'),page('topics/snowflake/data-engineer/','Advanced Data Engineer'),page('topics/cloud/','Google Cloud')],
    sources: [{label:'Microsoft Fabric',href:'https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview'}],
  },
  {
    id: 'transformation', title: 'Transformation / Orchestration', label: '変換・実行順序の管理', color: '#b69cf4', question: 'どう整え、どの順に動かす？',
    responsibility: '業務ルールに沿ってデータを整形・結合・集計し、再利用できるモデルを作る。処理の依存関係、起動、再試行、実行状況も管理する。',
    position: 'ELTでは基盤へロードした後で変換する。ETLではロード前に変換する。オーケストレーションは取込から提供までをまたいで制御し、必ず一工程だけに閉じるわけではない。',
    comparison: '変換の実装はdbt、SQL、Spark等を役割に応じて選ぶ。処理順序の管理はAirflow、Dagster、基盤内のTask等を比較する。dbtをAirflowから実行するように併用できる。',
    distinction: 'dbtはデータベースではなく、DWH／Lakehouse上で変換・モデリング・テストを行うためのツール。Airflowは業務データの保存先ではなく、ワークフローの順序・実行を管理する。SQLは言語、Sparkは処理エンジン。',
    services: [
      service('dbt','dbt','データモデル、依存関係、テスト、ドキュメントをコードで管理し、接続先の基盤で変換する。'),
      service('sql','SQL','データを定義・参照・変換する言語。実際の処理能力と機能は実行するDB／エンジンによる。'),
      service('spark','Apache Spark','バッチやストリーム処理などに使う分散データ処理エンジン。'),
      service('airflow','Apache Airflow','ワークフローを定義し、スケジュール・依存関係・実行状況を管理する。'),
      service('dagster','Dagster','データ資産とその依存関係を中心に処理の実行を管理するオーケストレーター。'),
    ],
    related: [lesson('DEA-DM-04','継続パイプラインの設計'),lesson('DEA-DT-06','dbt・Git・開発ワークフロー'),lesson('DEA-DT-07','Snowparkでの変換')],
    sources: [{label:'dbt',href:'https://docs.getdbt.com/docs/introduction'},{label:'Apache Airflow',href:'https://airflow.apache.org/docs/apache-airflow/stable/index.html'}],
  },
  {
    id: 'governance', title: 'MDM / Governance', label: '正本・意味・利用ルール', color: '#efb987', question: '何を正とし、誰がどう使う？',
    responsibility: 'MDMは顧客・商品・組織などのマスタを同定・統合し、業務で使う正しいレコードを管理する。Catalogは所在・意味・所有者・つながりを整理し、Governanceは品質・責任・利用ルールを運用する。',
    position: 'ソース、連携、蓄積、変換、利用の全体に関わる。MDMで整備したマスタは分析だけでなく業務システムへ戻す場合もある。ガバナンスは最後に一度実施して終わる工程ではない。',
    comparison: 'MDMではInformatica MDM、SAP MDG、Reltio等を比較する。Catalog／GovernanceではPurview、Collibraや基盤に結び付くUnity Catalog、Snowflake Horizon等を、対象範囲と制御機能から比較する。',
    distinction: 'Catalogに「顧客ID」の説明を登録しても、顧客レコードの名寄せや正本管理が完了するわけではない。MDM、メタデータ管理、アクセス制御は目的が異なり、組み合わせて使う。',
    services: [
      service('informatica-mdm','Informatica MDM','マスタの名寄せ、統合、品質管理、配信などを支えるMDM製品。','MDM'),
      service('sap-mdg','SAP MDG','SAP Master Data Governance。マスタの整備・承認・品質・配信を管理する。','MDM'),
      service('reltio','Reltio','複数ソースのマスタを統合し、共通のレコードとして利用するためのMDM基盤。','MDM'),
      service('purview','Microsoft Purview','データの発見・ガバナンス・保護等を扱う製品群。採用する機能と対象範囲を確認する。','Catalog / Governance'),
      service('collibra','Collibra','業務用語、Catalog、Lineage、責任やワークフローなどを扱うデータガバナンス基盤。','Catalog / Governance'),
      service('unity-catalog','Unity Catalog','Databricksの文脈で、データ・AI資産のアクセス制御やメタデータ等を統合管理する。','Catalog / Governance'),
      service('snowflake-horizon','Snowflake Horizon','Snowflake内外のデータの発見、ガバナンス、相互運用を支えるCatalog・管理機能。','Catalog / Governance'),
    ],
    related: [lesson('DEA-GV-01','分類・Lineage・品質'),lesson('DEA-GV-02','ポリシーによる保護'),lesson('DEA-GV-03','Horizonと共同分析')],
    sources: [{label:'SAP MDG',href:'https://www.sap.com/products/data-cloud/master-data-governance.html'}],
  },
  {
    id: 'consumption', title: 'Analytics / Consumption', label: '人・AI・アプリによる利用', color: '#91bafa', question: '誰が、どんな価値に変える？',
    responsibility: '整備したデータをダッシュボード、意思決定、モデル学習・推論、業務アプリやAPIで利用する。指標の意味、鮮度、権限、利用者に合う表現をそろえる。',
    position: 'この図では主な出口。BIはDWH／Lakehouse等を参照し、抽出・キャッシュを持つ構成もある。AIやアプリの結果が業務へ戻り、次のデータを生む循環もある。',
    comparison: 'BIの選択肢としてTableau、Power BI、Lookerを比較する。業務指標・モデル、組織のツール、配布、権限、費用から選ぶ。AI処理や業務APIはBIの単純な代替ではない。',
    distinction: 'BIは主に可視化・分析の利用レイヤー。画面があっても元データの品質や指標の定義が自動でそろうわけではない。Power BIと、それを含むFabric全体は分けて理解する。',
    services: [
      service('tableau','Tableau','対話的な可視化、ダッシュボード、分析を行うBIプラットフォーム。'),
      service('power-bi','Power BI','データモデル、レポート、ダッシュボード等を提供するMicrosoftのBI。'),
      service('looker','Looker','管理された意味モデルを軸に、分析・BIの利用を支える。BigQueryとは別の役割。'),
      service('ai-ml','AI / Machine Learning','データを学習・評価・推論・検索等に使う利用領域。処理の一部はデータ基盤内でも実行できる。'),
      service('business-apps','API / Business Applications','分析結果や整備データを、アプリ・外部サービス・業務フローへ届ける。'),
    ],
    related: [page('topics/ai-ml/','AI / Machine Learning'),lesson('DEA-DM-08','共有・Streamlitでの利用'),lesson('DEA-DT-05','Semantic ViewとCortexの利用')],
  },
  {
    id: 'cloud', title: 'Cloud Foundation', label: '全体を支えるクラウド基盤', color: '#75bbdf', question: '計算・保存・接続・認証をどこで支える？',
    responsibility: 'Compute、Storage、Network、Identityなど、アプリやデータ製品が動く基盤サービスを提供する。可用性、Region、接続、費用の設計にも関わる。',
    position: '処理フローの一工程ではなく、その下にある横断基盤。SaaSでは一部の運用を提供者が担う。全製品が同じクラウド・Regionで使えるわけではない。',
    comparison: 'AWS、Azure、Google Cloudを、既存契約・運用スキル・認証・ネットワーク・必要なサービスから比較する。まず一つで基礎を理解し、他へ対応付ければよい。',
    distinction: 'BigQueryはGoogle Cloud上のデータ製品、RedshiftはAWSのDWH。AzureはFabricやPower BIという個別製品名と同義ではない。クラウド基盤の選択とデータ基盤の選択は関連するが、同じ粒度の比較ではない。',
    services: [
      service('aws','AWS','Amazonのクラウド基盤。Compute・Storage・Networkに加え、Redshift等のデータサービスも提供する。'),
      service('azure','Microsoft Azure','Microsoftのクラウド基盤。認証、接続、ComputeやStorageなどを提供する。'),
      service('google-cloud','Google Cloud','Googleのクラウド基盤。BigQueryなどのマネージドなデータ・AIサービスも提供する。'),
    ],
    related: [page('topics/cloud/','Google Cloud'),page('topics/snowflake/core/diagrams/editions-regions-cloud-providers/','SnowflakeのCloud・Region・Edition')],
  },
  {
    id: 'engineering', title: 'Engineering Foundation', label: '作り、届け、運用する基盤', color: '#9baefa', question: '変更をどう再現し、安全に届ける？',
    responsibility: 'コード、実行環境、インフラ、テスト、デプロイを管理する。取込・変換・アプリ・AIなど、どの工程を作る場合にも共通して使う基礎。',
    position: 'データが通過する順番ではなく、全工程の開発・運用を支える横断レイヤー。SaaSの利用者が必ずDockerやKubernetesを自分で運用するわけではなく、必要な責任範囲に応じて使う。',
    comparison: 'GitとGitHubは履歴管理の仕組みと協働サービス。DockerとKubernetesはコンテナの作成・実行と、群の配置・運用を担い、単純な置換関係ではない。Terraformはクラウド固有のIaC等と比較する。',
    distinction: 'CI/CDは継続的なテスト・統合・デリバリーの実践／仕組みで、単一製品名ではない。これらはBIやDWHを代替せず、開発と変更管理を支える。',
    services: [
      service('git-github','Git / GitHub','Gitは変更履歴管理。GitHubはリポジトリ共有、レビュー、CI等を支える開発サービス。'),
      service('linux','Linux','OSとコマンドラインの基礎。ファイル、プロセス、権限、ネットワークを扱う。'),
      service('docker','Docker','アプリと依存関係をコンテナとして構成・実行するためのツール群。'),
      service('terraform','Terraform','インフラを宣言的なコードで構成・変更するIaCツール。'),
      service('kubernetes','Kubernetes','コンテナ群の配置、スケーリング、復旧などを管理する基盤。'),
      service('ci-cd','CI / CD','変更のビルド、テスト、統合、配布を継続的に行う仕組み。'),
    ],
    related: [{label:'Developer Foundationsへ',href:'#developer-foundations'},lesson('DEA-DT-06','データ処理の開発・版管理')],
  },
];

export function stackCategory(id: string): StackCategory {
  const category = stackCategories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown engineering category: ${id}`);
  return category;
}
export const flowSteps = [
  { number: '01', label: '業務データが生まれる', category: 'sources', output: '取引・顧客・人事・ファイル' },
  { number: '02', label: '連携・取り込む', category: 'integration', output: 'Batch / CDC / Streaming' },
  { number: '03', label: '蓄積・処理する', category: 'platforms', output: 'DWH / Data Lake / Lakehouse' },
  { number: '04', label: '変換・統制する', category: 'transformation', output: 'モデル・品質・処理の依存関係' },
  { number: '05', label: '人・AI・アプリが利用する', category: 'consumption', output: '可視化・推論・業務への提供' },
];

export const sapFamily = [
  {name:'SAP',type:'企業・製品群',role:'ERP、データベース、連携・開発基盤、MDMなどを提供する。同じ「SAP」でも製品名まで確認する。',category:'sources'},
  {name:'SAP S/4HANA',type:'ERP',role:'会計・販売・購買・生産等の業務を実行する。HANAデータベースを使うアプリケーション。',category:'sources'},
  {name:'SAP HANA',type:'データベース',role:'データを保持・処理するDB技術。S/4HANAというERPの製品名とは異なる。',category:'sources'},
  {name:'SAP BTP',type:'アプリの連携・拡張・開発基盤',role:'SAPアプリを含む連携や拡張・開発等を支える。基盤サービスの集合で、単一のERPやDBではない。',category:'integration'},
  {name:'SAP MDG',type:'マスタデータ管理',role:'マスタの品質、承認、統合・配信を管理する。Data Catalogの説明登録とは目的が異なる。',category:'governance'},
];
export const sapSources = [
  {label:'S/4HANA',href:'https://www.sap.com/products/erp/s4hana.html'},
  {label:'HANA Cloud',href:'https://www.sap.com/products/data-cloud/hana.html'},
  {label:'SAP BTP',href:'https://www.sap.com/products/technology-platform.html'},
  {label:'SAP MDG',href:'https://www.sap.com/products/data-cloud/master-data-governance.html'},
];

export const developerFoundations = [
  {id:'programming',title:'Programming Languages',examples:'Python · SQL · JavaScript / TypeScript',description:'値・型・制御構文を理解し、SQLでデータを調べ、Python等で小さな処理を組む。言語と、そのコードが動く実行環境を分けて考える。',link:lesson('DEA-DT-07','Snowparkで変換を学ぶ')},
  {id:'version-control',title:'Git & GitHub',examples:'Commit · Branch · Pull request',description:'変更を履歴として残し、差分をレビューする。Branch、Merge、Rollbackを使い、コードとドキュメントを再現できる状態にする。',link:{label:'Git／GitHubの位置付け',href:'#service-git-github'}},
  {id:'runtime',title:'Linux & Docker',examples:'Shell · Process · Container',description:'ファイル、権限、プロセス、ログを扱う。コンテナで依存関係をまとめ、ローカルと実行先の環境差を理解する。',link:{label:'開発・運用の横断基盤',href:'#category-engineering'}},
  {id:'web',title:'Web Development',examples:'HTML · CSS · HTTP · API',description:'画面とAPIの役割、リクエストとレスポンス、認証、静的サイトとサーバー処理を理解する。データを利用者へ届ける入口として学ぶ。',link:{label:'アプリ・APIの利用レイヤー',href:'#category-consumption'}},
  {id:'excel',title:'Excel & VBA',examples:'Tables · Validation · CSV · Macro',description:'入力、集計、データ検証、CSV出力、繰り返し作業を扱う。画面側のチェックと、DB側の整合性・業務ルールの責任を分ける。',link:{label:'データの発生源と受け渡し',href:'#category-sources'}},
  {id:'automation',title:'Automation & Workflow',examples:'Script · Schedule · Retry · CI/CD',description:'処理の依存関係、失敗、通知、再実行を設計する。繰り返しても意図した結果になることを確かめてから自動化する。',link:lesson('DEA-DM-06','APIとパイプライン自動化')},
];

export const learningPriorities = [
  {level:'A',title:'説明でき、少し触れる',color:'#79dfba',goal:'小さな例で動かし、選択の理由を説明する。',items:[
    {name:'OLTP / OLAP',note:'取引の更新・参照と、大量データの集計・分析の違い。',href:'#category-sources'},
    {name:'DWH / Data Lake / Lakehouse',note:'分析向けに整備するDWH、多様なデータを置くLake、Lakeへ管理・分析機能を統合するLakehouse。',href:'#category-platforms'},
    {name:'ETL / ELT',note:'取り出し・変換・ロードの順序。変換をどこで実行するか。',href:'#category-transformation'},
    {name:'Batch / CDC / Streaming',note:'まとめ処理・変更取得・継続処理。相互排他的ではない。',href:'#category-integration'},
    {name:'AWSまたはAzureの基礎',note:'IAM、Storage、Network、Computeをまず一つのクラウドで理解する。',href:'#category-cloud'},
    {name:'dbt',note:'小さなモデルと依存関係、テストを作る。',href:'#service-dbt'},
    {name:'SAP製品群の基本的な違い',note:'S/4HANA・HANA・BTP・MDGを役割で区別する。',href:'#sap-family'},
    {name:'MDM / Data Catalog / Governance',note:'正本管理・メタデータ整理・利用ルールの違い。',href:'#category-governance'},
  ]},
  {level:'B',title:'設計会話で役割を判別できる',color:'#7eafff',goal:'何を担い、何と比較するかを短く説明する。',items:[
    {name:'Databricks',note:'Lakehouseを軸とするデータ・AI基盤。',href:'#service-databricks'},
    {name:'Microsoft Fabric',note:'OneLakeと複数の分析ワークロードを統合する基盤。',href:'#service-fabric'},
    {name:'BigQuery',note:'Google Cloudの分析データ基盤。',href:'#service-bigquery'},
    {name:'Informatica',note:'連携・品質・MDMなど、対象の製品機能まで確認する。',href:'#service-informatica'},
    {name:'Fivetran',note:'Connectorでデータを複製・同期する。',href:'#service-fivetran'},
    {name:'Airflow',note:'処理のスケジュール・依存関係・実行を管理する。',href:'#service-airflow'},
    {name:'Kafka',note:'イベントの発行・保持・購読を担う。',href:'#service-kafka-confluent'},
    {name:'Purview / Collibra / Unity Catalog',note:'CatalogとGovernanceの対象範囲・制御境界を比べる。',href:'#category-governance'},
  ]},
  {level:'C',title:'名前とカテゴリを理解する',color:'#baa0e9',goal:'必要になったとき、どこを調べるか分かればよい。',items:[
    {name:'Salesforce',note:'CRMを中心とする業務アプリ・製品群。',href:'#service-salesforce'},
    {name:'Workday',note:'人事・財務などの業務アプリ。',href:'#service-workday'},
    {name:'ServiceNow',note:'ITサービス管理など、業務ワークフローの基盤。',href:'#category-sources'},
    {name:'MuleSoft',note:'API管理・アプリ連携。',href:'#service-mulesoft'},
    {name:'Boomi',note:'アプリやデータをつなぐ統合プラットフォーム。',href:'#category-integration'},
    {name:'Terraform',note:'インフラをコードで定義・変更する。',href:'#service-terraform'},
    {name:'Kubernetes',note:'コンテナ群の配置・運用。',href:'#service-kubernetes'},
    {name:'Data Observability製品',note:'鮮度・量・スキーマ・品質などの異常を観測する。MDMとは目的が異なる。',href:'#category-governance'},
  ]},
];
