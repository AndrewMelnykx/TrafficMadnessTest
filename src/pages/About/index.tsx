import Cards from "@components/Cards";
import "./index.scss";
import AboutDescription from "@components/AboutDesciption";
import TradebladeIs from "@components/TradableIs";
import Tariffs from "@pages/Tariffs";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="cards-title-wrapper">
        <h2 className="cards-title">Прошедшие сделки</h2>
        <p className="status-indicator">Онлайн</p>
        <Cards />
        <div className="about-black-half-square">
          <div className="about-slight-slope"></div>
        </div>
      </div>

      <AboutDescription />
      <TradebladeIs />
      <Tariffs />
    </div>
  );
};

export default About;
