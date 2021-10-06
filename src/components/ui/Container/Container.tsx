import React from "react";

interface ContainerProps {
  className?: string;
  index?: number;
  backgroundLayer?: any;
  style?: React.CSSProperties;
  fullHeight?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  index = 1,
  backgroundLayer,
  style,
  fullHeight,
}) => {
  return (
    <section
      className={className.concat(` w-full ${fullHeight ? "h-screen" : ""}`)}
      style={style}
    >
      {backgroundLayer}
      <div className="max-w-5xl mx-auto h-full relative w-full">{children}</div>
    </section>
  );
};

export default Container;
