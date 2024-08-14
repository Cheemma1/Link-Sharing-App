import { EyeIcon, UserCircleIcon, LinkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import logo from "../assest/logo1.svg";
import Link from "next/link";

import { Button } from "@chakra-ui/react";

const MobNav = () => {
  return (
    <div className="mb-[1.5rem] w-full mx-auto h-[76px] py-4 block md:hidden">
      <div className=" flex items-center justify-between bg-white rounded-md py-2 px-2">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[2.
        
        1rem] h-[2.1rem]"
          />
        </Link>
        <div className="flex items-center gap-8 ">
          <Link
            href="/user"
            className=" flex flex-row  items-center gap-1 group active:bg-lightpurple active:rounded-[0.5rem] "
          >
            <LinkIcon
              className="w-[2.1rem] h-[1rem] text-grayy group-hover:text-purple active:text-purple"
              style={{ strokeWidth: 2 }}
            />
          </Link>
          <Link
            href="/user/profile"
            className=" flex flex-row  items-center gap-1 group active:bg-lightpurple active:rounded-[0.5rem]"
          >
            <UserCircleIcon className="w-[2.1rem] h-[1rem] text-grayy group-hover:text-purple active:text-purple" />
          </Link>
        </div>
        <Link href="/preview">
          <Button variant="outline" className="">
            <EyeIcon className="w-[2.1rem] h-[1rem] " />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobNav;
