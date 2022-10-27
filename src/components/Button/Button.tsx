import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline-primary" | "dark";
}

export function Button({ children, variant }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        variant && styles[`button--${variant}`]
      )}
    >
      {children}
    </button>
  );
}
