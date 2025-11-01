// fonts.ts
import { Noto_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'], // normal, semi-bold, extra-bold
  display: 'swap', // best for performance
});
