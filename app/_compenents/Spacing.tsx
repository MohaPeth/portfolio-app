import { cn } from "@/lib/utils";
import React from "react";

// Définition des types de props pour le composant Spacing
export type SpacingProps = {
  size?: "sm" | "md" | "lg"; // Propriété size optionnelle
};

// Définition du composant fonctionnel Spacing
export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-16 lg:h-24": size === "md",
        "h-24 lg:h-32": size === "lg",
      })}
    />
  );
};

// En résumé, ce composant Spacing est utilisé pour créer des espaces vides ou des séparations verticales
//  dans une interface utilisateur React, en permettant aux développeurs de spécifier la hauteur de ces espaces de manière flexible et directe
//  à travers les props.
