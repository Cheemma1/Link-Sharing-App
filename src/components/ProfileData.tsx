"use client";
import React from "react";
import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaDev,
  FaTwitch,
  FaGitlab,
  FaStackOverflow,
  FaCodepen,
  FaFreeCodeCamp,
} from "react-icons/fa";
import { FaArrowRight, FaHashnode } from "react-icons/fa6";

type GetLinksProp = {
  id: string;
  platform: string;
  link: string;
  created_at: string;
  user_id: string; // Add user_id field
};

type UserProfile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string;
  user_id: string; // Add user_id field
};

const platformIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  twitter: <FaTwitter />,
  frontendmentor: <FaTwitter />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  youtube: <FaYoutube />,
  devto: <FaDev />,
  twitch: <FaTwitch />,
  gitlab: <FaGitlab />,
  hashnode: <FaHashnode />,
  stackoverflow: <FaStackOverflow />,
  codewar: <FaCodepen />,
  freecodecamp: <FaFreeCodeCamp />,
};

const ProfileData: React.FC = () => {
  const [getLinks, setGetLinks] = useState<GetLinksProp[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const fetchCurrentUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error.message);
      return;
    }

    if (user) {
      const userId = user.id; // Get the authenticated user's UID
      setUserId(userId); // Store the user ID if needed
      await handleFetchLink(userId); // Fetch links for this user
      await handleGetUserProfile(userId); // Fetch user profile
    }
  };

  const handleFetchLink = async (userId: string) => {
    const { data, error } = await supabase
      .from("userLink")
      .select("*")
      .eq("user_id", userId); // Ensure we're fetching data for the authenticated user

    if (error) {
      console.error("Error fetching links:", error.message);
    } else {
      setGetLinks(data || []); // Update state with fetched links
    }
  };

  const handleGetUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId); // Filter by user id

    if (error) {
      console.error("Error fetching user profile:", error.message);
    } else {
      setUserProfile(data?.length > 0 ? data[0] : null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  });

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return "bg-github";
      case "frontendmentor":
        return "bg-facebook";
      case "twitter":
        return "bg-twitter";
      case "linkedin":
        return "bg-linkedin";
      case "devto":
        return "bg-DarkGrey";
      case "youtube":
        return "bg-youtube";
      case "facebook":
        return "bg-facebook";
      case "twitch":
        return "bg-twitch";
      case "codewar":
        return "bg-codewar";
      case "freecodecamp":
        return "bg-freecodecamp";
      case "gitlab":
        return "bg-gitlab";
      case "hashnode":
        return "bg-hashnode";
      case "stackoverflow":
        return "bg-stackoverflow";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className=" pb-4 shadow-2xl rounded-md overflow-y-auto scrollbar-hide">
      {userProfile ? (
        <div className="flex flex-col gap-1 mb-6 pt-16">
          <div className="bg-midGray rounded-full w-[96px] h-[96px] mx-auto border-2 border-purple">
            <Image
              src={userProfile.profile_image}
              alt={`${userProfile.first_name} ${userProfile.last_name}`}
              width={96}
              height={96}
              className="rounded-full "
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
                <div className="flex items-center gap-1">
                  <div className="bg-white rounder-full  w-6 h-6 flex items-center justify-center">
                    {platformIcons[link.platform.toLowerCase()]}
                  </div>
                  <h2 className="text-white">{link.platform}</h2>
                </div>
                <Link href={link.link}>
                  <FaArrowRight className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-4">
            <div className="bg-midGray w-full h-[44px] rounded-md"></div>
            <div className="bg-midGray w-full h-[44px] rounded-md"></div>
            <div className="bg-midGray w-full h-[44px] rounded-md"></div>
            <div className="bg-midGray w-full h-[44px] rounded-md"></div>
            <div className="bg-midGray w-full h-[44px] rounded-md"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
