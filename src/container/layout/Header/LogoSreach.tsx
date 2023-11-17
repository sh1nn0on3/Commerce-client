import Search, { SearchProps } from "antd/es/input/Search";
import Logo from "~/assets/logo.png";
import { FaTruckFast } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const LogoSreach = () => {
  const navigate = useNavigate();

  const onSearch: SearchProps["onSearch"] = (val, _e, info) => {
    console.log(val);
  };

  return (
    <div>
      <div className="w-container max-w-[90%] mx-auto my-4 flex gap-4 justify-center items-center">
        <img
          src={Logo}
          alt="#"
          className="w-[200px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="w-full flex">
          <Search
            placeholder="Hôm nay bạn cần tìm gì?"
            allowClear
            onSearch={onSearch}
            size="large"
            style={{}}
          />
        </div>
        <nav className="flex items-center justify-center gap-2">
          <div className="bg-primary px-2 py-1 rounded-lg w-[110px] transition-all hover:bg-green-700 cursor-pointer">
            <a
              className="text-white flex justify-center items-center gap-1 "
              href="#"
            >
              <FaTruckFast className="text-[30px] mx-1" />
              <span className="text-white text-[10px]">Kiểm tra đơn hàng</span>
            </a>
          </div>
          <div className="flex">
            <GiShoppingCart className="text-[40px] text-primary " />
            <div className="">
              <span className="top-0 right-0 bg-red-500 rounded-full text-white text-[10px] px-1">
                0
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LogoSreach;
