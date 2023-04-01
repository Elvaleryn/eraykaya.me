import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const text = cva(["text"], {
  variants: {
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-lg"],
      xlarge: ["text-xl"],
      xxlarge: ["text-2xl"],
      xxxlarge: ["text-3xl"],
    },
    leading: {
      tight: ["leading-tight"],
      normal: ["leading-relaxed"],
      relaxed: ["leading-relaxed"],
      loose: ["leading-loose"],
    },
    color: {
      primary: ["text-primary-text"],
      secondary: ["text-secondary-text"],
    },
    weight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
    },
    fontStyle: {
      opensans: ["font-opensans"],
      inconsolata: ["font-inconsolata"],
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
    weight: "normal",
    fontStyle: "opensans",
    leading: "normal",
  },
});

interface ITextProps extends VariantProps<typeof text> {}

const Text: React.FC<
  ITextProps & {
    children: React.ReactNode;
    className: string;
    as:
      | "div"
      | "p"
      | "span"
      | "article"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6";
  }
> = ({ children, className, as, color, fontStyle, leading, size, weight }) => {
  const Component = as;
  return (
    <Component
      className={text({ className, color, fontStyle, size, leading, weight })}
    >
      {children}
    </Component>
  );
};

export default Text;
