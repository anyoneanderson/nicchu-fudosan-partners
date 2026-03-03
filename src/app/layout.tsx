import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日中不動産パートナーズ株式会社",
  description: "中国人投資家向け日本不動産投資のワンストップサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
