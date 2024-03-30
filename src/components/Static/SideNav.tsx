import React, { FC, ReactNode } from "react";

interface iSideNav {
  text: string;
  icon: ReactNode;
  content?: string;
  present?: ReactNode;
  onClick?: () => void;
}

const SideNav: FC<iSideNav> = ({ onClick, present, text, icon, content }) => {
  return (
    <div className="w-[220px]">
      <h3>{content ? content : ""}</h3>
      <div
        className="w-[90%] h-[50px] py-3 transition-all duration-300 cursor-pointer hover:bg-purple-100 rounded-lg flex gap-5 hover:text-purple-800 items-center justify-between"
        onClick={onClick}
      >
        <div className="text-[crimson] text-[22px]">{icon}</div>
        <div className="font-[600]">{text}</div>
        {/* <div>{present && present}</div> */}
      </div>
    </div>
  );
};

export default SideNav;
