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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <Dialog.Panel
            style={{
              padding: "1.5rem",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <Dialog.Title>Contact</Dialog.Title>

            <form>
              <input
                type={"email"}
                placeholder={"email@gmail.com"}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #5A45F2",
                  borderRadius: "0.5rem",
                }}
              />
            </form>

            <p>Once we receive your email we will contact you!</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: "1rem",
              }}
            >
              <Button
                variant="outline-primary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Send
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
