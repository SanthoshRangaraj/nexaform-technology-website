import type { Metadata } from "next";
import { notoSans } from "./utils/fonts"; // your Noto Sans setup
import "../styles/globals.css";

import Navbar from "../components/Navbar"; 
import { Footer } from "../components/Footer"; 

export const metadata: Metadata = {
  title: "Nexaform Technology Solutions",
  description: "Asset management redefined with Nexaform's cutting-edge solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.className}>
      <body className="antialiased">
        <Navbar /> 
        <main>{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
