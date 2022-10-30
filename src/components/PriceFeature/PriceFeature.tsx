import classNames from "classnames";
import React from "react";

import styles from "./PriceFeature.module.scss";

export interface PriceFeatureProps {
  children: React.ReactNode;
  active: boolean;
}

export function PriceFeature({ children, active }: PriceFeatureProps) {
  return (
    <li
      className={classNames(
        styles.pricefeature,
        !active && "price-feature--disabled"
      )}
    >
      {children}
    </li>
  );
}

PriceFeature.defaultProps = {
  active: false,
};
