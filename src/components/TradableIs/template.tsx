import "./index.scss";

interface TradeBladeTemplateProps {
  image: string;
  title: string;
  description: string;
}

const TradeBladeTemplateIs: React.FC<TradeBladeTemplateProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="tradeblade-template-wrapper">
      <img src={image} alt={title} className="tradeblade-image" />
      <div className="tradable-text-wrapper">
        <b>
          <p className="tradeblade-template-title">{title}</p>
        </b>
        <p className="tradeblade-template-title-description">{description}</p>
      </div>
    </div>
  );
};

export default TradeBladeTemplateIs;
