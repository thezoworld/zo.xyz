import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={`${styles.button} ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
