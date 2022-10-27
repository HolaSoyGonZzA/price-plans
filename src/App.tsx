import classNames from "classnames";

import useFeature from "./hooks/useFeatures";

import { PricePlan } from "./components/PricePlan/PricePlan";

import starterPlanIcon from "./assets/starter-plan.png";
import proPlanIcon from "./assets/pro-plan.png";
import teamsPlanIcon from "./assets/teams-plan.png";

import "./App.scss";
import { Button } from "./components/Button";

function App() {
  const { starterFeatures, proFeatures, teamsFeatures } = useFeature();

  return (
    <div className="price-plans">
      <PricePlan>
        <img src={starterPlanIcon} height={80} alt="Starter plan icon" />
        <span className="price-label">Starter</span>
        <span className="price-amount">Free</span>
        <span className="price-time">per month</span>
        <ul className="price-features">
          {starterFeatures.map((features) => (
            <li
              key={`free-${features.name}`}
              className={classNames(
                "price-feature",
                !features.active && "price-feature--disabled"
              )}
            >
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
            </li>
          ))}
        </ul>
        <Button variant="outline-primary">Get Started</Button>
      </PricePlan>

      <PricePlan
        style={{
          padding: "48px",
          color: "#fff",
          borderColor: "#000",
          backgroundColor: "#5A45F2",
        }}
      >
        <img src={proPlanIcon} height={80} alt="Pro plan icon" />
        <span className="price-label">Pro</span>
        <span className="price-amount">$49</span>
        <span
          className="price-time"
          style={{
            color: "#fff",
          }}
        >
          per year
        </span>
        <ul className="price-features">
          {proFeatures.map((features) => (
            <li
              key={`free-${features.name}`}
              className={classNames(
                "price-feature",
                !features.active && "price-feature--disabled"
              )}
            >
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
            </li>
          ))}
        </ul>
        <Button variant="dark">Become a Pro</Button>
      </PricePlan>

      <PricePlan style={{ padding: "40px" }}>
        <img src={teamsPlanIcon} height={80} alt="Teams plan icon" />
        <span className="price-label">Teams</span>
        <span className="price-amount">$99</span>
        <span className="price-time">per month</span>
        <ul className="price-features">
          {teamsFeatures.map((features) => (
            <li
              key={`free-${features.name}`}
              className={classNames(
                "price-feature",
                !features.active && "price-feature--disabled"
              )}
            >
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
            </li>
          ))}
        </ul>
        <Button variant="primary">Get Teams</Button>
      </PricePlan>
    </div>
  );
}

export default App;
