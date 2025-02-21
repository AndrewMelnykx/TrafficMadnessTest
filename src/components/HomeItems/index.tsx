import "./index.scss";

import homeImage from "@assets/logos/homeSquarepng.png";

const HomeItems = () => {
  return (
    <div className="home-items-main-wrapper">
      <div className="home-items-left-wrapper">
        <h1 className="input-title">
          моментально Копируй сделки профи трейдеров
        </h1>
        <p className="description">
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>
        <div className="home-input-wrapper">
          <button className="home-input-button">НАЧАТЬ</button>
          <input className="home-input" type="text" placeholder="ВАШ E-MAIL" />
        </div>
        <p className="notion">5 дней бесплатного пользования</p>
      </div>
      <div className="home-items-right-wrapper">
        <img src={homeImage} alt="homeImg" className="home-right-image" />
      </div>
    </div>
  );
};
export default HomeItems;
