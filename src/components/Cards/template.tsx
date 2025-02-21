import "./index.scss";

import cardsLogo from "@assets/logos/cardsLogo.png";
import vectorLogo from "@assets/logos/Vector.png";

type TemplateProps = {
  pair: string;
  timeline: string;
  profitTitle: string;
  profitPercentage: string;
  target: string;
  entryDate: string;
};

const Template = ({
  pair,
  timeline,
  profitTitle,
  profitPercentage,
  target,
  entryDate,
}: TemplateProps) => {
  return (
    <div className="template-wrapper">
      <div className="card-bar"></div>
      <div className="card-info-list">
        <p className="value-pair">{pair}</p>
        <p className="timeline">{timeline}</p>
        <p className="profit-title">{profitTitle}</p>
        <p className="profit-percentage">
          {profitPercentage} <img src={vectorLogo} alt="vectorLogo" />
        </p>
        <div className="card-lower-bar">
          <p className="card-target">{target}</p>
          <p className="card-date">{entryDate}</p>
        </div>
      </div>
      <img src={cardsLogo} alt="cardsLogo" className="cards-image" />
    </div>
  );
};

export default Template;
