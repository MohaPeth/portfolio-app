import React from "react";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { ItemIcon } from "./icons/ItemIcon";

// Composant Code pour styliser le texte encadré avec une classe spécifique
const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-color border-accent text-primary px-1 py-0.5 rounded-sm", // Utilisation de rounded-full pour des coins circulaires
        className
      )}
      {...props}
    />
  );
};

const Hero = () => {
  return (
    <Section className="flex flex-col md:flex-row items-start max-md:flex-col gap-4">
      <div className="md:w-2/3 flex-[3] flex flex-col gap-2 w-full">
        <h2 className="font-caption font-bold text-4xl text-primary">
          Pether Essongue
        </h2>
        <h3 className="font-caption text-2xl">Developper & Programmer</h3>
        <p className="text-base">
          I enjoy coding applications that I share on my {""}
          <Link href="https://github.com/MohaPeth/">
            <Code className="inline-flex items-center gap-1">
              <GithubIcon size={16} className="inline" />
              Github
            </Code>
          </Link>
          , currently working at{" "}
          <Link href="https://itemsenegal.store/">
            <Code className="inline-flex items-center gap-1">
              <ItemIcon size={16} className="inline" />
              Item Senegal
            </Code>
          </Link>
          . Living in{" "}
          <Link href="https://itemsenegal.store/">
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/langfr-338px-Flag_of_Senegal.svg.png"
                alt="Senegal flag"
                style={{ width: 16, height: "auto" }}
              />
              Senegal
            </Code>
          </Link>
          .
        </p>
      </div>
      <div className="md:w-1/3 flex-[2] flex justify-end items-center max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHRabV2j4hg9w/profile-displayphoto-shrink_800_800/0/1658405795384?e=1724889600&v=beta&t=h5CRNaNK7Nheg0B171LAr3BZeTYk3esy7Q9JBj9--PQ"
          className="w-40 h-40 rounded-full max-w-xs max-md:w-50"
          alt="Pether-Profile"
        />
      </div>
    </Section>
  );
};

export default Hero;
