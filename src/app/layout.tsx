import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 200 300 400 500 600 700 800 900",
  variable: "--font-pretendard",
});

import "@/styles/reset.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "THIS WEEK",
  description: "To-Do Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
