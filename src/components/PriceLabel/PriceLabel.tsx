import React from "react";

import styles from "./PriceLabel.module.scss";

export interface PriceLabelProps {
  children: React.ReactNode;
}

export function PriceLabel({ children }: PriceLabelProps) {
  return <span className={styles.pricelabel}> {children}</span>;
}
