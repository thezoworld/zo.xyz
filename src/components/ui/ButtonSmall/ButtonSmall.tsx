import React from "react";
import styles from "./ButtonSmall.module.css";

type ButtonSmallProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonSmall = (
  props: ButtonSmallProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`${styles.button} ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};
export default React.forwardRef(ButtonSmall);
