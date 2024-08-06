"use client";

import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

type GetLinksProp = {
  id: string;
  platform: string;
  link: string;
  created_at: string;
};

type UserProfile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string; // Adjusted based on your column name
};

const LinkFrame = () => {
  const [getLinks, setGetLinks] = useState<GetLinksProp[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile[]>([]);

  const handleFetchLink = async () => {
    const { data, error } = await supabase
      .from("userLink") // your table name from Supabase
      .select("*");

    if (error) {
      console.error("Error fetching links:", error.message);
    } else {
      setGetLinks(data || []);
    }
  };

  const handleGetUserProfile = async () => {
    const { data, error } = await supabase.from("profiles").select("*"); // Make sure the table name is correct
    if (error) {
      console.error("Error fetching user profile:", error.message);
    } else {
      setUserProfile(data || []);
    }
  };

  useEffect(() => {
    handleFetchLink();
    handleGetUserProfile();
  }, []);

  return (
    <div className="bg-white w-[586px] pt-10 rounded-md hidden lg:block">
      <div className="relative mx-auto border-gray bg-white border-[1px] rounded-[2.5rem] h-[600px] w-[300px] pt-2">
        <div className="rounded-[2rem] overflow-hidden w-[280px] h-[580px] border-l border-r border-b border-gray mx-auto relative bg-white">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[212px] h-[30px] rounded-b-full border-b border-gray"></div>
          {userProfile.length > 0 ? (
            userProfile.map((user) => (
              <div className="flex flex-col gap-4 mb-6 pt-16" key={user.id}>
                <div className="bg-midGray rounded-full w-[96px] h-[96px] mx-auto">
                  <Image
                    src={user.profile_image} // Assuming this is the correct field name
                    alt={`${user.first_name} ${user.last_name}`}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-center">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-center">{user.email}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4 mb-6 pt-16">
              <div className="bg-midGray rounded-full w-[96px] h-[96px] mx-auto"></div>
              <div className="bg-midGray rounded-md w-[160px] h-[16px] mx-auto"></div>
              <div className="bg-midGray rounded-md w-[76px] h-[8px] mx-auto"></div>
            </div>
          )}

          <div className="flex flex-col gap-4 mt-12 px-2">
            {getLinks.length > 0 ? (
              getLinks.map((link) => (
                <div key={link.id} className="bg-lightGray p-2 rounded-md">
                  <p className="font-bold">{link.platform}</p>
                  <div className="bg-midGray rounded-md w-full h-[40px] mx-auto px-4 my-4">
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
              <div className="bg-midGray w-full h-[44px] rounded-md"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFrame;
