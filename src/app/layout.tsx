import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { fontHeading, inter, lora } from "@/app/ui/fonts";

import NextTopLoader from "nextjs-toploader";
import { TailwindIndicator } from "@/components/shared/tailwind-indicator";
import { ThemeProvider } from "@/components/shared/theme-provider";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  applicationName: siteConfig.name,
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
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  generator: "Next.js",

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
          fontHeading.variable,
          lora.variable,
        )}
      >
        <main className="min-h-full-dvh relative w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          <NextTopLoader
            color="currentColor"
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
          <Toaster position="top-center" richColors />
          <TailwindIndicator />
          {/* <Analytics /> */}
          {/* <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}
