#!/bin/bash
# 全画像素材を一括生成

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
PYTHON="${SCRIPT_DIR}/venv/bin/python"
GENERATOR="${SCRIPT_DIR}/generate_image.py"

# .env 読み込み
if [ -f "$PROJECT_ROOT/.env" ]; then
  set -a && source "$PROJECT_ROOT/.env" && set +a
else
  echo "警告: .env が見つかりません。GEMINI_API_KEY を設定してください。"
  echo "  grep GEMINI_API_KEY ~/Documents/zenchaine/ZenchainWeb/.claude/skills/write-article/.env > .env"
  exit 1
fi

# venv チェック・セットアップ
if [ ! -f "$PYTHON" ]; then
  echo "Python venv をセットアップ中..."
  cd "$SCRIPT_DIR" && python3 -m venv venv && venv/bin/pip install -r requirements.txt
fi

# 全画像生成
cd "$PROJECT_ROOT"
"$PYTHON" "$GENERATOR" --from-config "$SCRIPT_DIR/prompts.json"

echo ""
echo "画像生成が完了しました。"
