# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

日中不動産パートナーズ株式会社のコーポレートサイト。
Next.js 15 (SSG) + Tailwind CSS + Framer Motion で構築し、Netlify (無料枠) にデプロイ。
日本語 (/ja/) と中国語 (/zh/) の2言語対応。

## コーディングルール

実装時のコーディングルールは以下のファイルに従ってください:
- [docs/coding-rules.md](docs/coding-rules.md) — spec-rules-init で生成された品質ルール集

### 既知のトラブルと回避策
- ターミナルで `git`, `npm`, `node` コマンドが「認識されない（CommandNotFoundException）」エラーになる場合、環境変数PATHに不足があります。フルパスで直接実行してください（例: `& "C:\Program Files\Git\cmd\git.exe"`, `& "C:\Program Files\nodejs\npm.cmd"`）。

## Development Workflow

開発フロー（Issue → 実装 → PR）は以下のファイルに従ってください:
- [docs/issue-to-pr-workflow.md](docs/issue-to-pr-workflow.md) — spec-workflow-init で生成された開発ワークフロー

### コミット・プッシュ時の注意
- 変更をコミット・プッシュする前に、必ず最新のコードを確認し、リモートの変更をプル（`git pull`）してください。
