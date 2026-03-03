# コーディングルール

> spec-rules-init により自動生成。
> 出典: .specs/nicchu-fudosan-partners/design.md, 対話入力
> 生成日時: 2026-03-03

## テスト基準

### [SHOULD] ビルド通過
- `npm run build` が正常に完了すること
- 型エラー・lint エラーがないこと
- 出典: 対話（最低限：ビルド通ればOK）

## コード品質

### [MUST] Lint・型チェック
- コミット前に `npm run lint` がパスすること
- TypeScript strict モード有効（`tsconfig.json`）
- 出典: design.md §8 実装ガイドライン

### [MUST] 命名規則
- ファイル名（コンポーネント）: PascalCase（例: `HeroSection.tsx`, `Header.tsx`）
- ファイル名（ユーティリティ）: camelCase（例: `dictionaries.ts`, `constants.ts`）
- 変数・関数: camelCase
- 型・インターフェース: PascalCase
- 出典: design.md §8 実装ガイドライン

### [MUST] Next.js App Router 規約
- App Router の規約に従う（`layout.tsx`, `page.tsx`）
- デフォルトで Server Components を使い、必要な場合のみ `'use client'` を使用する
- 出典: design.md §4 ディレクトリ構成

### [SHOULD] import形式
- パスエイリアス `@/` を使用する（例: `@/components/layout/Header`）
- 出典: Next.js 推奨パターン

### [SHOULD] コンポーネント設計
- 関数コンポーネント + アロー関数
- コンポーネントは小さく焦点を絞る（単一責任）
- Next.js の `Image`, `Link` コンポーネントを使用する
- 出典: design.md §8 実装ガイドライン

### [SHOULD] CSS クラス
- Tailwind CSS ユーティリティクラスを使用する
- インラインスタイルや CSS Modules は使用しない
- 出典: design.md §7 技術的決定事項

### [SHOULD] 未使用importの禁止
- コミット前にすべての未使用importを削除すること

### [SHOULD] マジックナンバーの排除
- コード内の数値や文字列は `src/lib/constants.ts` に定数として定義する

### [SHOULD] DRY / KISS
- 同じロジックの重複を避ける
- 最もシンプルな解決策を選ぶ

### [SHOULD] 不要コードの排除
- `console.log`、コメントアウトされたコード、デッドコードをコミットしない

## エラーハンドリング

### [SHOULD] フォームバリデーション
- お問い合わせフォームの入力バリデーションはクライアントサイドで実施する
- 必須項目チェック、メール形式チェックを実装する
- 出典: requirement.md REQ-003

### [SHOULD] 画像フォールバック
- 画像読み込み失敗時は CSS グラデーションのプレースホルダーを表示する
- `ImageWithFallback` コンポーネントを使用する
- 出典: design.md §6.7 フォールバック

### [SHOULD] エッジケースの考慮
- 辞書キーが存在しない場合のフォールバックテキストを用意する

## ドキュメント

### [SHOULD] コードコメント
- コメント言語: 日本語
- 「何を」ではなく「なぜ」をコメントする

## セキュリティ

### [MUST] ログへの秘密情報出力禁止
- API キー（GEMINI_API_KEY 等）をコードにハードコードしない
- `.env` はリポジトリにコミットしない（`.gitignore` に追加）

### [MUST] スパム対策
- Netlify Forms のハニーポット機能（`netlify-honeypot`）を使用する
- 出典: requirement.md REQ-003

### [MUST] XSS対策
- 外部入力をそのまま HTML に出力しない
- React のデフォルトエスケープを活用する

## Git

### [MUST] コミットメッセージ形式
- 言語: 日本語
- 形式は自由だが、変更内容が明確にわかるメッセージにする
- 出典: 対話

### [MUST] ブランチ戦略
- 常にフィーチャーブランチで作業し、main に直接コミットしない
- ブランチ命名: `feature/xxx`, `fix/xxx`

### [SHOULD] アトミックコミット
- 各コミットは1つの論理的な変更を表すこと

## 多言語対応

### [MUST] テキストのハードコード禁止
- UI テキストは必ず辞書ファイル（`src/i18n/ja.json`, `src/i18n/zh.json`）で管理する
- コンポーネントに直接テキストを書かない
- 出典: design.md §5 [REQ-004]

### [MUST] 辞書構造の一致
- `ja.json` と `zh.json` のキー構造は完全に一致させる
- 出典: design.md §5 辞書構造

## アクセシビリティ

### [MUST] prefers-reduced-motion 対応
- アニメーションは `prefers-reduced-motion: reduce` 設定時に無効化する
- 出典: requirement.md NFR-004

### [SHOULD] セマンティック HTML
- 適切な HTML 要素を使用する（`<nav>`, `<main>`, `<footer>`, `<section>` 等）
- 出典: requirement.md NFR-004

### [SHOULD] 画像の alt 属性
- すべての `<Image>` に適切な alt テキストを設定する

---

## 出典

| ファイル | 抽出ルール数 |
|---------|-------------|
| design.md | 12 |
| requirement.md | 6 |
| 対話入力 | 3 |
