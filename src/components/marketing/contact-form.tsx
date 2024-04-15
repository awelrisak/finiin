"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { toast } from "sonner";

import { Textarea } from "@/components/ui/textarea";
import { ContactFormType, contactForm } from "@/lib/validators/contact-form";
import { Icons } from "../shared/icons";

const services = [
  "Website development",
  "Website design",
  "App Development",
  "SaaS App development",
  "AI App Development",
  "E-commerce Store",
  "Authentication",
  "Graphic design",
  "Digital marketing",
];

export default function Contactform() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactForm),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Develoment",
      info: "",
    },
  });

  async function onSubmit(data: ContactFormType) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast.error("Error", {
        description: "Email has not being sent",
      });
    }
  }

  return (
    <Form {...form}>
      {!submitted ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" h-full space-y-4 rounded-3xl border p-10 md:w-1/3"
        >
          <div className="items-center gap-6 md:flex ">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="w-full items-center  justify-center">
                  <FormLabel>Last name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full items-center  justify-center">
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem className="w-full items-center  justify-center">
                <FormLabel>Company name?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel>Services you are interested in</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="help"
            render={({ field }) => (
              <FormItem className="w-full items-center  justify-center">
                <FormLabel>How can we help ?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="Evaluate Bird for my company">
                        Evaluate Bird for my company
                      </SelectItem>
                    </div>
                    <SelectItem value="Learn More">Learn More</SelectItem>
                    <SelectItem value="Get a Quote">Get a Quote</SelectItem>

                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel>Anything else ?</FormLabel>
                <FormControl>
                  <Textarea style={{ height: "100px" }} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <div>
              <Checkbox
                className="
                border-2 text-sm font-light outline"
              />
            </div>
            <div className="mb-1 text-xs font-light  md:w-3/4">
              I agree to Bird&apos; sending marketing communications related to
              bird
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="text-sm font-light"
              disabled={form.formState.isSubmitting}
              onClick={() => form.handleSubmit(onSubmit)}
            >
              {form.formState.isSubmitting ? "wait, sending,,,": "send"}
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="justify-centerpx-8text-xlmd:text-2xl flex flex-col items-center">
            <div className="w-80 py-20">
              <Icons.smiley className="mx-auto text-6xl text-muted-foreground" />

              <div className="mx-auto justify-center  py-10 text-center font-light text-muted-foreground">
                We&apos;ve received your inquiry and will be contacting you via
                email shortly.
              </div>
            </div>
          </div>
        </>
      )}
    </Form>
  );
}
