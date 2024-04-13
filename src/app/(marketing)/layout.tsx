import Header from "@/components/marketing/header";
import Footer from "@/components/shared/footer";
import Link from "next/link";

// import { SiteFooter } from "@/components/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
