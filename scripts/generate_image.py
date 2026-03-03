#!/usr/bin/env python3
"""Gemini API を使った画像生成スクリプト"""

import argparse
import json
import os
import sys
from pathlib import Path

try:
    from google import genai
    from google.genai import types
    from PIL import Image
    import io
except ImportError:
    print("依存パッケージが不足しています。以下を実行してください:")
    print("  cd scripts && python -m venv venv && venv/bin/pip install -r requirements.txt")
    sys.exit(1)


def generate_image(prompt: str, output_path: str, size: str = "1024x1024") -> bool:
    """Gemini API で画像を生成し、指定パスに保存する"""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print(f"エラー: GEMINI_API_KEY が設定されていません")
        return False

    try:
        client = genai.Client(api_key=api_key)

        response = client.models.generate_content(
            model="gemini-2.0-flash-exp",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )

        # レスポンスから画像を取得
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                image = Image.open(io.BytesIO(part.inline_data.data))

                # サイズ調整
                w, h = size.split("x")
                image = image.resize((int(w), int(h)), Image.LANCZOS)

                # 出力ディレクトリ作成
                Path(output_path).parent.mkdir(parents=True, exist_ok=True)

                # 保存
                image.save(output_path)
                print(f"生成完了: {output_path}")
                return True

        print(f"エラー: 画像が生成されませんでした")
        return False

    except Exception as e:
        print(f"エラー: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Gemini API 画像生成")
    parser.add_argument("prompt", nargs="?", help="画像生成プロンプト")
    parser.add_argument("--output", "-o", help="出力ファイルパス")
    parser.add_argument("--from-config", help="prompts.json のパス")
    parser.add_argument("--key", "-k", help="prompts.json のキー")
    parser.add_argument("--size", default="1024x1024", help="画像サイズ (WxH)")
    args = parser.parse_args()

    if args.from_config:
        with open(args.from_config) as f:
            config = json.load(f)

        if args.key:
            if args.key not in config:
                print(f"エラー: キー '{args.key}' が見つかりません")
                sys.exit(1)
            entry = config[args.key]
            success = generate_image(entry["prompt"], entry["output"], entry.get("size", "1024x1024"))
            sys.exit(0 if success else 1)
        else:
            # 全エントリを処理
            all_success = True
            for key, entry in config.items():
                print(f"\n--- {key} ---")
                if not generate_image(entry["prompt"], entry["output"], entry.get("size", "1024x1024")):
                    all_success = False
            sys.exit(0 if all_success else 1)

    elif args.prompt and args.output:
        success = generate_image(args.prompt, args.output, args.size)
        sys.exit(0 if success else 1)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == "__main__":
    main()
