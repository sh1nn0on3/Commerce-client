import HeaderLayout from "~/container/layout/Header";
import SliderHome from "./Slider";
import FlashSale from "./FlashSale";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeaderLayout />
      <SliderHome />
      <FlashSale />
    </div>
  );
};

export default Home;
