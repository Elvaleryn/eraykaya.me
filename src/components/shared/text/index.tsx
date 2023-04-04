import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const text = cva(["text"], {
  variants: {
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-base"],
      xlarge: ["text-lg"],
      xxlarge: ["text-xl"],
      heading: ["text-3xl"],
      contentHead: ["text-2xl"],
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
      modal: ["text-primary-modal-text"],
    },
    weight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
    },
    fontFamily: {
      opensans: ["font-opensans"],
      inconsolata: ["font-inconsolata"],
    },
    fontStyle: {
      italic: ["italic"],
      normal: ["not-italic"],
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
    weight: "normal",
    fontFamily: "opensans",
    leading: "normal",
  },
});

interface ITextProps extends VariantProps<typeof text> {}

const Text: React.FC<
  ITextProps & {
    children: React.ReactNode;
    className?: string;
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
> = ({
  children,
  className,
  as,
  color,
  fontStyle,
  fontFamily,
  leading,
  size,
  weight,
}) => {
  const Component = as;
  return (
    <Component
      className={text({
        className,
        color,
        fontFamily,
        size,
        leading,
        weight,
        fontStyle,
      })}
    >
      {children}
    </Component>
  );
};

export default Text;
