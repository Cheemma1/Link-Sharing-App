"use client";

import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type GetLinksProp = {
  id: string;
  platform: string;
  link: string;
  // created_at: string;
};

const LinkFrame = () => {
  const [getLinks, setGetLinks] = useState<GetLinksProp[]>([]);

  // Fetch userlinks on component mount
  useEffect(() => {
    handleFetchLink();
  }, []);

  const handleFetchLink = async () => {
    const { data, error } = await supabase
      .from("userLink") //  your table name from supabase
      .select("*");

    if (error) {
      console.error("Error fetching links:", error.message);
    } else {
      setGetLinks(data || []);
    }
  };

  return (
    <div className="bg-white w-[586px] pt-10  rounded-md hidden lg:block">
      <div className="relative mx-auto border-gray  bg-white border-[1px] rounded-[2.5rem] h-[600px] w-[300px]  pt-2">
        <div className="rounded-[2rem] overflow-hidden w-[280px] h-[580px] border-l border-r border-b border-gray mx-auto relative bg-white">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[212px] h-[30px]  rounded-b-full border-b  border-gray"></div>
          <div className="flex flex-col gap-4 mb-6 pt-16">
            <div className="bg-midGray rounded-full w-[96px] h-[96px] mx-auto"></div>
            <div className="bg-midGray rounded-md w-[160px] h-[16px] mx-auto"></div>
            <div className="bg-midGray rounded-md w-[76px] h-[8px] mx-auto"></div>
          </div>
          <div className="flex flex-col gap-4 mt-12 px-2">
            {getLinks.length > 0 ? (
              getLinks.map((link) => (
                <div key={link.id} className="bg-lightGray p-2 rounded-md">
                  <p className="font-bold">{link.platform}</p>
                  <div className="bg-midGray rounded-md w-full  h-[40px] mx-auto px-4 my-4">
                    {" "}
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {link.link}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-midGray w-full h-[44px] rounded-md">
                <p className="text-center text-gray-500">No links available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFrame;
