import React, { useMemo } from "react";

interface FlexProps {
  col?: boolean;
  items?: "center" | "start" | "end" | "baseline";
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
      classes.push(`items-${items}`);
    }
    if (justify) {
      classes.push(`justify-${justify}`);
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }, [className]);

  return (
    <div className={classNames} style={style} onBlur={onBlur} onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
