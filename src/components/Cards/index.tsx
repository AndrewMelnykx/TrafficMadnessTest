import "./index.scss";
import Template from "./template";
import { cardData } from "./data";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        {cardData.map((item) => (
          <Template
            pair={item.pair}
            timeline={item.timeline}
            profitTitle={item.profitTitle}
            profitPercentage={item.profitPercentage}
            target={item.target}
            entryDate={item.entryDate}
          />
        ))}
      </div>
      <div className="cards-black-half-square">
        <div className="cards-slight-slope"></div>
      </div>
    </div>
  );
};

export default Cards;
