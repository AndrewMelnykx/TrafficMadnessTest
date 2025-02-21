import tradebladeItems from "./data";
import "./index.scss";
import TradeBladeTemplateIs from "./template";

const TradebladeIs = () => {
  const firstColumnData = tradebladeItems.slice(0, 3);
  const secondColumnData = tradebladeItems.slice(3, 5);

  return (
    <div className="tradeblade-wrapper">
      <p className="tradeblade-title">
        <b>
          tradeblade
          <br />
          это
        </b>
      </p>

      <div className="tradeblade-columns-wrapper">
        <div className="first-column-wrapper">
          {firstColumnData.map((item) => (
            <TradeBladeTemplateIs
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="second-column-wrapper">
          {secondColumnData.map((item) => (
            <TradeBladeTemplateIs
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradebladeIs;
