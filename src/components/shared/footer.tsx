import { siteConfig } from "@/config/site";
import Link from "next/link";
import { type FooterSection, Link as LinkType } from "types";
import { marketingConfig } from "@/config/marketing";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  if (!marketingConfig?.footer) return null;

  return (
    <footer className="mt-8 px-4 md:px-7 ">
      <div className="mx-auto w-full max-w-screen-xl">
        {marketingConfig.footer?.sections && (
          <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
            {marketingConfig.footer.sections.map((section) => (
              <FooterSection key={section.title} {...section} />
            ))}
          </div>
        )}
        <div className="flex flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="mt-4 md:mt-0">
            <span className="px-2 font-bold md:mb-7">
              Let&apos;s Connect on:{" "}
            </span>
            <ul className="mt-4 flex flex-wrap gap-5   md:justify-center rtl:space-x-reverse">
              {siteConfig.links.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </ul>
          </div>
          <span className="mt-6 text-sm text-muted-foreground sm:text-center">
            © {marketingConfig?.footer?.copyYears} &nbsp; - &nbsp;
            <Link href="/">{siteConfig.name}</Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, name, Icon, external }: LinkType) {
  return (
    <li>
      <Link
        href={href}
        className={buttonVariants({ variant: "outline", size: "icon" })}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {Icon && <Icon className="h-5 w-5 md:h-6 md:w-6" />}
        <span className="sr-only">{name}</span>
      </Link>
    </li>
  );
}

function FooterSection({ title, links, Icon }: FooterSection) {
  return (
    <div>
      {Icon && <Icon className="mb-5 h-8 w-8 md:h-10 md:w-10" />}
      {title && (
        <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      {links && (
        <ul className="font-medium">
          {links.map(({ name, href, Icon, disabled }) => (
            <li key={href + "- footer"} className="mb-2 flex gap-2">
              {Icon && <Icon />}
              {disabled && (
                <span className="cursor-not-allowed text-muted-foreground/60">
                  {name}
                </span>
              )}

              {!disabled && (
                <Link
                  href={href}
                  className="text-muted-foreground/90 hover:text-muted-foreground hover:underline"
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
