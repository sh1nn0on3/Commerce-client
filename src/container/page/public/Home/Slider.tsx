import { Carousel } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ISlider {
  name: String | any;
  img: String | any;
  link: String | any;
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const slider: ISlider[] = [
  {
    name: "",
    img:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/10/1200x375-msi.png",
    link: "/",
  },
  {
    name: "",
    img:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/10/1200x375-lenovo.png",
    link: "/",
  },
  {
    name: "",
    img:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/15/web-dong-ho-kieslect-01.jpg",
    link: "/",
  },
  {
    name: "",
    img:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/15/web-90-web_638356646440053322.jpg",
    link: "/",
  },
  {
    name: "",
    img:
      "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/10/phu-kien-9fit-1200x375.jpg",
    link: "/",
  },
];

const SliderHome: React.FC = () => {
  let carouselRef: any = null;
  const navigate = useNavigate();
  const next = () => {
    carouselRef.next();
  };
  const prev = () => {
    carouselRef.prev();
  };

  return (
    <div className="mt-4 w-container max-w-[90%] mx-auto relative ">
      <Carousel ref={(ref) => (carouselRef = ref)} autoplay>
        {slider.map((props, index) => (
          <div
            key={index}
            onClick={() => navigate(`${props.link}`)}
            className=" border-none cursor-pointer "
          >
            <img src={props.img} alt="#" className=" w-container " />
          </div>
        ))}
      </Carousel>
      <div className="text-xl text-orange-500  " onClick={prev}>
        <div className=" absolute -translate-y-[50%] top-[50%] mx-2 px-1 py-1 bg-gray-200 rounded-full cursor-pointer opacity-70 hover:opacity-50 ">
          <BsChevronLeft />
        </div>
      </div>
      <div className="text-xl text-orange-500" onClick={next}>
        <div className=" absolute -translate-y-[50%] top-[50%] right-[0%] mx-2 px-1 py-1 bg-gray-200 rounded-full cursor-pointer opacity-70 hover:opacity-50 ">
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
