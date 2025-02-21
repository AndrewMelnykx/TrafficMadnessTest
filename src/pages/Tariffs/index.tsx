import { useState } from "react";
import "./index.scss";

import StandardCard from "./StandardCard";
import VipCard from "./VipCard";

const Tariffs = () => {
  const [selected, setSelected] = useState("spot");

  const handleClick = (button: string) => {
    setSelected(button);
  };

  return (
    <div className="tariff-wrapper">
      <p className="tariff-title">
        <b>тарифы</b>
      </p>
      <div className="cards-buttons-wrapper">
        <button
          className={`spot ${selected === "spot" ? "selected" : ""}`}
          onClick={() => handleClick("spot")}
        >
          <b>СПОТ</b>
        </button>
        <button
          className={`futures ${selected === "futures" ? "selected" : ""}`}
          onClick={() => handleClick("futures")}
        >
          <b>ФЮЧЕРС</b>
        </button>
      </div>
      <div className="tariff-cards-wrapper">
        <StandardCard />
        <div className="card-vip">
          <VipCard />
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
