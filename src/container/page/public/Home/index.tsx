import HeaderLayout from "~/container/layout/Header";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeaderLayout />
      <SliderHome />
    </div>
  );
};

export default Home;
