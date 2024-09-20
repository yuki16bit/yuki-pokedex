import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTc = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
});

export const metadata: Metadata = {
  title: "Yuki's Pokédex",
  description: 'Pokémon getto daze!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW-Hant">
      <body className={`${notoSansTc.variable}`}>
        {children}
      </body>
    </html>
  );
}
