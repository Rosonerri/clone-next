import { navData } from "./SideNavData";
import SideNav from "./SideNav";

const SideBar = () => {
  return (
    <div className="fixed h-screen justify-center w-[220px] hidden md:flex xl:flex">
      <div className="bg-white pt-10 w-[90%] text-[18px]">
        <div className="border-b py-2 "></div>
        <div className="border-b py-10 "></div>

        {navData.map((props: any) => (
          <SideNav icon={props.icon} text={props.text} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
