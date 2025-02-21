import "./index.scss";

const AboutDescription = () => {
  return (
    <div className="about-description-wrapper">
      <div className="about-description">
        <p className="about-description-title">
          <b>О КОМПАНИИ</b>
        </p>
        <p className="about-description-text">
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
          <br />
          <br />
          Он представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>
      <div className="about-description-form">
        <div className="form-content">
          <p className="form-title">
            Попробуйте сейчас и получите 5 дней бесплатного пользования
          </p>
          <div className="about-input-wrapper">
            <button className="about-input-button">ПОПРОБОВАТЬ</button>
            <input
              className="about-input"
              type="text"
              placeholder="ВАШ E-MAIL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
