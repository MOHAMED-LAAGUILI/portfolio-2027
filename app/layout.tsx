import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { koFi } from "@/data/links";
import { metadata, viewport } from "@/data/seo";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export { metadata, viewport };

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
     kofiWidgetOverlay.draw('${koFi.user}', {
    'type': '${koFi.type}',
    'floating-chat.donateButton.text': '${koFi.donateButton.text}',
    'floating-chat.donateButton.background-color': '${koFi.donateButton.backgroundColor}',
    'floating-chat.donateButton.text-color': '${koFi.donateButton.textColor}'
  });
  `}
        </script>
      </body>
    </html>
  );
}
