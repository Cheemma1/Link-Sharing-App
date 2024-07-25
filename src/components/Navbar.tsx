import Image from "next/image";
import logo from "../assest/logo1.svg";
import { LinkIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="mb-[1.5rem] w-full mx-auto h-[76px] py-4">
      <div className=" flex items-center justify-between bg-white rounded-md py-2 px-2">
        <div className=" flex  flex-row items-center gap-2 ">
          <Image src={logo} alt="logo" className="w-[2.1rem] h-[2.1rem]" />
          <h1 className="font-bold text-darkGrey text-[1.5rem]">devlinks</h1>
        </div>
        <div className="flex items-center gap-8 ">
          <Link
            href="/user"
            className=" flex flex-row  items-center gap-1 group active:bg-lightpurple active:rounded-[0.5rem] "
          >
            <LinkIcon
              className="w-[1rem] h-[1rem] text-grayy group-hover:text-purple active:text-purple"
              style={{ strokeWidth: 2 }}
            />
            <span className="font-semibold text-[1rem] text-grayy  group-hover:text-purple active:text-purple">
              Links
            </span>
          </Link>
          <Link
            href="/user/profile"
            className=" flex flex-row  items-center gap-1 group active:bg-lightpurple active:rounded-[0.5rem]"
          >
            <UserCircleIcon className="w-[1rem] h-[1rem] text-grayy group-hover:text-purple active:text-purple" />
            <span className="font-semibold text-[1rem] text-grayy  group-hover:text-purple active:text-purple">
              Profile
            </span>
          </Link>
        </div>
        <Button  variant="outline" className="h-[46px] w-[7.1rem]">
          Preview
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
