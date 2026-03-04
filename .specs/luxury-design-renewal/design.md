# 技術設計書 - ラグジュアリーデザインリニューアル

## 1. 要件トレーサビリティマトリックス

| 要件ID | 要件内容 | 対象ファイル | 既存資産 | 変更種別 |
|--------|---------|-------------|---------|---------|
| REQ-001 | ダークカラーテーマ | `globals.css`, `constants.ts` | ✅既存修正 | CSS変数変更 |
| REQ-002 | スティッキーヘッダー | `Header.tsx` | ✅既存修正 | JSX+CSS変更 |
| REQ-003 | タイポグラフィ改善 | `globals.css`, 各コンポーネント | ✅既存修正 | CSS変更 |
| REQ-004 | ヒーローセクション刷新 | `HeroSection.tsx` | ✅既存修正 | JSX+CSS変更 |
| REQ-005 | サービスセクション刷新 | `ServiceOverview.tsx` | ✅既存修正 | JSX+CSS大幅変更 |
| REQ-006 | CTAセクション洗練 | `CTASection.tsx` | ✅既存修正 | CSS変更 |
| REQ-007 | 会社概要ページ改善 | `about/page.tsx`, `CompanyInfo.tsx`, `Mission.tsx` | ✅既存修正 | JSX+CSS変更 |
| REQ-008 | お問い合わせページ改善 | `contact/page.tsx`, `ContactForm.tsx` | ✅既存修正 | CSS変更 |
| REQ-009 | フッター充実 | `Footer.tsx`, `ja.json`, `zh.json` | ✅既存修正 | JSX+CSS+辞書変更 |
| REQ-010 | 余白・スペーシング改善 | 各コンポーネント | ✅既存修正 | CSS変更 |

## 2. デザインシステム

### 2.1 カラーパレット

```
// ダークラグジュアリーパレット
--color-bg-primary:    #0a0a0a    // メイン背景（最も暗い）
--color-bg-secondary:  #111111    // セクション背景（やや明るい）
--color-bg-tertiary:   #1a1a1a    // カード・入力欄背景
--color-bg-header:     rgba(10, 10, 10, 0.85)  // ヘッダー背景（スクロール時）

--color-text-primary:  #ffffff    // メインテキスト
--color-text-secondary:#a0a0a0   // サブテキスト
--color-text-muted:    #666666    // ミュートテキスト

--color-accent:        #c4933f    // ゴールドアクセント（既存維持）
--color-accent-light:  #d4a85a    // ゴールド明るめ（既存維持）
--color-accent-dim:    rgba(196, 147, 63, 0.3)  // ゴールド淡め（ボーダー等）

--color-border:        #2a2a2a    // 標準ボーダー
--color-border-hover:  #3a3a3a    // ホバー時ボーダー
```

### 2.2 タイポグラフィスケール

```
// 見出し — font-light (300), tracking-wider
Hero Title:      text-5xl md:text-7xl font-light tracking-wider
Section Title:   text-3xl md:text-5xl font-light tracking-wide
Section Number:  text-7xl md:text-9xl font-extralight text-accent-dim opacity-50
Card Title:      text-xl md:text-2xl font-light tracking-wide
Subtitle:        text-sm tracking-widest uppercase text-text-secondary

// 本文 — font-normal (400), leading-relaxed
Body:            text-base leading-relaxed text-text-secondary
Body Large:      text-lg leading-relaxed text-text-secondary
```

### 2.3 ボタンスタイル

```
// ゴーストボタン（プライマリ）
Ghost Primary:
  border border-accent text-accent
  hover:bg-accent hover:text-bg-primary
  px-8 py-3 tracking-widest uppercase text-sm
  transition-all duration-300

// ゴーストボタン（セカンダリ）
Ghost Secondary:
  border border-border text-text-primary
  hover:border-text-primary
  px-8 py-3 tracking-widest uppercase text-sm
  transition-all duration-300
```

### 2.4 スペーシングシステム

```
Section Padding:     py-32 md:py-40
Section Gap:         space-y-16 md:space-y-24
Content Max Width:   max-w-6xl mx-auto px-6
Card Padding:        p-8 md:p-12
```

## 3. コンポーネント設計

### 3.1 [REQ-001] globals.css — カラーテーマ変更

**変更内容**: `@theme inline` 内のCSS変数を全面差替え

```css
@theme inline {
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #111111;
  --color-bg-tertiary: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-text-muted: #666666;
  --color-accent: #c4933f;
  --color-accent-light: #d4a85a;
  --color-accent-dim: rgba(196, 147, 63, 0.3);
  --color-border: #2a2a2a;
  --color-border-hover: #3a3a3a;
  /* font-sans は既存維持 */
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}
```

### 3.2 [REQ-001] constants.ts — カラー定数更新

`CORPORATE_COLOR` を新パレットに更新。

### 3.3 [REQ-002] Header.tsx — スティッキーヘッダー

**現状**: 静的ヘッダー（白背景、ネイビーテキスト）
**変更後**:

```
構造:
<header className="fixed top-0 w-full z-50 transition-all duration-300">
  // スクロール検知で背景変更
  // scrollY > 50: bg-bg-primary/85 backdrop-blur-md border-b border-border
  // scrollY <= 50: bg-transparent

  <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
    <Logo />  // テキストロゴ、白、tracking-wider
    <NavLinks />  // text-text-secondary hover:text-accent
    <LangSwitch />  // ゴーストボタン（小サイズ）
    <MobileMenuButton />  // ハンバーガー、白
  </nav>
</header>
```

**スクロール検知**: 既存の `'use client'` コンポーネントに `useEffect` + `useState` で `scrollY` を監視。

**モバイルメニュー**: 背景を `bg-bg-primary/95 backdrop-blur-lg` に変更。

### 3.4 [REQ-004] HeroSection.tsx — ヒーロー刷新

**現状**: 背景画像 + 半透明オーバーレイ + 太字テキスト
**変更後**:

```
構造:
<section className="relative h-screen flex items-center justify-center">
  // 背景画像（既存維持）
  <Image ... className="object-cover" />

  // ダークオーバーレイ（強め）
  <div className="absolute inset-0 bg-black/70" />

  // コンテンツ
  <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
    <p className="text-sm tracking-widest uppercase text-accent mb-6">
      日中不動産パートナーズ
    </p>
    <h1 className="text-5xl md:text-7xl font-light tracking-wider leading-tight mb-8">
      {dict.home.hero_title}
    </h1>
    <p className="text-lg text-text-secondary leading-relaxed mb-12">
      {dict.home.hero_subtitle}
    </p>
    <GhostButton href={`/${lang}/contact`}>
      {dict.home.cta_button}
    </GhostButton>
  </div>

  // スクロール誘導
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <ChevronDown className="text-text-muted" />
  </div>
</section>
```

### 3.5 [REQ-005] ServiceOverview.tsx — サービスセクション

**現状**: 3カラムのカード型（白背景 + イラスト画像）
**変更後**: 各サービスを独立したフルブリードセクションに

```
構造:
<section className="py-32">
  // セクションヘッダー
  <div className="max-w-6xl mx-auto px-6 mb-24">
    <p className="text-sm tracking-widest uppercase text-accent mb-4">Services</p>
    <h2 className="text-3xl md:text-5xl font-light tracking-wide">
      {dict.home.services_title}
    </h2>
  </div>

  // サービス1
  <div className="relative py-24 bg-bg-secondary">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-8xl font-extralight text-accent/20">01</span>
        <h3 className="text-2xl font-light tracking-wide mt-4 mb-6">
          {dict.home.service_consulting_title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {dict.home.service_consulting_desc}
        </p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <ImageWithFallback ... />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  </div>

  // サービス2（画像左、テキスト右 — 交互レイアウト）
  <div className="relative py-24">
    // ... 同様、grid-cols の順序を逆に
  </div>

  // サービス3
  <div className="relative py-24 bg-bg-secondary">
    // ...
  </div>
</section>
```

### 3.6 [REQ-006] CTASection.tsx — CTA洗練

```
構造:
<section className="py-32 relative">
  // ゴールドアクセントライン（上部）
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-accent" />

  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
      {dict.home.cta_title}
    </h2>
    <p className="text-text-secondary mb-12">
      {dict.home.cta_subtitle}
    </p>
    <GhostButton href={`/${lang}/contact`}>
      {dict.home.cta_button}
    </GhostButton>
  </div>
</section>
```

### 3.7 [REQ-007] 会社概要ページ

**about/page.tsx に追加するヒーローセクション:**

```
<section className="pt-32 pb-20 bg-bg-secondary">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-sm tracking-widest uppercase text-accent mb-4">About Us</p>
    <h1 className="text-4xl md:text-6xl font-light tracking-wide">
      {dict.about.title}
    </h1>
  </div>
</section>
```

**Mission.tsx**: 背景をダークに、テキスト白、画像にダークオーバーレイ。余白拡大。

**CompanyInfo.tsx**: テーブルをダーク背景に。`th` にゴールドアクセント、`td` に白テキスト。ボーダーを `border-border` に。

### 3.8 [REQ-008] お問い合わせページ

**contact/page.tsx にヒーローセクション追加**（about と同様の構造）

**ContactForm.tsx**:
- 入力欄: `bg-bg-tertiary border-border text-text-primary focus:border-accent`
- ラベル: `text-text-secondary text-sm tracking-wider`
- 送信ボタン: ゴーストボタン（ゴールド）
- 成功メッセージ: ゴールドアクセント付き

### 3.9 [REQ-009] Footer.tsx — フッター充実

```
構造:
<footer className="bg-[#050505] border-t border-border">
  // ゴールドライン
  <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

  <div className="max-w-6xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-3 gap-12">
      // カラム1: 会社情報
      <div>
        <p className="text-lg font-light tracking-wider mb-4">{companyName}</p>
        <p className="text-text-muted text-sm leading-relaxed">
          東京都 / {address}
        </p>
      </div>

      // カラム2: ナビゲーション
      <div>
        <p className="text-sm tracking-widest uppercase text-accent mb-4">Navigation</p>
        <nav className="space-y-2">
          // トップ、会社概要、お問い合わせ
        </nav>
      </div>

      // カラム3: お問い合わせ情報
      <div>
        <p className="text-sm tracking-widest uppercase text-accent mb-4">Contact</p>
        // メール、電話等
      </div>
    </div>
  </div>

  // コピーライト
  <div className="border-t border-border py-6">
    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <p className="text-text-muted text-xs">{copyright}</p>
      <p className="text-text-muted text-xs">All Rights Reserved.</p>
    </div>
  </div>
</footer>
```

**辞書ファイル追加キー**: `footer.navigation`, `footer.contact_label`, `footer.address` 等

### 3.10 [REQ-010] スペーシング — 各コンポーネント共通

全セクションの `className` を以下の基準に統一:
- セクションパディング: `py-32 md:py-40`
- コンテンツ幅: `max-w-6xl mx-auto px-6`
- セクション間の余白は背景色の切替で自然に区切る

## 4. 辞書ファイル変更

### ja.json 追加キー

```json
{
  "home": {
    "hero_label": "日中不動産パートナーズ",
    "services_label": "Services",
    "scroll_hint": "スクロール"
  },
  "about": {
    "page_label": "About Us",
    "mission_label": "Our Mission"
  },
  "contact": {
    "page_label": "Contact"
  },
  "footer": {
    "nav_label": "Navigation",
    "contact_label": "Contact",
    "address": "東京都"
  }
}
```

### zh.json 追加キー

```json
{
  "home": {
    "hero_label": "日中不动产合伙人",
    "services_label": "Services",
    "scroll_hint": "滚动"
  },
  "about": {
    "page_label": "About Us",
    "mission_label": "Our Mission"
  },
  "contact": {
    "page_label": "Contact"
  },
  "footer": {
    "nav_label": "Navigation",
    "contact_label": "Contact",
    "address": "东京都"
  }
}
```

## 5. 画像再生成

### 5.1 概要

既存のGemini画像生成パイプライン（`scripts/generate_image.py` + `scripts/prompts.json`）を使用し、ダークラグジュアリーテーマに合致するフォトリアリスティックな画像に全7枚を再生成する。

### 5.2 実装手順

1. `scripts/prompts.json` を requirement.md §6.3 のプロンプトで全面差替え
2. `scripts/generate_image.py` は既存をそのまま使用（`gemini-3-pro-image-preview` モデル）
3. `scripts/generate_all_assets.sh` を実行して全画像を再生成
4. 生成結果を確認し、必要に応じてプロンプトを微調整

### 5.3 対象ファイル

| キー | 出力先 | サイズ |
|------|--------|--------|
| hero-bg | `public/images/hero/hero-bg.png` | 1920x1080 |
| service-consulting | `public/images/services/service-consulting.png` | 800x600 |
| service-brokerage | `public/images/services/service-brokerage.png` | 800x600 |
| service-viewing | `public/images/services/service-viewing.png` | 800x600 |
| about-mission | `public/images/about/about-mission.png` | 1200x800 |
| ogp-ja | `public/images/ogp/ogp-ja.png` | 1200x630 |
| ogp-zh | `public/images/ogp/ogp-zh.png` | 1200x630 |

## 6. 技術的決定事項

| 決定項目 | 選択 | 理由 |
|---------|------|------|
| カラーテーマ方式 | Tailwind CSS変数 | 既存の `@theme inline` を活用、一元管理 |
| スクロール検知 | `useEffect` + `useState` | 軽量、追加ライブラリ不要 |
| アニメーション | Framer Motion 既存 | 新規追加なし、既存コンポーネント活用 |
| 画像処理 | Gemini再生成 + CSSオーバーレイ | フォトリアル画像に刷新、ダークオーバーレイ併用 |
| フォント | 既存Noto Sans維持 | font-weight変更のみで対応 |
| ボタンスタイル | Tailwindユーティリティ | コンポーネント化は不要、クラスで統一 |

## 6. 実装ガイドライン

- `docs/coding-rules.md` の `[MUST]` ルールに準拠すること
- 既存コンポーネントの Props インターフェースは変更しない
- `'use client'` の追加は Header.tsx のスクロール検知にのみ必要（既存で対応済み）
- 辞書ファイルの構造一致を維持（ja.json と zh.json のキー構造を揃える）
- Tailwind CSS のカスタムカラーは `globals.css` の `@theme inline` で一元定義
