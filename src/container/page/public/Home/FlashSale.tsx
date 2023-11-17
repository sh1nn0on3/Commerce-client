import { Carousel, Tabs } from "antd";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface IProp {
  name: String;
  price: String;
  img: String | any;
  link: String | any;
}

const phone: IProp[] = [
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pro-max-natural-titanium-pure-back-iphone-15-pro-max-natural-titanium-pure-front-2up-screen-usen-1.png",
    link: "#",
  },
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/10/27/oppo-find-n3-ad.png",
    link: "#",
  },
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/18/13-removebg-preview.png",
    link: "#",
  },
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/10/18/iphone-11-black-2-up-vertical-us-en-screen-1.png",
    link: "#",
  },
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-pink-pure-back-iphone-15-pink-pure-front-2up-screen-usen.png",
    link: "#",
  },
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/13/iphone-15-plus-blue-pure-back-iphone-15-plus-blue-pure-front-2up-screen-usen.png",
    link: "#",
  },
  {
    name: "Iphone 15 Pro Max 512GB",
    price: "29.990.000đ",
    img:
      "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/18/iphone-12-finish-select-202207-green-removebg-preview.png",
    link: "#",
  },
];

const laptop: IProp[] = [
  {
    name:
      "Laptop Asus Zenbook 14 UX425EA-KI701T i7 1165G7/16GB/512GB/Win10 (Pine Grey)",
    price: "29.990.000đ",
    img: "",
    link: "#",
  },
];

const watch: IProp[] = [
  {
    name: "Đồng hồ thông minh Huawei Watch GT 2 Pro Elegant (Marron)",
    price: "29.990.000đ",
    img: "",
    link: "#",
  },
];

const FlashSale = () => {
  let carouselRefPhone: any = null;
  let carouselRefLaptop: any = null;
  let carouselRefWatch: any = null;
  const navigate = useNavigate();

  return (
    <div className="mt-4 w-container max-w-[90%] mx-auto my-4">
      <div className="">
        <h1 className="font-bold text-red-600 text-2xl ">Flash Sale</h1>
        <Tabs>
          <Tabs.TabPane tab="Điện thoại/Tablet" key="1">
            <div className="relative bg-white px-2 py-2 rounded-md ">
              <Carousel
                ref={(ref) => (carouselRefPhone = ref)}
                slidesToShow={5}
                autoplay
                dots={{ className: "custom-dots" }}
              >
                {phone.map((item, index) => (
                  <div
                    key={index}
                    className=" text-center flex items-center justify-center cursor-pointer"
                    onClick={() => navigate(`${item.link}`)}
                  >
                    <div className="flex justify-center">
                      <img src={item.img} alt="err" />
                    </div>
                    <div>
                      <p className="line-clamp-2">{item.name}</p>
                      <p className=" line-clamp-1 text-red-600 font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div
                className=" text-xl text-orange-500  "
                onClick={() => carouselRefPhone.prev()}
              >
                <div className="absolute -translate-y-[50%] top-[50%] mx-2 cursor-pointer  ">
                  <BsChevronLeft />
                </div>
              </div>
              <div
                className="text-xl text-orange-500"
                onClick={() => carouselRefPhone.next()}
              >
                <div className=" absolute -translate-y-[50%] top-[50%] right-[0%] mx-2 cursor-pointer  ">
                  <BsChevronRight />
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Laptop/Màn hình/Tivi" key="2">
            <div className="relative ">
              <Carousel
                ref={(ref) => (carouselRefLaptop = ref)}
                slidesToShow={5}
                dots={{ className: "custom-dots" }}
              >
                {phone.map((item, index) => (
                  <div
                    key={index}
                    className=" text-center flex items-center justify-center cursor-pointer"
                    onClick={() => navigate(`${item.link}`)}
                  >
                    <div className="flex justify-center">
                      <img src={item.img} alt="err" />
                    </div>
                    <div>
                      <p className="line-clamp-2">{item.name}</p>
                      <p className=" line-clamp-1 text-red-600 font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div
                className=" text-xl text-orange-500  "
                onClick={() => carouselRefLaptop.prev()}
              >
                <div className="absolute -translate-y-[50%] top-[50%] mx-2 cursor-pointer  ">
                  <BsChevronLeft />
                </div>
              </div>
              <div
                className="text-xl text-orange-500"
                onClick={() => carouselRefLaptop.next()}
              >
                <div className=" absolute -translate-y-[50%] top-[50%] right-[0%] mx-2 cursor-pointer  ">
                  <BsChevronRight />
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đồng hồ/phụ kiện/khác" key="3">
            <div className="relative ">
              <Carousel
                ref={(ref) => (carouselRefWatch = ref)}
                slidesToShow={5}
                dots={{ className: "custom-dots" }}
              >
                {phone.map((item, index) => (
                  <div
                    key={index}
                    className=" text-center flex items-center justify-center cursor-pointer"
                    onClick={() => navigate(`${item.link}`)}
                  >
                    <div className="flex justify-center">
                      <img src={item.img} alt="err" />
                    </div>
                    <div>
                      <p className="line-clamp-2">{item.name}</p>
                      <p className=" line-clamp-1 text-red-600 font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div
                className=" text-xl text-orange-500  "
                onClick={() => carouselRefWatch.prev()}
              >
                <div className="absolute -translate-y-[50%] top-[50%] mx-2 cursor-pointer  ">
                  <BsChevronLeft />
                </div>
              </div>
              <div
                className="text-xl text-orange-500"
                onClick={() => carouselRefWatch.next()}
              >
                <div className=" absolute -translate-y-[50%] top-[50%] right-[0%] mx-2 cursor-pointer  ">
                  <BsChevronRight />
                </div>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <nav className="flex justify-center items-center my-4">
        <div className="">
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/14/flip4-s22-ultra.png"
            alt="#"
          />
        </div>
        <div className="">
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/14/flip4-s22-ultra.png"
            alt="#"
          />
        </div>
      </nav>
    </div>
  );
};

export default FlashSale;
