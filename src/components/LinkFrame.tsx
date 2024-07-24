const LinkFrame = () => {
  return (
    <div className="relative mx-auto border-gray  bg-white border-[1px] rounded-[2.5rem] h-[600px] w-[300px]  pt-2">
      <div className="rounded-[2rem] overflow-hidden w-[280px] h-[580px] border-l border-r border-b border-gray mx-auto relative bg-white">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[212px] h-[30px]  rounded-b-full border-b  border-gray"></div>
        <div className="flex flex-col gap-4 mb-6 pt-16">
          <div className="bg-midGray rounded-full w-[96px] h-[96px] mx-auto"></div>
          <div className="bg-midGray rounded-md w-[160px] h-[16px] mx-auto"></div>
          <div className="bg-midGray rounded-md w-[76px] h-[8px] mx-auto"></div>
        </div>
        <div className="flex flex-col gap-4 mt-12 px-2">
          <div className="bg-midGray w-full h-[44px] rounded-md"></div>
          <div className="bg-midGray w-full h-[44px] rounded-md"></div>
          <div className="bg-midGray w-full h-[44px] rounded-md"></div>
          <div className="bg-midGray w-full h-[44px] rounded-md"></div>
          <div className="bg-midGray w-full h-[44px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default LinkFrame;
