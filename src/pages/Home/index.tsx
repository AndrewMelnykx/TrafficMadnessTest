import Header from "@components/Header";
import "./index.scss";
import HomeItems from "@components/HomeItems";
import Digits from "@pages/Digits";
import About from "@pages/About";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <HomeItems />
      <Digits />
      <About />
    </div>
  );
};

export default Home;
