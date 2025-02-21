import "./index.scss";
import logoPic from "@assets/logos/logoPic.png";
import logoName from "@assets/logos/logoName.png";

const LogoItem = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo-pic" src={logoPic} alt="logoPic" />
      <img className="logo-name" src={logoName} alt="logoTitle" />
    </div>
  );
};

export default LogoItem;
