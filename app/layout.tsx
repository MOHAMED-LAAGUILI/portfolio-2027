import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description:
    "Modern software, built to think, shipped end-to-end. Designing and building AI-native products.",
  generator: "v0.app",
  title: "Dev - Full-Stack AI Engineer",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#fafaf9", media: "(prefers-color-scheme: light)" },
    { color: "#1c1917", media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased font-sans">
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
        <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
        <script>
          {`
  kofiWidgetOverlay.draw('mohamedlaaguili', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#f45d22',
    'floating-chat.donateButton.text-color': '#fff'
  });
  `}
        </script>
      </body>
    </html>
  );
}
