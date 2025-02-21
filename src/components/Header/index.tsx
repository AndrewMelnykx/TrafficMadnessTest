import LogoItem from "@components/LogoItem";
import Navbar from "@components/Navbar";

import "./index.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <LogoItem />
      <Navbar />
    </div>
  );
};

export default Header;
