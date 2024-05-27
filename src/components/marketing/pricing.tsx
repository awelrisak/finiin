"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Price as PriceType } from "types";
import { Icons } from "../shared/icons";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedGradientText  from "../ui/animated-gradient-text";
import React from "react";

interface PricingPops {
  title: string;
  text: string;
  prices: PriceType[];
  super?: boolean;
}

export default function Pricing({ title, text, prices }: PricingPops) {
  return (
    <section className="" id="pricing">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            {text}
          </p>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {prices.map((price) => (
            <Price price={price} key={price.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PriceProps {
  price: PriceType;
}

function Price({ price }: PriceProps) {
  const Wrapper = price.super ? BackgroundGradient : "div";
  const PriceWrapper = price.super ? AnimatedGradientText : "span"
  return (
    <Wrapper className="mx-auto flex max-w-lg flex-col rounded-3xl border bg-card p-6 text-center text-card-foreground shadow xl:p-8" animate>
      <div>
        <h3 className="mb-4 text-2xl font-semibold">{price.title}</h3>
        <p className="font-light text-muted-foreground sm:text-lg">
          {price.description}
        </p>
        <div className="my-8 flex items-baseline justify-center">
          <PriceWrapper className="mr-2 text-5xl font-extrabold">{`${price.currency}${price.price}`}</PriceWrapper>
          <span className="text-muted-foreground">/month</span>
        </div>

        <ul role="list" className="mb-8 space-y-4 text-left">
          {price.features.map((feature) => (
            <li className="flex items-center space-x-3" key={feature}>
             
              <Icons.check />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "font-semibold uppercase",
            {
              "bg-primary text-primary-foreground ": !!price.super,
            },
          )}
        >
          Get started
        </Link>
      </div>
    </Wrapper>
  );
}
