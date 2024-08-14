import React from "react";
import logo from "../assest/logo1.svg";
import Image from "next/image";
const NavLogo = () => {
  return (
    <div className="mt-[4rem] mb-4 flex flex-row px-4 md:px-0 items-center ">
      <div className=" flex w-[2.5rem] h-[2.5rem] ">
        <Image src={logo} alt="logo" className="w-[2.1rem] h-[2.1rem]" />
      </div>
      <h1 className="font-bold text-darkGrey text-[1.5rem]">devlinks</h1>
    </div>
  );
};

export default NavLogo;
