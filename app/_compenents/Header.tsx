import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold">petheressongue@gmail.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          {/*  bordure visible (outline) mais pas de remplissage (fill) */}
          <Link
            href="https://github.com/MohaPeth/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={14} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pether-essongue-12babb1a2/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={14} className="text-foreground" />
          </Link>
          <Link
            href="https://github.com/MohaPeth/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <InstagramIcon size={14} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
