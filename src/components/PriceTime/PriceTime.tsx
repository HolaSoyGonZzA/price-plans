import React from "react";

import styles from "./PriceTime.module.scss";

export interface PriceTimeProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function PriceTime({ children, style }: PriceTimeProps) {
  return (
    <span className={styles.pricetime} style={style}>
      {children}
    </span>
  );
}
