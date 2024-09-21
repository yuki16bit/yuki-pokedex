'use client';

import { Noto_Sans_TC } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const notoSansTc = Noto_Sans_TC({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: notoSansTc.style.fontFamily,
  },
});

export default theme;
