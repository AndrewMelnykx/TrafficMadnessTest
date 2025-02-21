import OfferList from "@components/OfferList";
import "./index.scss";
import Vector from "@assets/tariffs/SentanceVector5.png";

const StandardCard = () => {
  return (
    <div className="card-standard">
      <div className="tariff-card-title">STANDARD</div>
      <OfferList />
      <div className="date-price-wrapper">
        <div className="price-wrapper">
          <p className="tariff-price">
            <b>$234</b>
            <p className="discount">-35%</p>
          </p>
        </div>
        <div className="date-wrapper">
          <p className="date">12 месяцев</p>
          <img src={Vector} alt="Vector" className="date-vector" />
        </div>
      </div>
      <button className="tariff-button">
        Попробовать
        <span className="tariff-button-span">5 дней бесплатно</span>
      </button>
    </div>
  );
};

export default StandardCard;
