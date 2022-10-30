import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline-primary" | "dark";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        variant && styles[`button--${variant}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
