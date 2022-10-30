import { useState } from "react";
import { Dialog } from "@headlessui/react";

import useFeature from "./hooks/useFeatures";

import starterPlanIcon from "./assets/starter-plan.png";
import proPlanIcon from "./assets/pro-plan.png";
import teamsPlanIcon from "./assets/teams-plan.png";

import { PricePlan } from "./components/PricePlan/PricePlan";
import { PriceLabel } from "./components/PriceLabel";
import { PriceAmount } from "./components/PriceAmount";
import { PriceTime } from "./components/PriceTime";
import { PriceFeatures } from "./components/PriceFeatures";
import { Button } from "./components/Button";

import "./App.scss";

function App() {
  const { starterFeatures, proFeatures, teamsFeatures } = useFeature();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="price-plans">
      <PricePlan>
        <img src={starterPlanIcon} height={80} alt="Starter plan icon" />
        <PriceLabel>Starter</PriceLabel>
        <PriceAmount>Free</PriceAmount>
        <PriceTime>per month</PriceTime>
        <PriceFeatures items={starterFeatures} />
        <Button variant="outline-primary" onClick={() => setIsOpen(true)}>
          Get Started
        </Button>
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
        <PriceLabel>Pro</PriceLabel>
        <PriceAmount>$49</PriceAmount>
        <PriceTime
          style={{
            color: "#fff",
          }}
        >
          per year
        </PriceTime>
        <PriceFeatures items={proFeatures} />
        <Button variant="dark" onClick={() => setIsOpen(true)}>
          Become a Pro
        </Button>
      </PricePlan>

      <PricePlan style={{ padding: "40px" }}>
        <img src={teamsPlanIcon} height={80} alt="Teams plan icon" />
        <PriceLabel>Teams</PriceLabel>
        <PriceAmount>$99</PriceAmount>
        <PriceTime>per month</PriceTime>
        <PriceFeatures items={teamsFeatures} />
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Get Teams
        </Button>
      </PricePlan>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default App;
