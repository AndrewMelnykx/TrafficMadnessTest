import "./index.scss";
import Vector from "@assets/tariffs/SentanceVector5.png";

const SecondList = () => {
  return (
    <ul className="offer-list second">
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
        Краткосрочные, среднесрочные и инвест сделки{" "}
      </li>
      <li className="offer">
        <img className="offer-icon" src={Vector} alt="vector" />
        Доступ в Vip чат с командой{" "}
      </li>
      <li className="offer">
        <img className="offer-icon" src={Vector} alt="vector" />
        Наш авторский курс по трейдингу{" "}
      </li>
    </ul>
  );
};

export default SecondList;
