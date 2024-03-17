import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh flex flex-col`}>
        <Theme accentColor="violet" appearance="dark" className="flex flex-col grow">
          <main className="flex flex-col grow max-w-screen-lg mx-auto w-full relative">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
