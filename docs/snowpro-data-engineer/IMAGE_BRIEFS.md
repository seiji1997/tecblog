# Advanced Data Engineer — 図解制作ブリーフ

基準：DEA-C02 / 2026-03-06更新Study Guide。教材確認日：2026-09-21。

全27枚。現時点では画像を生成していません。本文・比較表・確認問題は実装済みです。

## 共通の制作方針

- 既存Coreと合わせた濃紺背景、読みやすい白い文字、分野別アクセント。D1 cyan / D2 green / D3 gold / D4 purple / D5 pink。
- タイトル、図解ID、関係・判断の構造を中心にする。本文をすべて小さな文字で詰め込まない。
- 重要な関係・順序・数値は本文と照合する。正確な技術図はSVGやHTML等で組む方法も選べる。最終PNG / WebP等を指定名で保存する。
- 各図は下の4パネルを基本とする。矢印には転送・参照・実行・更新などの意味を付ける。
- 実行場所、権限、再実行の境界を曖昧にしない。保証の範囲、EditionやRegion等の可変条件は本文と公式Docsで確認する。
- 作成後、文字、数値、タイトル、ID、矢印、本文との整合を確認する。同一図は1形式のみを配置する。
- ファイル名に `(1)`、日付、追加サフィックスを付けない。大文字小文字もCSVの指定に合わせる。

## 配点

| Domain | 比率 | 図解数 |
|---|---:|---:|
| D1 Data Movement | 28% | 9 |
| D2 Performance Optimization | 19% | 4 |
| D3 Storage and Data Protection | 14% | 3 |
| D4 Data Governance | 14% | 3 |
| D5 Data Transformation | 25% | 7 |
| Master | 全体 | 1 |

## DEA-M-01 — Advanced Data Engineer Study Map

- Objective：全体
- 保存先：`src/assets/snowflake/data-engineer/master/dea-m-01-advanced-data-engineer-study-map.png`
- ゴール：Coreから引き継ぐ基礎と、DEA-C02の5ドメイン・22 Objectives・学習順を一枚で把握する。
- 要点：5ドメインを、一つのパイプラインの設計・検証に結び付ける。
- Core前提：M-01 / LC-05 / PT-08 / PT-05

### 4パネル

1. **5ドメインと配点 28 / 19 / 14 / 14 / 25%**

   学習の基準はDEA-C02のStudy Guide。D1は取込と提供、D2は診断と効率、D3は復旧と物理配置、D4は利用統制、D5は変換と開発を担当する。配点だけでなく、各Objectiveの判断を自分の言葉で説明できるか確認する。

2. **Source → Move → Transform → Protect → Serve の流れ**

   一つのデータセットについて、入力元、必要な鮮度、変換、保管、公開先、障害時の再開地点を順に書く。たとえば日次ファイルとKafkaイベントでは、取込の単位も復旧方法も異なるが、下流の品質・権限・監視はどちらにも必要になる。

3. **Core再利用リンクとAdvanced差分**

   Coreで学んだ用語と基本構造はリンク先で復習する。Advancedでは、要件を根拠に方式を選び、他の候補を採用しなかった理由、失敗時の影響、検証方法まで説明する。単に機能名を知っている状態から設計を評価できる状態へ進む。

4. **理解 → 図解 → Lab → 復習の学習フロー**

   まずD1とD5でパイプラインを組み、D2で遅延と費用を測り、D3・D4で復旧と保護を確認する。各教材の確認問題、Practice Notes、Objective自己チェックを使って弱点へ戻る。画像が未掲載でも本文・比較表・演習で学習を進められる。

**シナリオ：** 日次ファイルと随時イベントを同じ分析用途へ届ける構成を、5ドメインへ対応付ける。

**避ける誤解：** 公式概要の5つの能力は、Study Guideの5ドメイン名と一対一には対応しない。

**公式資料：**

- [DEA-C02 Study Guide](https://publish-p93462-e887935.adobeaemcloud.com/content/dam/snowpro-sg/SnowProDataEngineerStudyGuide.pdf)

## DEA-DM-01 — Loading Pattern & Impact

- Objective：1.1
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-01-loading-pattern-impact.png`
- ゴール：データ量・鮮度・入力形態・再実行要件からロード方式を選ぶ。
- 要点：量・鮮度・入力単位・復旧条件を先に決めて方式を選ぶ。
- Core前提：LC-03 / LC-05 / LC-07

### 4パネル

1. **入力条件：量・頻度・形式・遅延目標**

   最初にデータの形、1回の量、到着頻度、許容遅延、再送できる期間を整理する。レイクのファイル、APIの応答、オンプレミスの変更ログでは、Snowflakeへ渡す前の取得処理も異なる。ネットワークと認証の経路を含めて入力条件を定義する。

2. **選択肢：Bulk COPY / Snowpipe / Streaming**

   まとまったファイルはWarehouseでCOPY INTOを実行するバルクロードが候補になる。ファイル到着に応じて継続取込するならSnowpipe、アプリやイベントから行を直接送るならSnowpipe Streamingを検討する。StreamingはファイルをStageへ置くことを前提にしない。

3. **影響：Compute・費用・運用責任**

   バルクではWarehouseのサイズ・並列性・稼働時間を利用者が調整する。SnowpipeやStreamingは利用方式に対応したサービス費用とクライアント運用を確認する。取込の低遅延化だけでなく、下流の変換と提供まで含めた鮮度を測る。

4. **検証：履歴・重複・再実行**

   ロード履歴による同一ファイルの扱いと、業務キーが重複しないことは別の問題。成功件数、ソースとの照合、再実行対象、障害時に再送できる位置を決める。要件を満たす方式の中から費用と運用負荷を比較する。

**シナリオ：** 夜間の大規模ファイルと秒単位イベントで方式を選び分ける。

**避ける誤解：** 最速・最安の方式は条件次第。取込だけでなく下流の鮮度と再処理まで評価する。

**公式資料：**

- [データロード概要](https://docs.snowflake.com/en/user-guide/data-load-overview)
- [COPY INTO table](https://docs.snowflake.com/en/sql-reference/sql/copy-into-table)
- [Snowpipe Streaming](https://docs.snowflake.com/en/user-guide/snowpipe-streaming/data-load-snowpipe-streaming-overview)

## DEA-DM-02 — Formats, Stages & Schema Detection

- Objective：1.2
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-02-formats-stages-schema-detection.png`
- ゴール：形式、Stage、Integration、暗号化、圧縮、スキーマ検出、ファイルメタデータを一つの経路として説明する。
- 要点：場所・信頼関係・解析・追跡の4つを分けて設計する。
- Core前提：LC-01 / LC-02 / LC-06 / AG-03

### 4パネル

1. **Cloud storage → Integration → Stage → File Format**

   Stageはファイルの場所とアクセス設定、File Formatは解析ルール、Storage Integrationは外部クラウドストレージへアクセスする信頼関係を担う。外部Stageではクラウド側IAMとSnowflake側の権限を両方確認する。認証情報をSQLに直接埋め込む設計を避ける。

2. **INFER_SCHEMAと初期テーブル設計**

   INFER_SCHEMAで対応形式の列と型を調べ、CREATE TABLE USING TEMPLATEなどの初期設計に利用できる。検出結果はサンプリングやファイル群に依存するため、欠損・型の揺れ・列名・大文字小文字を確認する。自動検出と継続的なSchema Evolutionは別の工程。 ロードの代表形式はCSV、JSON、Avro、ORC、Parquet、XML。形式ごとにスキーマ検出・圧縮・半構造化型の対応が異なる。

3. **暗号化・圧縮・解析設定の境界**

   CSVの区切り・引用符・NULL表現、JSONの外側配列、Parquetの型、文字コード、圧縮と暗号化を別々に切り分ける。クラウド保存時の暗号化とクライアント側暗号化では鍵の管理位置が違う。URLも認証・有効期間の異なる種類を区別する。

4. **METADATA$列とファイル追跡**

   METADATA$FILENAME、METADATA$FILE_ROW_NUMBER、METADATA$FILE_LAST_MODIFIEDなどを取込時に保持すると、問題の行をソースファイルへ戻せる。業務データだけでなく、処理時刻・バッチ識別子も残すと件数照合と再実行範囲の判定がしやすい。

**シナリオ：** 新規Parquetデータを検出し、安全な外部Stage経由でロードする。

**避ける誤解：** クラウド側IAM、Snowflake権限、暗号化、解析設定は別々の確認箇所。設定手順はクラウドごとに異なる。

**公式資料：**

- [INFER_SCHEMA](https://docs.snowflake.com/en/sql-reference/functions/infer_schema)
- [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)
- [Storage Integration](https://docs.snowflake.com/en/user-guide/data-load-s3-config-storage-integration)
- [Staged file metadata](https://docs.snowflake.com/en/user-guide/querying-metadata)

## DEA-DM-03 — Ingestion Troubleshooting & Replay

- Objective：1.3
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-03-ingestion-troubleshooting-replay.png`
- ゴール：取込失敗の場所を特定し、成功済みデータを壊さずに再処理する。
- 要点：観測で失敗範囲を絞り、最小単位で再処理して照合する。
- Core前提：LC-02 / LC-03 / PT-05

### 4パネル

1. **症状：未ロード・一部失敗・不正行**

   ファイルが到着していない、Snowflakeから見えない、通知が届かない、COPYが失敗する、取込後の値が不正という各段階を切り分ける。時刻・Stageパス・ファイル名・Pipe名・Query IDを揃え、影響のある対象を限定する。

2. **観測：COPY_HISTORY / VALIDATE / PIPE status**

   COPY_HISTORYでファイルごとの状態と件数を調べ、VALIDATEで対応するCOPYのエラーを確認する。SnowpipeのロードエラーにはVALIDATE_PIPE_LOADを利用する。SYSTEM$PIPE_STATUSなどでPipe側の状態も調べる。各履歴の保持期間・反映遅延・対象操作を確認する。

3. **原因：形式・権限・パス・通知**

   File Format不一致、型変換、列数、権限、クラウド通知、パス指定の順に、実際のエラー情報から仮説を絞る。ON_ERRORの動作が「ファイル全体を止める」のか「不正行を扱う」のかを確認し、成功件数だけで完全性を判断しない。

4. **復旧：対象限定・再投入・結果検証**

   修正後は失敗したファイルや行を限定して再処理し、ロード件数と業務キーを照合する。FORCE = TRUEはロード済みファイルの再処理にもつながるため、全対象へ安易に適用しない。別領域で検証し、重複除去の条件を明示してから反映する。

**シナリオ：** 100ファイル中3ファイルだけ失敗したロードを安全に復旧する。

**避ける誤解：** FORCE再ロードは重複を生む場合がある。ロード履歴と業務キーの重複を分けて確認する。

**公式資料：**

- [VALIDATE](https://docs.snowflake.com/en/sql-reference/functions/validate)
- [VALIDATE_PIPE_LOAD](https://docs.snowflake.com/en/sql-reference/functions/validate_pipe_load)
- [COPY_HISTORY](https://docs.snowflake.com/en/sql-reference/functions/copy_history)

## DEA-DM-04 — Continuous Pipeline Orchestration

- Objective：1.4
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-04-continuous-pipeline-orchestration.png`
- ゴール：Tasks、Streams、Dynamic Tables、Materialized Views、Snowpipeの責任を比較し、継続処理を設計する。
- 要点：変更の検出、処理の起動、結果の維持を区別する。
- Core前提：LC-05 / PT-08 / PT-06

### 4パネル

1. **取込：Stage / Snowpipe**

   ファイル取込はStageとSnowpipe、明示的なバッチはCOPYが担当する。その後の変換を誰が起動し、どの変更を処理するかを別に決める。取込の成功と業務テーブルの更新成功を同じ状態として扱わない。 SnowpipeのAuto-ingestは対応するクラウド通知で到着を検知し、Snowpipe REST APIはクライアントからファイル取込を依頼する経路。行を直接送るStreamingとも、一般のSQLを実行するSQL APIとも区別する。

2. **変更：Streams / CDC**

   Streamはソースの変更を読むためのオフセットを保持し、データの独立したバックアップではない。SELECTで読むだけでは消費されず、Streamを使うDMLのトランザクションがコミットされると位置が進む。複数の独立した消費処理には個別のStreamを設ける。

3. **変換：Tasks / Dynamic Tables**

   TaskはSQLやProcedureの起動・依存関係を制御する。Task graphは実行順を表すが、グラフ全体が一つのトランザクションになるわけではない。Dynamic Tableは結果の定義とTarget Lagから更新を管理するため、明示的な処理手順が必要か、宣言的な結果を維持したいかで選ぶ。

4. **提供高速化：Materialized Views**

   Materialized Viewは対応する問い合わせ結果を保守し、読み出しを速める仕組み。一般的な取込・任意の処理順序を管理する道具とは役割が違う。Target Lagは鮮度の目標であり、すべての状況での完了時刻を保証する値ではない。依存先の更新と失敗も監視する。

**シナリオ：** 到着イベントから集計テーブルまでを鮮度要件付きで設計する。

**避ける誤解：** Stream、Task、Dynamic Table、Materialized Viewは役割が異なり、組み合わせて使える。

**公式資料：**

- [Tasks](https://docs.snowflake.com/en/user-guide/tasks-intro)
- [Streams](https://docs.snowflake.com/en/user-guide/streams-intro)
- [Dynamic Tables](https://docs.snowflake.com/en/user-guide/dynamic-tables-about)
- [Materialized Views](https://docs.snowflake.com/en/user-guide/views-materialized)
- [Snowpipe](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro)

## DEA-DM-05 — Streaming, Kafka & Recovery Boundaries

- Objective：1.4
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-05-streaming-kafka-recovery-boundaries.png`
- ゴール：Snowpipe StreamingとKafka Connectorの送信・コミット・再送境界を追う。
- 要点：送信・確定・再開の境界を、利用するAPIごとに明示する。
- Core前提：LC-05 / LC-07 / PT-08

### 4パネル

1. **Producer / Kafka → Connector・SDK**

   Kafka ConnectorはKafkaとSnowflakeの接続を担当し、Snowpipe StreamingはSnowflakeへ行を送る取込方式。Connectorがどの取込方式・バージョンを利用しているかを最初に確認する。SDKを使うアプリではソースの再読取り機能も自分で設計する。

2. **Channel・Offset・Commitの状態**

   Channel内の送信位置、Snowflake側のコミット済み位置、Kafka側のオフセットを分けて観測する。送信APIの成功だけで下流のデータ提供まで完了したと判断しない。順序と重複制御がどのChannel・Partitionの範囲で成立するかを明示する。

3. **切断・再起動・再送の時系列**

   再起動時はコミット済み位置を確認し、未確定の入力を再送できるようにする。オフセットトークンの扱い、再接続、スキーマ不一致、エラー行の隔離などは選択したAPIとConnectorに従う。全方式へ一律にExactly-onceを宣言しない。

4. **下流での重複・順序・品質確認**

   取込境界で重複が抑えられていても、別ソースや別Channelから同じ業務イベントが来る場合がある。イベントID、業務キー、イベント時刻で完全性・遅延・重複を検証する。ソース保持期間より長い停止が起きた場合の再取得手順も決める。

**シナリオ：** 送信直後にクライアントが落ちた場合の再開地点を決める。

**避ける誤解：** Exactly-onceや順序の保証は、利用するAPI・Connector・Channelの条件と範囲を確認する。

**公式資料：**

- [Snowpipe Streaming](https://docs.snowflake.com/en/user-guide/snowpipe-streaming/data-load-snowpipe-streaming-overview)
- [Kafka Connector](https://docs.snowflake.com/en/user-guide/kafka-connector-overview)

## DEA-DM-06 — Pipeline APIs & Automation

- Objective：1.4
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-06-pipeline-apis-automation.png`
- ゴール：SQL API、Openflow、Notebooks、UDF、Stored Procedure、Snowflake Scriptingの役割と実行境界を整理する。
- 要点：APIの呼出し方向と、処理が実行される場所を押さえる。
- Core前提：FA-07 / PT-08 / LC-07

### 4パネル

1. **外部呼出し：Snowflake SQL API**

   SQL APIは外部アプリからSQLを実行し、状態や結果を取得する経路。認証、実行Role、Warehouse、非同期実行時のStatement handle、キャンセル、リトライを設計する。通信が失敗したときはSQLが未実行なのか、実行後に応答だけ失われたのかを確認する。

2. **統合フロー：Openflow**

   Openflowはソース接続とデータフローを組み立てる統合基盤。入力・処理・出力の流れに加えて、認証情報、ネットワーク、実行環境、エラー経路、再送を管理する。SQL内での変換と、外部ソースからデータを運ぶ処理の責任を分ける。

3. **対話・運用：Notebooks + Stored Procedures**

   Notebookは調査、変換、結果の確認を一か所で進める開発環境。共通の複数SQL処理をProcedureへまとめ、Notebookから呼び出すと対話操作と再実行可能な処理を分離できる。定期運転へ移す際には実行権限、依存パッケージ、パラメータを固定する。

4. **自動化：UDF / Snowflake Scripting**

   UDFはSQL式の中の計算、Stored Procedureは複数ステップの処理、Snowflake ScriptingはSQLで変数・分岐・ループ・例外処理を書く仕組み。処理単位を小さくし、入力パラメータと実行履歴を残すと、自動化した後の再実行と診断がしやすい。

**シナリオ：** 外部オーケストレータとSnowflake内処理を組み合わせた取込パイプラインを設計する。

**避ける誤解：** SQL API、Snowpipe REST API、External Functionは呼出し方向と目的が異なる。

**公式資料：**

- [Snowflake SQL API](https://docs.snowflake.com/en/developer-guide/sql-api/index)
- [Openflow](https://docs.snowflake.com/en/user-guide/data-integration/openflow/about)
- [Snowflake Notebooks](https://docs.snowflake.com/en/user-guide/ui-snowsight/notebooks)
- [Snowflake Scripting](https://docs.snowflake.com/en/developer-guide/snowflake-scripting/index)
- [UDF Overview](https://docs.snowflake.com/en/developer-guide/udf/udf-overview)

## DEA-DM-07 — Connector Selection Matrix

- Objective：1.5
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-07-connector-selection-matrix.png`
- ゴール：Kafka、Spark、Python、Native Connectorを用途・実行場所・運用責任で選ぶ。
- 要点：接続元・実行場所・転送量・運用責任からConnectorを選ぶ。
- Core前提：LC-07 / FA-07

### 4パネル

1. **Source／Engine／Applicationの起点**

   接続の起点がメッセージング、分散処理エンジン、アプリ、業務サービスのどれかを確認する。既存基盤を残す必要があるか、Snowflake内に処理を移せるかによって接続方式と費用が変わる。ドライバ名だけでアーキテクチャを決めない。

2. **Kafka・Spark・Python・Nativeの役割**

   Kafka Connectorはイベント取込、Spark ConnectorはSparkとのデータ交換と対応処理のPushdown、Python ConnectorはPythonアプリからのSQL実行やデータ入出力を担う。Snowflakeの各種Connectorは特定ソースとの同期を簡素化するが、サポートする対象・更新方法は個別に確認する。

3. **認証・ネットワーク・依存関係**

   認証方式、Role、Warehouse、ネットワーク許可、Proxy、ライブラリの互換性をまとめて検証する。大量データをすべてクライアントへ戻すと転送とメモリがボトルネックになる。処理を実行する場所と結果を受け取る量を設計する。

4. **運用：version・retry・observability**

   接続できることと継続運用できることは違う。バージョン更新、認証更新、エラー行、リトライ、取得位置、監視を担当する主体を決める。ソース固有の削除やスキーマ変更がどこまで伝播するかをテストする。

**シナリオ：** 既存Spark処理、Kafkaイベント、Pythonバッチ、SaaS同期で接続方式を選ぶ。

**避ける誤解：** Connectorは接続経路。接続できることだけでは、取込方式・実行場所・再送設計は決まらない。

**公式資料：**

- [Kafka Connector](https://docs.snowflake.com/en/user-guide/kafka-connector-overview)
- [Spark Connector](https://docs.snowflake.com/en/user-guide/spark-connector-overview)
- [Python Connector](https://docs.snowflake.com/en/developer-guide/python-connector/python-connector)
- [Snowflake Connectors](https://other-docs.snowflake.com/en/connectors)

## DEA-DM-08 — Sharing & Consumption Design

- Objective：1.6
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-08-sharing-consumption-design.png`
- ゴール：Share、Clone、Listing、Auto-fulfillment、View、行フィルタ、Streamlitを消費者要件から組み合わせる。
- 要点：誰に、どこで、どのデータ面を提供するかから共有方式を決める。
- Core前提：CO-01 / CO-02 / CO-03 / CO-04

### 4パネル

1. **要件：誰が・どこで・どう使うか**

   利用者のアカウント、リージョン、必要な行・列、更新頻度、SQL利用かアプリ利用かを整理する。Reader Accountが必要な相手か、通常アカウントで消費するかも判断する。共有するオブジェクトと消費側のCompute費用を明示する。

2. **Share / Clone / Listing / Auto-fulfillment**

   同一リージョンのSecure Data Sharingは、基本的にデータのコピーを作らず、許可したデータへの読取りを提供する。Cloneは特定時点から独立したオブジェクトを作る仕組みで、継続的な共有の代替ではない。Listingは提供・発見・利用条件の管理を担う。

3. **View・Row Accessによる提供面**

   クロスリージョンのListingではAuto-fulfillmentなどによるデータ提供を検討し、対応オブジェクト、複製、更新間隔、転送・保存費用を確認する。Secure ViewやRow Access Policyで必要なデータ面を設計する。共有先で使えるコンテキスト関数やポリシーの制約もテストする。

4. **Streamlitによる探索・セルフサービス**

   Streamlitでは利用者がパラメータを選び、分析結果を確認する画面を用意できる。アプリの実行Role・実行モードとデータ権限を確認し、閲覧者に元テーブルの全権限が渡ると仮定しない。ShareのGRANT、消費側データベース、実際の閲覧結果まで通して検証する。

**シナリオ：** 別アカウントの利用者と業務部門向けアプリへ同じデータを提供する。

**避ける誤解：** 同一リージョンの共有特性を、クロスリージョンの提供へ無条件には適用できない。

**公式資料：**

- [Secure Data Sharing](https://docs.snowflake.com/en/user-guide/data-sharing-intro)
- [Listings](https://docs.snowflake.com/en/collaboration/collaboration-listings-about)
- [Streamlit in Snowflake](https://docs.snowflake.com/en/developer-guide/streamlit/about-streamlit)

## DEA-DM-09 — Table Types, Evolution & Unload

- Objective：1.7
- 保存先：`src/assets/snowflake/data-engineer/d1-data-movement/dea-dm-09-table-types-evolution-unload.png`
- ゴール：External、Iceberg、Hybrid Tableと通常テーブル、Horizon、Schema Evolution、Unloadを管理境界で比較する。
- 要点：形式名より、保存・Catalog・更新・変更管理の責任境界を見る。
- Core前提：FA-03 / LC-04 / LC-06

### 4パネル

1. **保存場所・Catalog・書込み主体**

   テーブルの選択では、ファイルの保存場所、Catalog、メタデータの管理者、更新するエンジン、必要なトランザクション特性を並べる。Snowflake管理テーブルと外部ファイルを参照するテーブルでは、更新通知や保守の責任が異なる。

2. **External / Iceberg / Hybrid / Snowflake table**

   External Tableは外部ファイルへの読取りが中心で、通常テーブルのようにDMLを行うものではない。Iceberg Tableはオープン形式とCatalogの管理方式を確認する。Hybrid Tableは行指向のアクセスやトランザクション用途を想定し、分析向け通常テーブルと制約を比較する。

3. **Schema Evolutionと互換性**

   Schema Evolutionは対応するロード経路と設定・権限が揃った場合に列の追加などを扱う。任意の型変更を自動的に安全な変更へ変える機能ではない。列追加後のView、dbtモデル、アプリの互換性を検証し、変更を許す範囲をデータ契約として管理する。 COPYによる自動進化ではENABLE_SCHEMA_EVOLUTION、MATCH_BY_COLUMN_NAME、ロード実行RoleのEVOLVE SCHEMAまたはOWNERSHIPなどの条件を確認する。

4. **Horizon federationとUnload**

   Horizon Catalogの外部Catalog連携は発見・管理・相互運用の観点で整理する。外部システムへファイルを渡す場合はCOPY INTO locationでアンロードし、形式、圧縮、Partition、ファイル数、出力パスの権限を決める。テーブル共有とファイル出力では更新の伝達方法が違う。

**シナリオ：** 外部エンジンと共有するデータセットのCatalog、更新主体、出力方法を決める。

**避ける誤解：** IcebergやHybridを含め、すべてのテーブルで同じDML・保持・最適化が使えるわけではない。

**公式資料：**

- [External Tables](https://docs.snowflake.com/en/user-guide/tables-external-intro)
- [Iceberg Tables](https://docs.snowflake.com/en/user-guide/tables-iceberg)
- [Hybrid Tables](https://docs.snowflake.com/en/user-guide/tables-hybrid)
- [Horizon Catalog](https://docs.snowflake.com/en/user-guide/snowflake-horizon)
- [Schema Evolution](https://docs.snowflake.com/en/user-guide/data-load-schema-evolution)
- [データのアンロード](https://docs.snowflake.com/en/user-guide/data-unload-overview)

## DEA-PO-01 — Query Profile Diagnosis

- Objective：2.1
- 保存先：`src/assets/snowflake/data-engineer/d2-performance-optimization/dea-po-01-query-profile-diagnosis.png`
- ゴール：遅いクエリを見つけ、Profileと履歴から原因仮説を立てて改善を検証する。
- 要点：時間の内訳から仮説を立て、同条件で改善を検証する。
- Core前提：PT-01 / PT-02 / PT-05

### 4パネル

1. **待ち・Compile・Executionの切り分け**

   Query Historyで遅い処理を絞り、Queue、Compilation、Executionのどこに時間があるかを切り分ける。待ち時間が主因なら同時実行やWarehouseの稼働状態を、実行時間が主因ならQuery Profileのオペレータを調べる。

2. **Scan / Join / Aggregate / Spill**

   Scanでは読み取ったPartition数とバイト量、Joinでは入力・出力の行数、AggregateやSortでは処理量とSpillを見る。Join条件不足による行数増幅はComputeを増やしても原因が残る。Remote spillはメモリ圧力を示す重要な手がかりになる。

3. **行数増幅・Pruning・Queue**

   Pruningが効かない理由は、選択率、フィルタ式、データ配置などから考える。不要な列・行の読取りや過大な中間結果を減らし、変更ごとに仮説を検証する。クエリ単体と同時実行全体の問題を混ぜない。

4. **同条件での変更前後比較**

   比較時はデータ量、Warehouse、キャッシュ、同時実行負荷、SQLを揃える。Query IDと実行条件を残し、時間だけでなく読み取り量・Spill・費用も見る。単発の速い実行を、そのまま持続的な改善の証拠にしない。

**シナリオ：** Warehouseを大きくする前に、遅延の根本原因を説明する。

**避ける誤解：** キャッシュや同時実行の条件が異なる測定から、変更の効果を断定しない。

**公式資料：**

- [Query History / Query Profile](https://docs.snowflake.com/en/user-guide/ui-snowsight-activity)
- [Performance Optimization](https://docs.snowflake.com/en/guides-overview-performance)
- [ACCOUNT_USAGE](https://docs.snowflake.com/en/sql-reference/account-usage)

## DEA-PO-02 — Compute Scaling & Cost

- Objective：2.2
- 保存先：`src/assets/snowflake/data-engineer/d2-performance-optimization/dea-po-02-compute-scaling-cost.png`
- ゴール：Scale upとScale out、Warehouse属性、Snowpark最適化、Queue、Resource MonitorをSLAと費用で判断する。
- 要点：単体性能・同時実行・分離・費用統制を別の判断として扱う。
- Core前提：FA-05 / PT-04 / AG-07

### 4パネル

1. **負荷：単一処理時間と同時実行数**

   単一クエリが長いのか、多数のクエリが待つのかをまず区別する。BIとETLを別Warehouseへ分離すると、同時実行の干渉と費用の帰属を管理しやすい。停止・再開の設定は課金と起動遅延、Warehouse内キャッシュの保持に影響する。

2. **Size / Multi-cluster / Snowpark-optimized**

   Scale upはWarehouseサイズを上げ、処理に使える資源を増やす。Multi-clusterによるScale outは同時実行への対策で、一つのクエリを複数Clusterへ自動分割して速める目的ではない。メモリを多く必要とする対応処理ではSnowpark-optimized Warehouseも検討する。

3. **Queue・稼働・Creditの観測**

   Query History、Warehouseの負荷、ACCOUNT_USAGEでQueue、稼働、Creditを対応付ける。ACCOUNT_USAGEにはビューごとの反映遅延があるため、即時監視の代替と決め付けない。Credit単価を掛ける前に、Warehouseと各Serverlessサービスの利用量を分ける。

4. **性能・費用・分離の判断**

   Resource Monitorは主にWarehouseのCredit利用を監視・制御する。すべてのServerless費用を止められるわけではないため、Budgetsや利用状況を併用する。Computeだけでなく、保持履歴、Cloneの差分、Materialized View、複製などのStorage費用も評価する。

**シナリオ：** BIと夜間ETLが競合する時に分離・サイズ・Cluster数を比較する。

**避ける誤解：** Resource Monitorには対象外のServerless利用がある。サービス別の利用状況と費用も確認する。

**公式資料：**

- [Virtual Warehouses](https://docs.snowflake.com/en/user-guide/warehouses)
- [Multi-cluster Warehouses](https://docs.snowflake.com/en/user-guide/warehouses-multicluster)
- [ACCOUNT_USAGE](https://docs.snowflake.com/en/sql-reference/account-usage)
- [Resource Monitors](https://docs.snowflake.com/en/user-guide/resource-monitors)
- [Budgets](https://docs.snowflake.com/en/user-guide/budgets)

## DEA-PO-03 — Optimization Services Decision

- Objective：2.2
- 保存先：`src/assets/snowflake/data-engineer/d2-performance-optimization/dea-po-03-optimization-services-decision.png`
- ゴール：Clustering、Materialized Views、Search Optimization、QAS、キャッシュをクエリ特性と維持費で選ぶ。
- 要点：検索の特徴と維持費を対にして最適化を評価する。
- Core前提：PT-02 / PT-03 / PT-06

### 4パネル

1. **特性：範囲・点検索・反復集計・大規模Scan**

   範囲検索、選択率の高い点検索、繰り返し集計、大規模Scanのどれが支配的かを調べる。表の大きさ、更新頻度、フィルタ列、実行回数を揃え、最適化の維持費を回収できるか見積もる。

2. **候補：Clustering / MV / SOS / QAS / Cache**

   Clusteringはデータの配置を改善してPruningを助ける。Search Optimizationは対応する選択性の高い検索を高速化する。Materialized Viewは対応クエリの結果を保守し、QASは適格なクエリの一部を追加のComputeで支援する。各機能には対象と利用条件がある。

3. **効果：Pruning・再利用・並列処理**

   Persisted Query Resultsは再利用条件を満たす結果を返し、Warehouseのローカルキャッシュは読み込んだデータを再利用する。両者を同じキャッシュとして扱わない。Warehouse停止時のローカルキャッシュと、結果再利用の条件を区別する。

4. **費用：保守・Storage・Compute**

   高速化のために追加した構造は、更新時のComputeやStorage費用を生む。対象Query IDの改善とサービス別利用量を測る。複数の機能を併用する場合も、どのボトルネックへ効いたかが分かるよう一度に変える条件を絞る。

**シナリオ：** 更新頻度の高い大規模表に追加最適化が必要か評価する。

**避ける誤解：** 最適化サービスは併用も可能。クエリ改善が不要な場合も含めて維持費を評価する。

**公式資料：**

- [Materialized Views](https://docs.snowflake.com/en/user-guide/views-materialized)
- [Performance Optimization](https://docs.snowflake.com/en/guides-overview-performance)
- [Clustering](https://docs.snowflake.com/en/user-guide/tables-clustering-keys)
- [Search Optimization Service](https://docs.snowflake.com/en/user-guide/search-optimization-service)
- [Query Acceleration Service](https://docs.snowflake.com/en/user-guide/query-acceleration-service)

## DEA-PO-04 — Pipeline Observability & Data Quality

- Objective：2.3
- 保存先：`src/assets/snowflake/data-engineer/d2-performance-optimization/dea-po-04-pipeline-observability-data-quality.png`
- ゴール：継続パイプラインの履歴・通知・鮮度・品質を監視し、復旧へつなげる。
- 要点：ジョブの成功・データの鮮度・品質をそれぞれ監視する。
- Core前提：AG-06 / PT-08 / AG-07

### 4パネル

1. **対象：Tasks / Streams / Streaming / Dynamic Tables**

   到着、ロード、変換、提供の時刻を分け、ソースから利用可能になるまでの遅延を測る。Taskの成功だけでは入力欠損や古いデータを見抜けない。最終データ時刻、処理件数、異常件数を業務SLAと結び付ける。

2. **観測：History・Alert・Notification**

   Task Historyとgraphの状態、StreamのSTALE_AFTERや消費位置、Streamingのエラーと遅延、Dynamic TableのRefresh履歴を確認する。処理が実行されないケースと、実行したが失敗したケースを区別する。長い停止にはソース保持と再処理の期限がある。

3. **品質：DMF・件数・NULL・鮮度**

   Alertの条件と実行、Notification Integrationを使う通知先、受信後の対応を一組で設計する。同じ障害の通知連発を避ける単位と、誰がどの手順で再実行するかを定義する。アラートの発火自体もテストする。

4. **対応：原因特定 → 再処理 → 検証**

   DMFは件数・NULL・一意性などの品質指標を計測する。期待値や閾値と評価結果を関連付け、品質異常とジョブ失敗を別に検出する。DMFの計測は不正データの取込を必ず防ぐ制約ではなく、結果を修復や隔離へつなげる運用が必要。

**シナリオ：** SQLは成功したが当日データが不足している状態を検知する。

**避ける誤解：** 実行成功は、最新データの到着やデータ品質の合格を保証しない。

**公式資料：**

- [Tasks](https://docs.snowflake.com/en/user-guide/tasks-intro)
- [ACCOUNT_USAGE](https://docs.snowflake.com/en/sql-reference/account-usage)
- [Data Quality and DMFs](https://docs.snowflake.com/en/user-guide/data-quality-intro)
- [Alerts and Notifications](https://docs.snowflake.com/en/guides-overview-alerts)

## DEA-SP-01 — Recovery & Replication Boundaries

- Objective：3.1
- 保存先：`src/assets/snowflake/data-engineer/d3-storage-data-protection/dea-sp-01-recovery-replication-boundaries.png`
- ゴール：Time Travel、Fail-safe、Streamsへの影響、Replicationを復旧目的別に整理する。
- 要点：保持・最終復旧・複製・切替は目的と操作主体が異なる。
- Core前提：CO-05 / PT-08 / FA-06

### 4パネル

1. **障害：誤更新・削除・リージョン障害**

   誤更新から過去の状態を戻す要件と、リージョン障害からサービスを再開する要件を分ける。許容データ損失をRPO、復旧までの目標時間をRTOとして定義し、保持期間と複製頻度、切替手順を決める。

2. **Time TravelとStream offsetへの影響**

   Time Travelは保持期間内の過去データの照会・Clone・対応オブジェクトのUNDROPに使う。利用できる期間はEdition、オブジェクト種別、設定による。Streamは必要な変更履歴が利用できなくなると失効し得るため、STALE_AFTERと保持延長の仕組みを確認する。 通常の永久テーブルではStandard Editionは0〜1日、Enterprise以上は最大90日を設定できる。Transient・Temporaryは0〜1日。Iceberg等は別の対応条件を確認する。

3. **Fail-safeの目的と操作主体**

   Fail-safeは対象となる永久テーブル等のデータをSnowflakeが災害復旧のために扱う期間で、利用者が通常のSQLで任意の時点を参照する機能ではない。Transient・TemporaryはFail-safeを持たない。Time Travelの代わりとして日常の復旧手順に組み込まない。 対象データのFail-safe期間はTime Travel終了後の7日間。

4. **Cross-region / cloud replication**

   クロスリージョン／クラウドのReplicationでは、複製するデータベースやアカウントオブジェクト、対応条件、更新スケジュール、依存関係を確認する。Secondaryの最新時点がRPOに影響する。Failoverに必要なEdition・対象・切替権限・接続先まで通して検証する。

**シナリオ：** 9日前の欠損復旧とリージョン障害対策を別の仕組みで設計する。

**避ける誤解：** Fail-safeは利用者がSQLで参照できるTime Travelの延長ではない。

**公式資料：**

- [Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel)
- [Fail-safe](https://docs.snowflake.com/en/user-guide/data-failsafe)
- [Replication and Failover](https://docs.snowflake.com/en/user-guide/account-replication-intro)

## DEA-SP-02 — Micro-partition & Clustering Analysis

- Objective：3.2
- 保存先：`src/assets/snowflake/data-engineer/d3-storage-data-protection/dea-sp-02-micro-partition-clustering-analysis.png`
- ゴール：クラスタリング深度・キー・Automatic Clusteringをシステム関数とコストで評価する。
- 要点：物理配置の指標を、実際のPruningと費用へ結び付ける。
- Core前提：FA-04 / PT-02 / PT-03

### 4パネル

1. **Micro-partition overlapの読み方**

   Micro-partitionには列の範囲などのメタデータがあり、条件に合わないPartitionを読まずに済むとPruningが効く。キー値の範囲が多数のPartitionで重なると、狭い条件でも読取りが増え得る。重なりと実際の検索条件を一緒に見る。

2. **SYSTEM$CLUSTERING_INFORMATION / DEPTH**

   SYSTEM$CLUSTERING_DEPTHは指定した式に対する平均深度を返し、SYSTEM$CLUSTERING_INFORMATIONでは深度分布やOverlapなどの情報を確認できる。深度は単独の合否基準ではない。対象表、式、測定時点を固定して比較する。

3. **Cluster key候補とクエリ特性**

   Cluster keyは頻繁なフィルタやJoin、値の分布、列の順序から候補を選ぶ。高Cardinalityの値をそのまま使うより、日付への変換などが適切な場合もある。小さな表やすでにPruningが良い表では効果が小さいことがある。

4. **Automatic Clusteringの効果・費用**

   Automatic Clusteringはデータ更新に合わせて配置を維持するが、追加Computeと書き換えに伴うStorageの影響がある。Query Profileの読取り削減と、更新頻度・維持費を比較する。キー追加前後の同条件のクエリを保存して判断する。

**シナリオ：** 日付条件でPruningが悪化した表にCluster keyが妥当か判断する。

**避ける誤解：** 深度の数値だけでCluster keyを決めず、Query Profileと維持費を合わせて判断する。

**公式資料：**

- [Query History / Query Profile](https://docs.snowflake.com/en/user-guide/ui-snowsight-activity)
- [Clustering](https://docs.snowflake.com/en/user-guide/tables-clustering-keys)

## DEA-SP-03 — Clone-based Development & Rollback

- Objective：3.3
- 保存先：`src/assets/snowflake/data-engineer/d3-storage-data-protection/dea-sp-03-clone-based-development-rollback.png`
- ゴール：Zero-copy CloneとTime Travelで検証環境を作り、権限・変更・ロールバックを管理する。
- 要点：Cloneの時点・権限・依存関係・差分Storageを確認する。
- Core前提：CO-05 / AG-01

### 4パネル

1. **Clone対象と参照時点**

   Zero-copy Cloneは作成時点のデータを共有して独立したオブジェクトを作り、保持期間内ならAT / BEFOREで過去時点も指定できる。以後の元表とCloneの変更は独立する。どの時点のどの範囲を検証したいかを先に決める。

2. **権限継承と所有権の確認**

   権限はClone対象、COPY GRANTSの指定、親コンテナと子オブジェクトなどで扱いが異なる。元のRole設計がそのまま安全に複製されると決め付けず、Ownership、既存GRANT、Future Grants、ポリシーの参照先を確認する。

3. **変更検証とPromotion**

   検証環境ではデータ整合性、Row count、業務集計、権限ごとの表示、下流依存関係を確認する。Taskや外部Integrationなどを含む環境では、本番と同じ外部作用を起こさないかも確認する。コード変更とデータ変更を分けて昇格の手順を残す。

4. **Rollback / UNDROP / 再Clone**

   失敗時は過去時点のCloneで比較・復元する、UNDROPを使うなど、変更種別に合う方法を選ぶ。名前を戻すだけで依存関係・権限・外部処理まで戻るとは限らない。Clone作成後の更新や保持データはStorage費用を生むため、使い終えた検証環境の寿命も管理する。

**シナリオ：** 本番テーブル変更をCloneで試し、失敗時に安全に戻す。

**避ける誤解：** Cloneは作成後の変更・保持に応じてStorageを消費する。権限の引継ぎも条件による。

**公式資料：**

- [Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel)
- [Cloning](https://docs.snowflake.com/en/user-guide/object-clone)

## DEA-GV-01 — Classification, Lineage & Quality

- Objective：4.1
- 保存先：`src/assets/snowflake/data-engineer/d4-data-governance/dea-gv-01-classification-lineage-quality.png`
- ゴール：タグ・分類・リネージ・依存関係・DMFを監視フローとして統合する。
- 要点：発見、意味付け、影響調査、品質監視を保護へつなげる。
- Core前提：AG-05 / AG-06

### 4パネル

1. **発見：Classification**

   Classificationで機微な情報の候補を検出し、意味やPrivacyの分類を確認する。検出結果をそのまま正解とせず、業務上の定義・誤検知・対象範囲をレビューする。どの列が保護対象かを継続的に発見する工程として位置付ける。

2. **意味付け：Tag**

   Tagは機密区分、所有者、コストセンターなどのメタデータをオブジェクトへ付ける仕組み。Tagだけで値がMaskされるわけではない。Tag-based MaskingではTagとPolicyを関連付け、対応する列とデータ型、適用権限を確認する。

3. **影響：Lineage / Object dependencies**

   Lineageはどこからどこへデータが流れたか、Object dependenciesはオブジェクト間の参照関係を調べる手掛かりになる。変更の影響調査には両方を使い、追跡できる操作・履歴の範囲を確認する。Access Historyは利用実態を調べる別の証跡として扱う。

4. **継続監視：DMFと通知**

   DMFで欠損・一意性・件数などを測り、期待値と担当者・通知を結び付ける。分類・意味付け・依存関係・品質を一つの一覧へまとめると、誰がどの異常へ対応するか判断しやすい。観測とアクセス制御は役割を分けて管理する。

**シナリオ：** PII列の検出から下流影響と品質監視までを追う。

**避ける誤解：** Tagを付けるだけでは列のMaskingは実施されない。Policyの関連付けと実際の結果を確認する。

**公式資料：**

- [Data Quality and DMFs](https://docs.snowflake.com/en/user-guide/data-quality-intro)
- [Object Tagging](https://docs.snowflake.com/en/user-guide/object-tagging)
- [Data Classification](https://docs.snowflake.com/en/user-guide/classify-intro)
- [Data Lineage](https://docs.snowflake.com/en/user-guide/ui-snowsight-lineage)

## DEA-GV-02 — Policy-based Data Protection

- Objective：4.2
- 保存先：`src/assets/snowflake/data-engineer/d4-data-governance/dea-gv-02-policy-based-data-protection.png`
- ゴール：Masking、Tokenization、Projection、Row Access、Aggregation PolicyをRBACとDDLで管理する。
- 要点：列値・行・投影・集約を分け、RBACと合わせて保護する。
- Core前提：AG-01 / AG-05 / CO-04

### 4パネル

1. **列保護：Masking / Tokenization / Projection**

   Dynamic Data Maskingは問い合わせ時に列値の表示を変える。External Tokenizationは外部サービスを含むトークン化・復元の設計で、鍵や外部依存を確認する。Projection Policyは列を結果へ投影することを制限する。保存値・表示値・出力可否のどこを制御するかが異なる。 External Tokenizationでは取込前に機微値をトークンへ置き換え、問い合わせ時にMasking PolicyとExternal Functionを組み合わせて許可対象だけを復元する。

2. **行保護：Row Access**

   Row Access Policyは実行コンテキストと条件に応じて返す行を制御する。Roleやユーザーと対応表の関係を設計し、必要なMapping tableへの権限を確認する。基本のUSAGE / SELECTなどのアクセス権を代替するものではない。

3. **集約制約：Aggregation Policy**

   Aggregation Policyはデータを集計として利用させるための制約を設定する。少人数グループから個人を推測できるような出力を防ぐ設計と結び付ける。どの列が保護対象か、許可する集約、Group sizeの条件、他のPolicyとの併用制約を確認する。

4. **Role・Tag・DDL・評価順序**

   CREATE POLICYで定義し、ALTER TABLE / VIEW等で対象へ適用し、SHOW / DESCRIBEやPolicy referencesで状態を確認する。Tag-based Maskingも含め、許可Roleと拒否Roleの両方でテストする。併用時はRow AccessとMaskingなどの評価関係・制約を公式Docsで確認する。

**シナリオ：** 同じテーブルを職務別に異なる列・行・集約粒度で提供する。

**避ける誤解：** PolicyはRBACのGRANTを代替しない。実行文脈と複数Policyの併用条件を確認する。

**公式資料：**

- [Dynamic Data Masking](https://docs.snowflake.com/en/user-guide/security-column-ddm-intro)
- [Row Access Policies](https://docs.snowflake.com/en/user-guide/security-row-intro)
- [Projection Policies](https://docs.snowflake.com/en/user-guide/projection-policies)
- [Aggregation Policies](https://docs.snowflake.com/en/user-guide/aggregation-policies)
- [External Tokenization](https://docs.snowflake.com/en/user-guide/security-column-ext-token-intro)

## DEA-GV-03 — Federation & Clean Room Collaboration

- Objective：4.2
- 保存先：`src/assets/snowflake/data-engineer/d4-data-governance/dea-gv-03-federation-clean-room-collaboration.png`
- ゴール：Horizon federationとData Clean Roomsを外部Catalog／安全な共同分析の要件で使い分ける。
- 要点：Catalogの相互運用と、共同分析の利用条件を分ける。
- Core前提：CO-01 / CO-04 / AG-06

### 4パネル

1. **Horizon：外部Catalogと相互運用**

   Horizon CatalogではSnowflake内外のデータを発見・管理し、外部CatalogやIcebergとの相互運用を検討する。どのCatalogがメタデータの正となり、認証・権限をどこで管理するかを整理する。接続しただけで外部のすべての制御が自動的に統一されるとは限らない。

2. **Clean Room：データを直接公開しない共同分析**

   Data Clean Roomは参加者が定められたルールの下で共同分析を行うための環境。生データをそのまま相手へ公開する代わりに、許可したテンプレート、Join、出力、Privacyの制約を設計する。利用可能な分析と出力の範囲を具体的に確認する。

3. **UIとDeveloper APIの実装経路**

   UIは標準的な設定と分析を進める入口、Developer APIはカスタムテンプレートや処理を組み込む実装経路になる。ProviderとConsumer、データの登録、招待・インストール、分析の実行を区別し、選んだ経路で使える機能を確認する。

4. **Policy・監査・提供境界**

   参加者の許可、テンプレートのパラメータ、Join key、出力制約、実行履歴を管理する。相手に生データを見せない構成でも、少数グループや自由なパラメータから情報が推測されないかを評価する。Catalogの連携と共同分析の利用統制を別の要件として設計する。

**シナリオ：** 外部Iceberg Catalog参照と広告主との共同分析を別要件として設計する。

**避ける誤解：** Catalogの相互運用だけでは、共同分析のテンプレート・出力制約・監査は完成しない。

**公式資料：**

- [Horizon Catalog](https://docs.snowflake.com/en/user-guide/snowflake-horizon)
- [Data Clean Rooms](https://docs.snowflake.com/en/user-guide/cleanrooms/overview)

## DEA-DT-01 — UDF Family Selection

- Objective：5.1
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-01-udf-family-selection.png`
- ゴール：Scalar UDF、UDTF、UDAF、Snowpark／SQL／JavaScript、Secure UDFを処理形態で選ぶ。
- 要点：入力と出力の形からUDFの種類を選び、その後で言語を選ぶ。
- Core前提：FA-07 / PT-07

### 4パネル

1. **入力1行→1値：Scalar UDF**

   Scalar UDFは引数から値を返し、SQL式の中で再利用する。標準SQLで表現できる処理かを先に確認し、共通の計算を関数へまとめる。副作用を伴う複数ステップの運用処理はStored Procedureの責任として考える。

2. **入力→複数行：UDTF**

   UDTFは表形式の結果を返し、入力に対する複数行・複数列の生成に使う。呼出し側のJoinやLATERALとの組合せで行数が変わるため、入力と出力の対応を検証する。Scalar UDFの戻り値を配列にする設計との違いを説明できるようにする。

3. **複数行→1結果：UDAF**

   UDAFは複数行を独自の集約状態へまとめる。部分集約の状態をどう結合して最終結果を返すかが重要になる。利用できる言語やHandler API、型の制約はUDFの種類ごとに確認し、すべての言語で同じ機能が使えると仮定しない。

4. **Runtime・Secure・Package・権限**

   SQL・JavaScript・Snowpark系の言語を、処理内容、パッケージ、実行環境から選ぶ。Secure UDFは定義の露出や一部の最適化による情報漏えいを抑えるための性質で、ネットワーク認証そのものではない。権限、NULL、型、例外、性能を検証する。

**シナリオ：** トークン化、表形式展開、独自集約に適切なUDF型を選ぶ。

**避ける誤解：** UDFはSQL内の計算、Procedureは複数ステップの制御が中心。言語ごとの対応範囲も異なる。

**公式資料：**

- [UDF Overview](https://docs.snowflake.com/en/developer-guide/udf/udf-overview)
- [Python UDAF](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-aggregate-functions)

## DEA-DT-02 — External Function & API Boundary

- Objective：5.2
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-02-external-function-api-boundary.png`
- ゴール：External FunctionのAPI Integration、認証、要求・応答、失敗境界を設計する。
- 要点：呼出し方向、認証境界、Batch、再送を分けて設計する。
- Core前提：FA-07 / AG-03 / AG-04

### 4パネル

1. **SQL → Proxy / API → Remote service**

   External FunctionはSQLの関数呼出しから、Proxyを介して外部サービスへ処理を委ねる。Snowflake内の実行、クラウド側Proxy、リモートサービスという境界を描き、どこで認証し、どこでタイムアウトやエラーが起きるかを整理する。

2. **API Integrationと認証境界**

   API IntegrationはSnowflakeと対応するクラウドAPI基盤の信頼関係を管理する。許可するEndpointとRole、外部サービスの認証を確認する。UDF / ProcedureからネットワークへアクセスするExternal Access Integrationとは設定と実行の仕組みが異なる。

3. **Batch・timeout・retry・response**

   要求は複数行を含むBatchになり得るため、行の識別、入力と応答の対応、Payload、エラー、リトライを設計する。同じ要求が再送される場合を考慮し、外部側の副作用を無条件に一度だけと見なさない。外部処理の速度と制限がSQLの遅延へ影響する。

4. **Secure functionと情報露出**

   Secure属性は関数定義などの情報露出を抑えるが、送信データの適切さや外部APIの認証を代替しない。機微情報の送信範囲、ログへの記録、外部呼出し費用を評価する。外部停止時のエラー処理と再実行範囲をテストする。

**シナリオ：** 外部スコアリングAPIをSQLから安全に呼び出す。

**避ける誤解：** External FunctionとExternal Access Integrationは別の仕組み。SECURE属性も外部認証の代わりにはならない。

**公式資料：**

- [External Functions](https://docs.snowflake.com/en/sql-reference/external-functions-introduction)
- [External Network Access](https://docs.snowflake.com/en/developer-guide/external-network-access/external-network-access-overview)

## DEA-DT-03 — Stored Procedures & Transactions

- Objective：5.3
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-03-stored-procedures-transactions.png`
- ゴール：Snowpark、SQL Scripting、JavaScript Procedureとトランザクション境界を選ぶ。
- 要点：実行権限とトランザクション境界を明示してProcedureを設計する。
- Core前提：FA-07 / PT-08 / AG-01

### 4パネル

1. **手続き制御と複数SQL**

   Stored ProcedureはSQLの実行、分岐、ループ、例外処理をまとめ、処理をCALLで呼び出せる単位にする。引数、戻り値、変更するオブジェクト、ログ、再実行条件を明示する。呼出しが成功したことと業務整合性が成立することを分けて検証する。

2. **言語／runtimeの選択**

   SQL ScriptingはSQL中心の制御、JavaScriptはその言語での手続き制御、Snowpark Procedureは対応言語とDataFrame処理を利用する場合に検討する。パッケージ、Runtime、依存関係を固定し、動的SQLでは識別子と値の渡し方を区別する。

3. **Owner / Caller rights**

   Owner’s rightsとCaller’s rightsでは処理の権限コンテキストが異なる。権限を委譲したい処理か、呼出し元の権限で実行したい処理かを決める。Owner’s rightsにすれば任意のSQLを安全に受け付けられるわけではなく、引数と対象の制限が必要になる。

4. **BEGIN・COMMIT・ROLLBACKと例外**

   Procedure全体が自動的に一つのトランザクションになるわけではない。BEGIN / COMMIT / ROLLBACKを適切なスコープで対応させ、例外時の処理を定義する。DDLは暗黙のコミットを伴うため、DMLと同じロールバック単位に入ると考えない。呼出し元との境界も確認する。

**シナリオ：** 複数テーブル更新を一貫して実行し、途中失敗を処理する。

**避ける誤解：** Procedure呼出し全体が自動的に単一トランザクションになるわけではない。DDLの暗黙コミットにも注意する。

**公式資料：**

- [Snowflake Scripting](https://docs.snowflake.com/en/developer-guide/snowflake-scripting/index)
- [Stored Procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-overview)
- [Transactions](https://docs.snowflake.com/en/sql-reference/transactions)

## DEA-DT-04 — Semi-structured Transformation

- Objective：5.4
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-04-semi-structured-transformation.png`
- ゴール：VARIANTを辿り、FLATTENし、型を検証し、構造化／半構造化を相互変換する。
- 要点：型・NULL・行数・順序を明示して相互変換する。
- Core前提：LC-06 / PT-07

### 4パネル

1. **VARIANT pathと型確認**

   VARIANT内はパスで値を取り出し、TYPEOFなどで型を確認する。JSONのキーの大文字小文字とSQL識別子の扱いを混同しない。業務列へ移す前に、必須項目、数値・日時の型、欠落の扱いを決める。

2. **LATERAL FLATTENと行数**

   LATERAL FLATTENは配列やオブジェクトを行へ展開する。配列のINDEXやVALUE、元のレコードIDを保持して入力と出力の対応を残す。二つの独立した配列を展開すると直積になることがある。OUTERの設定と空配列の扱いも確認する。

3. **TRY_PARSE_JSON / CAST / NULL**

   PARSE_JSONとTRY_PARSE_JSON、CASTとTRY_CAST系の変換を目的に応じて選ぶ。TRY系でNULLになった結果をすべて正常扱いにせず、変換失敗の件数を残す。SQL NULL、JSON null、キー欠落は異なり、IS NULLとIS_NULL_VALUE等で区別する。

4. **OBJECT_CONSTRUCT / ARRAY_AGG**

   OBJECT_CONSTRUCTとARRAY_AGGなどで構造化データを再び半構造化へまとめる。NULLを省くか残すか、配列の順序を保証するかを明示する。FLATTEN前後の件数とキーの照合で、欠損や意図しない増幅がないことを検証する。

**シナリオ：** ネスト配列を展開して明細化し、再びJSONへ構成する。

**避ける誤解：** 独立した複数配列の展開で直積が生じる場合がある。元IDとINDEXを保持して行数を照合する。

**公式資料：**

- [Semi-structured Data](https://docs.snowflake.com/en/user-guide/querying-semistructured)

## DEA-DT-05 — Unstructured, Semantic & Cortex Pipeline

- Objective：5.5
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-05-unstructured-semantic-cortex-pipeline.png`
- ゴール：Directory Table、URL、REST API、Semantic View、Cortex AIを非構造データ処理へ組み込む。
- 要点：ファイル管理・内容抽出・意味モデル・品質と費用を一続きで設計する。
- Core前提：FA-08 / LC-06 / FA-07

### 4パネル

1. **Stage / Directory Table / URL**

   非構造化ファイルはStageで管理し、Directory Tableでファイル名・サイズ等のメタデータを扱う。Directoryの更新と元ファイルの状態を合わせる。Stage file URL、Scoped URL、Pre-signed URLは認証・有効期間が異なるため、利用者と処理時間から選ぶ。

2. **文書・画像の取得とメタデータ**

   ファイル取得のREST経路やSnowflake内の処理へ渡す参照を設計し、機微情報と権限を確認する。Directory Tableはファイルの内容を自動的にすべて構造化するものではない。元ファイル、抽出結果、処理バージョンを関連付けて追跡可能にする。

3. **Cortex AI：分類・抽出・テキスト／マルチモーダル**

   Cortex AIの対応機能で分類、文書抽出、テキストやマルチモーダルの処理を組み込む。利用するモデル、Region、権限、入力形式、制限を最新Docsで確認する。結果は確率的で誤り得るため、評価データと品質基準、失敗時の扱いを設ける。

4. **Semantic Viewと利用・費用監視**

   Semantic Viewは業務用語、Fact、Dimension、Metricなどの意味をモデル化し、利用者が一貫した定義で分析するために使う。Cortexの費用は呼出しとサービス別利用量で観測し、再処理量を制御する。AIを利用すれば課金が自動的に最適化されるという意味ではない。

**シナリオ：** 文書ファイルを分類・抽出し、意味モデル経由で利用する。

**避ける誤解：** Cortexの対応モデル・Region・権限・費用は変わり得る。公式Docsと小さな評価データで確認する。

**公式資料：**

- [Unstructured Data](https://docs.snowflake.com/en/user-guide/unstructured-intro)
- [Semantic Views](https://docs.snowflake.com/en/user-guide/views-semantic/overview)
- [Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql)
- [Unstructured Data Access](https://docs.snowflake.com/en/user-guide/unstructured-intro)

## DEA-DT-06 — Development Workflow & Code Management

- Objective：5.6
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-06-development-workflow-code-management.png`
- ゴール：Workspaces、Notebooks、Git、dbt Projects、デプロイ、テスト、環境管理を一連の開発フローにする。
- 要点：コードの版、実行環境、データ検証を合わせて昇格する。
- Core前提：FA-07 / CO-05 / AG-01

### 4パネル

1. **開発：Workspace / Notebook**

   WorkspaceやNotebookではSQL・コード・結果を整理し、処理を再現できる形にする。対話実行で偶然残った状態へ依存しないよう、Role、Warehouse、Database、Schema、パッケージを明示する。機密情報をコードや出力へ保存しない。

2. **Version：Git repository**

   Git Integrationでコードの版を管理し、レビューした変更を利用する。Gitへ接続しただけでテスト・承認・デプロイが自動で完成するわけではない。Branch、Commit、同期した内容と実行した内容を対応付ける。

3. **Build：dbt Projects / tests**

   dbt Projectsではモデルの依存関係、実行、テストを管理する。ビルド成功とデータ品質を分け、NULL、一意性、参照整合性などのテストを要件に合わせる。設定、環境、Secretの扱い、実行権限も版管理と整合させる。

4. **Promote：Clone・environment・deployment**

   開発・検証・本番を分け、必要に応じてCloneを利用して変更を検証する。昇格前にSQL差分、データの差分、権限、スケジュールを確認する。失敗時に戻すCommitとデータ状態を決め、実行履歴を残す。

**シナリオ：** 開発・検証・本番へ同じ変換コードを昇格させる。

**避ける誤解：** Git接続だけでCI/CDが完成するわけではない。テスト、環境、実行版、昇格手順を管理する。

**公式資料：**

- [Snowflake Notebooks](https://docs.snowflake.com/en/user-guide/ui-snowsight/notebooks)
- [Workspaces](https://docs.snowflake.com/en/user-guide/ui-snowsight/workspaces)
- [Git Integration](https://docs.snowflake.com/en/developer-guide/git/git-overview)
- [dbt Projects on Snowflake](https://docs.snowflake.com/en/user-guide/data-engineering/dbt-projects-on-snowflake)

## DEA-DT-07 — Snowpark DataFrame Transformations

- Objective：5.7
- 保存先：`src/assets/snowflake/data-engineer/d5-data-transformation/dea-dt-07-snowpark-dataframe-transformations.png`
- ゴール：Snowparkの遅延評価とDataFrame APIでfilter・join・aggregateをSnowflake内で実行する。
- 要点：遅延評価・実行場所・Actionによるデータ移動を説明できるようにする。
- Core前提：FA-07 / PT-07 / FA-05

### 4パネル

1. **Client code → logical plan**

   SnowparkではクライアントコードからSnowflake内の処理を表現できる。DataFrameは結果をすべてローカルへ保持する配列ではなく、データと変換を表すオブジェクト。どの処理がSQLとして実行され、どこで言語Runtimeを使うかを区別する。

2. **DataFrame変換とlazy evaluation**

   filter、select、join、group_by、aggなどの変換をつなぐと、実行計画が組み立てられる。多くのDataFrame操作は遅延評価され、その行で直ちに全データの処理が走るとは限らない。早い段階で不要な行・列を除き、Joinの関係を明確にする。

3. **ActionでSnowflake側実行**

   collectやshow、保存などのActionが実行を起こす。collectは結果をクライアントへ取得するため、大規模結果でメモリと転送が問題になり得る。集計やテーブル保存をSnowflake側で行い、必要な結果だけを取得する。

4. **Query Profile・Warehouse・結果取得**

   生成されたクエリとQuery Profileを確認し、Scan、Join、Spill、Warehouseのサイズを評価する。Pythonで書いていても、Pandasのローカル処理とSnowpark DataFrameでは実行場所が異なる。関数名だけでなくデータがどこを動いたかを追う。

**シナリオ：** 大規模データをローカルへ収集せずに変換・集計する。

**避ける誤解：** Snowpark DataFrameとローカルのPandasは実行場所が異なる。全件collectは転送・メモリの負荷になる。

**公式資料：**

- [Query History / Query Profile](https://docs.snowflake.com/en/user-guide/ui-snowsight-activity)
- [Snowpark Developer Guide](https://docs.snowflake.com/en/developer-guide/snowpark/index)

