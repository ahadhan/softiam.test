import localFont from "next/font/local";
import "./globals.css";
import { Roboto, Playfair_Display } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: "Softiam",
  description: "A Full Stack Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playfairDisplay.variable} font-sans `}
      >
        {children}
      </body>
    </html>
  );
}
