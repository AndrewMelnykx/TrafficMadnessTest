import "./index.scss";
import Vector from "@assets/tariffs/SentanceVector5.png";

const OfferList = () => {
  return (
    <ul className="offer-list">
      <li className="offer">
        <img className="offer-icon" src={Vector} alt="vector" />
        Ручной трейдинг
      </li>
      <li className="offer">
        <img className="offer-icon" src={Vector} alt="vector" />
        Автоматическое или полуавтоматическое копирование сделок
      </li>
      <li className="offer">
        <img className="offer-icon" src={Vector} alt="vector" />
        Личный кабинет со статистикой
      </li>
      <li className="offer">
        <img className="offer-icon" src={Vector} alt="vector" />
        Среднесрочные сделки с уровнями набора портфеля
      </li>
    </ul>
  );
};

export default OfferList;
