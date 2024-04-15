import * as z from "zod";

export const contactForm = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Sonamax for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Mobile App Develoment",
    "Social Media Marketing",
    "UI/UX Design",
    "Branding",
    "Website Development",
  ]),
  info: z.string(),
});

export type ContactFormType = z.infer<typeof contactForm>;