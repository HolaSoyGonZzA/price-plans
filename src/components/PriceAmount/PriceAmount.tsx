import React from "react";

import styles from "./PriceAmount.module.scss";

export interface PriceAmountProps {
  children: React.ReactNode;
}

export function PriceAmount({ children }: PriceAmountProps) {
  return <span className={styles.priceamount}>{children}</span>;
}
