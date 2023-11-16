import Search, { SearchProps } from "antd/es/input/Search";
import Logo from "~/assets/logo.png";
import { FaTruckFast } from "react-icons/fa6";

const LogoSreach = () => {
  const onSearch: SearchProps["onSearch"] = (val, _e, info) => {
    console.log(val);
  };

  return (
    <div>
      <div className="w-container max-w-[90%] mx-auto my-2 flex gap-4 justify-center items-center">
        <img src={Logo} alt="#" className="w-[150px]" />
        <div className="w-full flex">
          <Search
            placeholder="Hôm nay bạn cần tìm gì?"
            allowClear
            onSearch={onSearch}
            size="large"
            style={{}}
          />
        </div>
        <nav className="">
          <div className="bg-primary px-2 py-1 rounded-lg w-[110px] transition-all hover:bg-green-700 cursor-pointer">
            <a
              className="text-white flex justify-center items-center gap-1 "
              href="#"
            >
              <FaTruckFast className="text-[30px] mx-1" />
              <span className="text-white text-[10px]">Kiểm tra đơn hàng</span>
            </a>
          </div>
          <div className=""></div>
        </nav>
      </div>
    </div>
  );
};

export default LogoSreach;
