"use client";

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

interface UserProfileProps {
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ email }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { firstName, lastName, selectedImage };
  };

  return (
    <div className="bg-white p-4 rounded-md w-full">
      <h1 className="m-[0_0_0.5rem_0]  font-bold text-[2rem] text-darkGrey">
        Pro Details
      </h1>
      <p className="font-normal text-[1rem] text-gray">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="rounded-[0.8rem] bg-lightGrey mb-[1.5rem] flex flex-row items-center  justify-between p-[1.3rem] box-sizing-border">
        <h2 className="font-normal text-[1rem] text-gray">Profile picture</h2>

        <ImageUpload
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <form className="rounded-[0.8rem] bg-lightGrey flex flex-col items-center p-[1.3rem] w-full xl:w-[45.5rem] box-sizing-border">
        <div className="mb-[0.8rem] flex flex-row justify-between w-[43rem] box-sizing-border">
          <h3 className="m-[0.8rem_0.8rem_0.8rem_0]  w-[15rem]  font-normal text-[1rem]  text-gray">
            First name*
          </h3>
          <input
            className="rounded-[0.5rem]  border-[0.1rem] border-gray2 bg-white px-2  h-[48px] w-full  xl:w-[27rem]"
            placeholder=" e.g. John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="m-[0_0_0.8rem_0] flex flex-row justify-between w-[43rem] box-sizing-border">
          <h3 className="m-[0.8rem_0.8rem_0.8rem_0]  w-[15rem]  font-normal text-[1rem]  text-gray">
            Last name*
          </h3>
          <input
            className="rounded-[0.5rem]  border-[0.1rem] border-gray2 bg-white px-2  h-[48px] w-full  xl:w-[27rem]"
            placeholder="  e.g. Appleseed"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-between w-[43rem] box-sizing-border">
          <h3 className="m-[0.8rem_0.8rem_0.8rem_0]  w-[15rem]  font-normal text-[1rem]  text-gray">
            Email*
          </h3>
          <input
            className="rounded-[0.5rem]  border-[0.1rem] border-gray2 bg-white h-[48px] px-2 w-full  xl:w-[27rem]"
            placeholder="e.g. email@example.com"
            value={email}
            readOnly
          />
        </div>
      </form>

      <div className="flex items-right justify-end mt-4">
        <Button type="submit" variant="solid">
          Save
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
