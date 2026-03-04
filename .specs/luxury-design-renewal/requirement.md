# 要件定義書 - ラグジュアリーデザインリニューアル

## 1. 概要

日中不動産パートナーズ株式会社コーポレートサイトのデザインを、ダークラグジュアリー路線に全面刷新する。
参考サイト: https://www.luxurycard.co.jp/blackcard/ のような高級感・重厚感のあるデザインを目指す。

### 背景
- 現状のデザインはネイビー+白背景のスタンダードなコーポレートサイト風で、ラグジュアリー感が不足
- AI生成イラストのカード型サービスセクションが安価な印象を与えている
- ヘッダー・フッター・余白・タイポグラフィなど全体の質感が参考サイトと乖離
- 不動産投資という高額商材を扱う企業として、信頼感と高級感の演出が重要

### スコープ
- CSSテーマ・カラーパレットの変更
- 全コンポーネントのスタイル刷新
- レイアウト構成の変更（ヘッダー、フッター、各セクション）
- 機能追加は行わない（既存機能の見た目のみ変更）

## 2. 機能要件

### [REQ-001] ダークカラーテーマへの変更
- サイト全体の背景色をダーク系（`#0a0a0a` 〜 `#1a1a2e`）に変更
- テキストカラーを白（`#ffffff`）/ ライトグレー（`#a0a0a0`）に変更
- アクセントカラーにゴールド（`#c4933f`）をボーダー・ライン・ホバー演出で使用
- セクション間に微妙なグラデーション差をつけて奥行き感を出す

### [REQ-002] スティッキーヘッダー（透過→不透過）
- ヘッダーをページ上部固定（`position: fixed`）にする
- 初期状態は背景透過で、ヒーロー画像の上に重なる
- スクロール時にダーク背景（`backdrop-blur` + 半透明黒）に変化
- ロゴ・ナビ・言語切替をミニマルに再配置
- モバイルのハンバーガーメニューもダークテーマに統一

### [REQ-003] タイポグラフィの改善
- 見出し: `font-light`（300）+ `tracking-wider` で上品・洗練された印象に
- セクション番号: 各セクションに「01」「02」「03」のようなナンバリングを追加
- サブテキスト: `text-sm` + `tracking-widest` + `uppercase`（英語テキスト）で装飾
- フォントサイズ階層を明確化（ヒーロー > セクション見出し > カード見出し > 本文）

### [REQ-004] ヒーローセクションの刷新
- フルスクリーン（100vh）のヒーロー維持
- 背景画像にダークオーバーレイ（黒70%程度）を追加し、テキストの視認性を向上
- キャッチコピーのフォントウェイトを軽く（`font-light`）、サイズを大きく
- CTAボタンをゴーストボタン（枠線のみ）に変更
- スクロール誘導のアニメーション（下矢印）を追加

### [REQ-005] サービスセクションの刷新
- カード型レイアウトから、フルブリード（全幅）セクション型に変更
- 各サービスを独立したセクション（背景画像 + ダークオーバーレイ + テキスト）で表現
- セクション番号（01, 02, 03）を大きく表示
- テキストは左寄せ、画像は右（または背景全面）
- イラスト画像の代わりに、CSSグラデーション背景または抽象的なパターンで代替可能

### [REQ-006] CTAセクションの洗練
- ダーク背景にゴールドのアクセントライン
- ボタンはゴーストボタン（ゴールドボーダー + ホバーで背景フィル）
- テキストは `tracking-wider` で上品に

### [REQ-007] 会社概要ページの改善
- ページトップにダークヒーローセクション（見出し + 背景画像/パターン）を追加
- 企業理念セクションのレイアウト改善（テキスト中心、余白たっぷり）
- 会社情報テーブルのスタイル刷新（ダーク背景、ゴールドアクセント）

### [REQ-008] お問い合わせページの改善
- ページトップにダークヒーローセクション追加
- フォーム入力欄をダークテーマに統一（暗い背景 + 明るいボーダー）
- 送信ボタンをゴールドアクセントのスタイルに

### [REQ-009] フッターの充実
- ダーク背景（サイト本体よりさらに暗い `#050505` 程度）
- 会社情報、ナビゲーションリンク、コピーライトを整理
- ゴールドのアクセントラインで区切り
- SNSリンクやアドレス情報など企業サイトらしい情報量を追加

### [REQ-010] 余白とスペーシングの改善
- セクション間のパディングを大幅拡大（`py-32` 以上）
- コンテンツ幅を `max-w-6xl` に統一
- テキスト間の行間を広く（`leading-relaxed` 〜 `leading-loose`）

## 3. 非機能要件

### [NFR-001] パフォーマンス
- CSS変更が中心のため、Lighthouse Performance 90+ を維持
- 不要な画像の追加を避け、CSSグラデーション/パターンを活用

### [NFR-002] レスポンシブ維持
- モバイル（375px）、タブレット（768px）、デスクトップ（1024px+）で崩れないこと
- ダークテーマがモバイルでも適切に表示されること

### [NFR-003] アクセシビリティ
- ダーク背景上のテキストコントラスト比 WCAG AA 準拠（4.5:1以上）
- `prefers-reduced-motion` 対応を維持
- `prefers-color-scheme` は考慮しない（ダーク固定）

### [NFR-004] 多言語対応維持
- 日本語（/ja/）と中国語（/zh/）の両言語で正しく表示されること
- 新規テキスト（セクション番号等）も辞書ファイルで管理

## 4. 制約事項

### [CON-001] 技術スタック
- 既存の Next.js 16 + Tailwind CSS 4.x + Framer Motion 構成を維持
- 新規ライブラリの追加は最小限（原則なし）

### [CON-002] 機能不変
- 既存の機能（フォーム送信、多言語切替、ナビゲーション等）を一切変更しない
- デザイン（CSS/JSX構造）の変更のみ

### [CON-003] SSG互換
- `output: "export"` と `images: { unoptimized: true }` を維持
- Netlify デプロイが正常に動作すること

## 5. 前提条件

### [ASM-001] 既存コードベース
- 現在のコンポーネント構成（Header, Footer, HeroSection, ServiceOverview, CTASection, CompanyInfo, Mission, ContactForm）を土台にリファクタリング

### [ASM-002] 画像素材
- Gemini API（`gemini-3-pro-image-preview`）で全画像を再生成する
- 既存の `scripts/generate_image.py` + `scripts/prompts.json` を使用
- ダークラグジュアリーテーマに合致するフォトリアリスティックな画像に刷新

## 6. 画像再生成仕様

### 6.1 現状のプロンプトの問題点

| 問題 | 例 |
|------|-----|
| キーワード羅列型 | `"professional illustration, clean flat design style"` → Geminiは文章形式の方が品質が高い |
| スタイル指定が「イラスト風」 | `"flat design style"`, `"illustration"` → 安っぽいイラストになる |
| 撮影パラメータなし | カメラ、レンズ、ライティングの指定がなくAI任せ |
| 雰囲気の指定が曖昧 | `"warm and trustworthy atmosphere"` → 具体的なビジュアルにならない |
| テキスト混入 | 画像内に英語テキストが描き込まれてしまう |

### 6.2 プロンプト設計原則

Google公式ガイド（[How to prompt Gemini for best results](https://developers.googleblog.com/en/how-to-prompt-gemini-2-5-flash-image-generation-for-the-best-results/)）に基づく:

1. **文章で場面を描写する**（キーワード羅列ではなく、ナラティブな段落で書く）
2. **撮影パラメータを明示する**（カメラアングル、レンズ、ライティング、被写界深度）
3. **ネガティブ要素を正のフレーミングで排除する**（「〜を含めない」ではなく「〜だけで構成する」）
4. **テキストなし指定を明示する**（`"No text, no letters, no watermarks in the image"`）
5. **スタイル参照は具体的に**（`"luxury real estate editorial photography"` のように業界+スタイル）
6. **色調・ムードを具体的に**（`"dark moody tones with warm gold accents"`, `"deep shadows, soft highlights"`）
7. **Anti-Pattern指定**: `"NOT an illustration, NOT a cartoon, NOT clip art, NOT flat design"`

### 6.3 再生成プロンプト一覧

#### hero-bg（ヒーロー背景 — 1920x1080）

```
A cinematic aerial photograph of Tokyo's skyline at twilight, shot from a high-rise building rooftop.
The city lights are beginning to glow in warm gold and cool blue tones against a deep navy sky.
Modern glass skyscrapers reflect the fading sunset, creating a luxurious urban atmosphere.
Shot with a wide-angle lens, f/2.8 aperture, creating a slight depth of field effect.
The overall mood is sophisticated, aspirational, and premium — like an editorial spread
in a luxury real estate magazine. Dark moody tones with subtle warm highlights.
Photorealistic, ultra-detailed, 8K quality.
No text, no letters, no logos, no watermarks in the image.
```

#### service-consulting（投資コンサルティング — 800x600）

```
A sophisticated business meeting scene in a modern high-end office in Tokyo.
Two professionals — a Japanese woman and a Chinese man in tailored dark suits —
are reviewing documents and a tablet showing property data at a sleek glass conference table.
Floor-to-ceiling windows reveal a blurred Tokyo cityscape in the background.
The lighting is warm and natural, coming from large windows with soft golden afternoon light.
Shot at eye level with an 85mm portrait lens, shallow depth of field, the background softly blurred.
The atmosphere conveys trust, expertise, and premium professional service.
Color palette: dark tones, warm gold accents, muted neutrals.
Photorealistic editorial photography style, NOT an illustration.
No text, no letters, no watermarks in the image.
```

#### service-brokerage（不動産仲介 — 800x600）

```
An elegant real estate property showcase scene. A luxury Japanese apartment interior
with floor-to-ceiling windows overlooking a city skyline at dusk.
The space features minimalist Japanese design — clean lines, warm wood flooring,
subtle indirect lighting creating a warm golden glow against dark walls.
A professional real estate agent's hand is placing a property document on a polished dark wood table.
Shot with a wide-angle architectural lens, f/5.6, capturing the full depth of the room.
The mood is luxurious, refined, and exclusive — like a high-end property magazine feature.
Dark moody interior with warm accent lighting.
Photorealistic architectural photography, NOT an illustration.
No text, no letters, no watermarks in the image.
```

#### service-viewing（内見サポート — 800x600）

```
A professional property viewing scene in a high-end Tokyo residential building.
A well-dressed real estate agent is guiding two clients through a bright, modern apartment
with large windows showing a panoramic city view. The agent gestures toward the window
while the clients look impressed. Natural daylight floods the room, supplemented by
warm recessed lighting. The apartment has premium finishes — marble countertops,
hardwood floors, and minimalist Japanese design elements.
Shot with a 35mm lens at f/4, capturing the full scene with natural perspective.
The mood is welcoming yet premium, professional yet warm.
Photorealistic editorial style, like a feature in Architectural Digest.
No text, no letters, no watermarks in the image.
```

#### about-mission（企業理念 — 1200x800）

```
An artistic photograph symbolizing the connection between Japan and China through architecture.
A split composition: on the left, a traditional Japanese wooden temple gate (torii) bathed
in soft golden light; on the right, a modern Shanghai glass skyscraper reflecting sunset colors.
The two halves blend seamlessly in the center through a soft gradient of warm gold light,
symbolizing partnership and bridge-building. Cherry blossom petals drift subtly in the air.
The overall tone is dark and sophisticated with warm gold accents — like a luxury brand advertisement.
Shot with a telephoto lens creating compressed perspective, shallow depth of field.
Cinematic color grading with deep shadows and rich warm highlights.
Photorealistic, NOT an illustration.
No text, no letters, no watermarks in the image.
```

#### ogp-ja（OGP日本語 — 1200x630）

```
A premium corporate OGP banner image with a dark, sophisticated background.
An elegant abstract composition featuring subtle gold geometric lines and curves
against a deep black background, evoking luxury and trust.
A faint silhouette of Tokyo Tower and modern skyscrapers appears in the lower portion,
barely visible through a dark gradient. The overall aesthetic is minimalist and high-end,
reminiscent of a luxury financial services brand.
The text "日中不動産パートナーズ" is displayed in clean, modern white Japanese typography
centered in the upper third. Below it, smaller text reads "Japan × China Real Estate Partners"
in light gold. The font style is thin and elegant with wide letter spacing.
Photorealistic with graphic design elements, ultra-clean composition.
```

#### ogp-zh（OGP中国語 — 1200x630）

```
A premium corporate OGP banner image with a dark, sophisticated background.
An elegant abstract composition featuring subtle gold geometric lines and curves
against a deep black background, evoking luxury and trust.
A faint silhouette of Tokyo Tower and modern skyscrapers appears in the lower portion,
barely visible through a dark gradient. The overall aesthetic is minimalist and high-end,
reminiscent of a luxury financial services brand.
The text "日中不动产合伙人" is displayed in clean, modern white Chinese typography
centered in the upper third. Below it, smaller text reads "Japan × China Real Estate Partners"
in light gold. The font style is thin and elegant with wide character spacing.
Photorealistic with graphic design elements, ultra-clean composition.
```

### 6.4 プロンプトテクニック参考資料

- [Google公式: How to prompt Gemini for best results](https://developers.googleblog.com/en/how-to-prompt-gemini-2-5-flash-image-generation-for-the-best-results/)
- [15 Prompt Engineering Secrets for Gemini Photography](https://imagetransformprompt.com/blog/15-prompt-engineering-secrets)
- [AI Image Generation with Gemini: Ultimate Guide](https://www.wear-your-imagination.com/en/ai-image-generation-gemini-imagen)
- [eWeek: 6 Best Gemini Photo Editing Prompts](https://www.eweek.com/news/6-gemini-ai-photo-editing-prompts/)

## 7. 用語集

| 用語 | 定義 |
|------|------|
| ゴーストボタン | 背景透過で枠線のみのボタンスタイル |
| フルブリード | コンテンツ幅を超えてビューポート全幅に広がるレイアウト |
| ダークオーバーレイ | 画像の上に半透明の暗い層を重ねて視認性を確保する手法 |
| スティッキーヘッダー | スクロールしてもページ上部に固定表示されるヘッダー |
| ナンバリング | セクションに「01」「02」等の番号を振る演出手法 |
