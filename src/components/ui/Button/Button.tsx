import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
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
export default React.forwardRef(Button);
