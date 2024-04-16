import { HoverEffect } from "@/components/ui/card-hover-effect";

import { Service } from "types";

interface ServicesListProps {
  services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={services} />
    </div>
  );
}
