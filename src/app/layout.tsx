import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
const inter = Inter({ subsets: ['latin'] });
import { Providers } from "./providers";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Voyage Vista - Integrated Travel Booking Platform",
  description: "This app is powered by Bright Data",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
