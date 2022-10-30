import type { Feature } from "../../hooks/useFeatures";
import { PriceFeature } from "../PriceFeature/PriceFeature";

import styles from "./PriceFeatures.module.scss";

export interface PriceFeaturesProps {
  items: Feature[];
}

export function PriceFeatures({ items }: PriceFeaturesProps) {
  return (
    <ul className={styles.pricefeatures}>
      {items.map((features) => (
        <PriceFeature key={`free-${features.name}`}>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.00001 7.78L1.22001 5L0.273346 5.94L4.00001 9.66667L12 1.66667L11.06 0.726665L4.00001 7.78Z"
              fill="currentColor"
            />
          </svg>
          {features.name}
        </PriceFeature>
      ))}
    </ul>
  );
}
