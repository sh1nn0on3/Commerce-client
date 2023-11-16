import { useNavigate } from "react-router-dom";
import { GiSmartphone } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";

interface INavigation {
  icon: String | any;
  name: String;
  link: String;
}

const navigation: INavigation[] = [
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <IoPhonePortraitOutline />,
    name: "Apple",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
  {
    icon: <GiSmartphone />,
    name: "Điện thoại",
    link: "/phone",
  },
];
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex w-container max-w-[90%] mx-auto text-white bg-primary justify-center gap-5 py-1 rounded-md ">
        {navigation.map((props, index) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer "
            key={index}
            onClick={() => navigate(`${props.link}`)}
          >
            <span className="text-[25px]">{props.icon}</span>
            <span className="text-[10px]">{props.name}</span>
            {/* <span className="w-full border-2 rounded-full border-[#f59e0b]"></span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
