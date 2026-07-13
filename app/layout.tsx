//techcelebso\app\layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antellay — IT Solutions & Services",
  description: "Enterprise IT solutions, cloud architecture, and digital transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} font-[family-name:var(--font-body)] bg-white dark:bg-[#0B132B] transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
