import React, { useMemo } from "react";

interface FlexProps {
  col?: boolean;
  items?: "center" | "start" | "end" | "baseline" | "stretch";
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
  className?: string;
  style?: React.CSSProperties;
  onBlur?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
  inline?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  children,
  col,
  items,
  inline,
  justify,
  className,
  style,
  onBlur,
  onClick,
}) => {
  const classNames: string = useMemo(() => {
    let classes: string[] = inline ? ["inline-flex"] : ["flex"];
    if (col) {
      classes.push("flex-col");
    }
    if (items) {
      if (items === "center") {
        classes.push(`items-center`);
      } else if (items === "start") {
        classes.push(`items-start`);
      } else if (items === "end") {
        classes.push(`items-end`);
      } else if (items === "baseline") {
        classes.push(`items-baseline`);
      } else if (items === "stretch") {
        classes.push(`items-stretch`);
      }
    }
    if (justify) {
      if (justify === "center") {
        classes.push(`justify-center`);
      } else if (justify === "start") {
        classes.push(`justify-start`);
      } else if (justify === "end") {
        classes.push(`justify-end`);
      } else if (justify === "between") {
        classes.push(`justify-between`);
      } else if (justify === "around") {
        classes.push(`justify-around`);
      } else if (justify === "evenly") {
        classes.push(`justify-evenly`);
      }
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }, [className, col, inline, items, justify]);

  return (
    <div className={classNames} style={style} onBlur={onBlur} onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
