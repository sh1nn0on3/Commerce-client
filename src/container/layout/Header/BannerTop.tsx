import { NavigateTop } from "~/components/navigate";

const BannerTop = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-3 py-1">
        <span className="animate_pulse"></span>
        <p className="flex gap-2 items-center">
          <strong className="text-[12px]">
            Cơ hội sở hữu Samsung S20 FE 256GB chỉ với 6.990.000đ - SL có hạn
          </strong>
          <a
            href="#"
            className="text-center text-white text-[10px] bg-red-600 rounded-sm px-2 py-1 hover:bg-red-700 transition-all"
          >
            Xem Chi Tiết
          </a>
        </p>
      </div>
      <div className="absolute w-full bg-primary">
        <nav className="w-container max-w-[90%] mx-auto ">
          <div className="hidden bannerTop:flex justify-end gap-4  ">
            <NavigateTop path="#" name="Bản mobile" />
            <NavigateTop path="#" name="Giới thiệu" />
            <NavigateTop path="#" name="Sản phẩm đã xem" />
            <NavigateTop path="#" name="Trung tâm bảo hành" />
            <NavigateTop path="#" name="Hệ thống 127 siêu thị " />
            <NavigateTop path="#" name="Tuyển dụng" />
            <NavigateTop path="#" name="Tra cứu đơn hàng" />
            <NavigateTop path="/login" name="Đăng nhập" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BannerTop;
