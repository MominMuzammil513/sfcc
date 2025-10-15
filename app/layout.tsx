import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/nav-bar";
import { HeroSection } from "@/components/hero/hero-section-bg";

export const metadata: Metadata = {
  title: "EduLearn",
  description: "Next-gen Educational Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* 🔦 Professional Spotlight Background */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10"> */}
        {/* Central White Glow */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div> */}

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
