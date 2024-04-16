"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Person } from "types";

interface TrustersProps {
  text: string;
  people: Person[];

}

export default function Trustees({ text, people }: TrustersProps) {
  return (
    <section className="space-y-3">
      <p className="text-center text-sm text-muted-foreground">{text}</p>
      <TrusteePeople people={people} />
    </section>
  );
}

function TrusteePeople({ people }: { people: Person[] }) {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
