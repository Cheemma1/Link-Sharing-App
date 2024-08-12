"use client";
import React from "react";
import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

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
  profile_image: string;
};

const ProfileData: React.FC = () => {
  const [getLinks, setGetLinks] = useState<GetLinksProp[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

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
    const { data, error } = await supabase.from("profile").select("*");

    if (error) {
      console.error("Error fetching user profile:", error.message);
    } else {
      setUserProfile(data?.length > 0 ? data[0] : null);
    }
  };

  useEffect(() => {
    handleFetchLink();
    handleGetUserProfile();
  }, []);

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "twitter":
        return "bg-blue-500";
      case "frontendmentor":
        return "bg-black";
      case "github":
        return "bg-blue-800";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="pb-4 ">
      {userProfile ? (
        <div className="flex flex-col gap-4 mb-6 pt-16">
          <div className="bg-midGray rounded-full w-[96px] h-[96px] mx-auto">
            <Image
              src={userProfile.profile_image}
              alt={`${userProfile.first_name} ${userProfile.last_name}`}
              width={96}
              height={96}
              className="rounded-full border-2 border-purple"
            />
          </div>
          <h2 className="text-center">
            {userProfile.first_name} {userProfile.last_name}
          </h2>
          <p className="text-center">{userProfile.email}</p>
        </div>
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
            <div
              key={link.id}
              className={`p-3 rounded-md ${getPlatformColor(link.platform)}`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-white">{link.platform}</h2>
                <Link href={link.link}>
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-midGray w-full h-[44px] rounded-md"></div>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
