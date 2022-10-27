import React from "react";
import classNames from "classnames";
import styles from "./PricePlan.module.scss";

type PricePlanProps = {
  children: React.ReactNode;
  className?: string;
  style: React.CSSProperties;
};

export function PricePlan({ children, className, style }: PricePlanProps) {
  return (
    <div className={classNames(styles["price-plan"], className)} style={style}>
      {children}
    </div>
  );
}

PricePlan.defaultProps = {
  style: {
    padding: "1rem",
  },
};
