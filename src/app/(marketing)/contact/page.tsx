import ContactForm from "@/components/marketing/contact-form";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <div className="relative w-full overflow-hidden py-10 md:items-center md:justify-center">
      <div className="mb-10">
        <h1 className="text-balance bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text px-6 pb-5 text-center font-heading text-4xl text-transparent dark:from-neutral-50 dark:to-neutral-700 md:text-7xl">
          Contact our sales team
        </h1>

        <p className="mx-auto mt-2 max-w-lg  px-4 text-center text-lg font-normal text-muted-foreground">
          Let&apos;s talk about how {siteConfig.name} can help your team work
          better.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-9 px-6 md:flex-row md:justify-around">
        <div className="content py flex1">
          <div className="w-30 px-7">
            <div className="space-y-7">
              <div className="space-y-3">
                <Icons.headphones />
                <h3>+254 722 357 064</h3>
                <span className="text-sm text-muted-foreground">
                  Call us: Mon - Fri 9:00 - 19:00
                </span>
              </div>
              <div className="space-y-3">
                <Icons.location className="size-6" />
                <h3>Nairobi</h3>
                <span className="text-sm text-muted-foreground">
                  Juja rd, Midtown Manhattan, 2th Floor, NY 10022
                </span>
              </div>
              <div className="space-y-3">
                <Icons.help />
                <h3>sonamaxmarketing@gmail.com</h3>
                <span className="text-sm text-muted-foreground">
                  Drop us a line anytime!
                </span>
              </div>
              <div className="space-y-3">
                <Icons.user />
                <h3>sonamaxmarketing@gmail.com</h3>
                <span className="text-sm text-muted-foreground">
                  Career at Seven Creative
                </span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
