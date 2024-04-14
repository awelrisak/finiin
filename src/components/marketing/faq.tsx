import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "What is Sonamax?",
    answer:
      "Sonamax is a full-fledged marketing agency that specializes in branding, web design, and digital marketing.",
  },
  {
    question: "How to start?",
    answer:
      "You can start by contacting us. We will get back to you within 24 hours.",
  },
  {
    question: "Pricing?",
    answer:
      "We offer custom-tailored solutions for your business. Contact us to get a quote.",
  },
  {
    question: "What is the turnaround time?",
    answer:
      "We usually deliver the first draft within 1 week. The final website is delivered within 2 weeks.",
  },
  {
    question: "How do you communicate?",
    answer:
      "We use email, Slack, WhatsApp and Signal to communicate. We strongly prefer Slack and keep the conversations async so that we can focus on building your website.",
  },
  {
    question: "What is the process of working with you?",
    answer:
      "Our process involves adding you to a communication channel where you describe your requirements (a call is optional). We then dive deep into your project which involves research, ideation and iterations -- all this with working closely with you for instant feedback.",
  },
  {
    question: "What happens if I don't like the design?",
    answer:
      "We provide unlimited revisions until you are happy with the design. We will work with you to make sure you are happy with the design.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "We provide refunds only if we haven't started working on your website. Once we start working on your website, we don't provide any refunds.",
  },
  {
    question: "What is your Tech Stack?",
    answer:
      "We are comfortable with all the major frameworks and technologies there are (since we are engineers). But yes, we have our favourites. We use Next.js and Tailwind CSS to build out your website. Next because it has SEO benefits, Tailwind because it makes us fast.",
  },
  {
    question: "Why no calls or meetings?",
    answer:
      "We are a small team and we want to focus on building your website. We have found that calls and meetings are a huge distraction and we want to avoid them as much as possible. We prefer async communication over calls and meetings. In the past, We've built huge softwares and SaaS applications without ever getting on a call. We are confident that we can build your website without getting on a call.",
  },
  // {
  //   question:
  //     "What happens if I have to make some changes in the website after it is delivered?",
  //   answer:
  //     "We provide you with a video tutorial on how to make changes to your website. If you still need help, we can make changes for you at an hourly rate OR you can sign up for our retainer services. Contact us on the website chat for more details.",
  // },
  {
    question: "Support?",
    answer: "We offer Monday-Friday support for all our clients.",
  },
];

const FAQS = () => {
  return (
    <div className="mt-10 w-full rounded-3xl md:py-10">
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl font-bold  md:text-7xl">
          Have questions ?
        </div>
        <div className="text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-3xl font-semibold text-transparent md:text-6xl">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          {faq.map((faqItem) => (
            <AccordionItem key={faqItem.question} value={faqItem.question}>
              <AccordionTrigger>{faqItem.question}</AccordionTrigger>
              <AccordionContent>{faqItem.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="px-10  md:p-20 mt-2 mb-3">
        Can’t find the answer you’re looking for?{" "}
        <a href="mailto:youremail@example.com" className="text-lime-700 dark:text-lime-500">Reach out to us</a> and we will
        get in touch with you.
      </div>
    </div>
  );
};

export default FAQS;
