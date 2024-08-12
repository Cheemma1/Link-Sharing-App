"use client";

import ProfileData from "./ProfileData";

const LinkFrame = () => {
  return (
    <div className="bg-white w-[586px] pt-10 rounded-md hidden lg:block">
      <div className="relative mx-auto border-gray bg-white border-[1px] rounded-[2.5rem] h-[600px] w-[300px] pt-2">
        <div className="rounded-[2rem] overflow-hidden w-[280px] h-[580px] border-l border-r border-b border-gray mx-auto relative bg-white">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[212px] h-[30px] rounded-b-full border-b border-gray"></div>
          <ProfileData />
        </div>
      </div>
    </div>
  );
};

export default LinkFrame;
