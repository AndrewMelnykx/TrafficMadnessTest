import "./index.scss";

const Digits = () => {
  return (
    <div className="digits-wrapper">
      <div className="digits-black-half-square">
        <div className="slight-slope"></div>
      </div>
      <div className="digits-description">
        <div className="title-block">
          <h2 className="digits-title">
            <b>Цифры</b>
          </h2>
          <p className="digits-date">Cентябрь 2022</p>
        </div>
        <div className="digits-info-block-wrapper">
          <div className="percent-block">
            <p className="digits-data-template">Торговой прибыли</p>

            <h2 className="digits-title-template">
              <b>2756%</b>
            </h2>
          </div>
          <div className="spot-block">
            <p className="digits-data-template">фьючерсных и спотовых сделок</p>

            <h2 className="digits-title-template">
              <b>67</b>
            </h2>
          </div>
          <div className="profit-block">
            <p className="digits-data-template">прибыль подписчиков</p>

            <h2 className="digits-title-template">
              <b>375000</b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digits;
