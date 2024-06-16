import { Navbar } from "@/components/marketing/navbar";
import { marketingConfig } from "@/config/marketing";
import Link from "next/link";
import { ModeToggle } from "../shared/mode-toggle";
export default function Header() {
  return (
    <header className="sticky top-0 container z-40 min-h-20 bg-background/60 backdrop-blur-md ">
      <div className="flex h-20 items-center justify-between py-6">
        <Navbar items={marketingConfig.mainNav} />
        <nav className="hidden md:inline-flex gap-4">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
          <div className="hidden md:inline-block">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
