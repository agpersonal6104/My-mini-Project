import React from "react";
import { cn } from "@/lib/utils";

export const TypographyH1 = React.forwardRef(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("text-4xl font-bold tracking-tight lg:text-5xl", className)}
    {...props}
  />
));

TypographyH1.displayName = "TypographyH1";

export const TypographyH2 = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-3xl font-semibold tracking-tight", className)}
    {...props}
  />
));

TypographyH2.displayName = "TypographyH2";

export const TypographyH3 = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold tracking-tight", className)}
    {...props}
  />
));

TypographyH3.displayName = "TypographyH3";

export const TypographyP = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base text-muted-foreground", className)}
    {...props}
  />
));

TypographyP.displayName = "TypographyP";