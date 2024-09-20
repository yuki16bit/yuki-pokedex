import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';

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
        <AppRouterCacheProvider>
          <CssBaseline />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
