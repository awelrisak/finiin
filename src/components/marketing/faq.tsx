import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "What is Finiin?",
    answer:
      "Finiin is a comprehensive digital marketing agency specializing in branding, web design, SEO, social media management, and graphic design.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can start by contacting us through our website or email. We will respond within 24 hours to discuss your project and requirements.",
  },
  {
    question: "What are your pricing options?",
    answer:
      "We offer custom-tailored solutions based on your specific business needs. Contact us for a personalized quote.",
  },
  {
    question: "What is the typical turnaround time?",
    answer:
      "The initial draft is usually delivered within 1 week. Final delivery times depend on the project's scope but typically range from 2 to 4 weeks.",
  },
  {
    question: "How do you communicate with clients?",
    answer:
      "We use email, Slack, and WhatsApp for communication. We prefer Slack for ongoing project updates and feedback to ensure efficient and asynchronous communication.",
  },
  {
    question: "What is your process for working with clients?",
    answer:
      "Our process involves an initial consultation to understand your requirements, followed by a deep dive into your project. This includes research, ideation, and iterations, with continuous feedback from you to ensure the best results.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "We offer unlimited revisions until you are satisfied with the design. Our goal is to ensure you are completely happy with the final outcome.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We provide refunds only if we haven't started working on your project. Once the work has begun, we do not offer refunds.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in various digital marketing tools and platforms. For web development, we use technologies like Next.js and Tailwind CSS for their speed and SEO benefits.",
  },
  {
    question: "Why do you prefer asynchronous communication?",
    answer:
      "As a focused team, we find that calls and meetings can be distracting. Asynchronous communication allows us to concentrate on delivering high-quality work while still providing timely updates and feedback.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer support Monday through Friday for all our clients. You can reach us via email or our communication channels for any assistance.",
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
