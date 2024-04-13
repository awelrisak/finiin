import "@/styles/globals.css";

import NextTopLoader from "nextjs-toploader";
import { fontHeading, inter } from "@/app/ui/fonts";
import { siteConfig } from "@/config/site";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Providers as TRPCProviders } from "../contexts/trpc-providers";
// import { Toaster } from "@/components/ui/sonner";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@awelrisak",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: "Next.js",
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Marketing Agency",
    "Digital Marketing",
    "Social Media Marketing",
    "SEO", // Search Engine Optimization
    "Content Marketing",
    "Branding",
    "Public Relations", // Consider if Sonamax offers PR services
    "Pay-Per-Click (PPC)", // Consider if Sonamax offers PPC services
    "Marketing Automation", // Consider if Sonamax offers marketing automation
    "Conversion Rate Optimization (CRO)", // Consider if Sonamax offers CRO
    "Web Design", // Consider if Sonamax offers web design services
    "Email Marketing",
    "Market Research", // Consider if Sonamax offers market research
    "Lead Generation",
    "Brand Strategy",
    "Content Strategy",
    "Social Media Strategy",
    "Influencer Marketing", // Consider if Sonamax offers influencer marketing
    "Video Marketing", // Consider if Sonamax offers video marketing
    "+ Add more specific keywords here", // Placeholder for further customization
  ],

  authors: [{ name: "Abdurezak Farah", url: "https://www.cabdirisaaq.com" }],
  creator: "Abdurezak Farah",
  publisher: "Finiin",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          fontHeading.variable
        )}
      >
        <main className="relative w-full min-h-full-dvh">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          <NextTopLoader
            color="red"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {/* <Toaster position="top-center" richColors /> */}
          {/* <TailwindIndicator /> */}
          {/* <Analytics /> */}
          {/* <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}
