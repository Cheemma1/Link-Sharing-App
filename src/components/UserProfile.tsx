"use client";
import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import { supabase } from "@/utils/supabase/client";

const UserProfile: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email || "");
        // Fetch additional profile data if needed
      }
    };
    getUserProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (selectedImage) {
        const fileExt = selectedImage.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `profile-image/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("profile-image")
          .upload(filePath, selectedImage);

        if (uploadError) {
          throw uploadError;
        }

        const { data: publicUrlData } = supabase.storage
          .from("profile-image")
          .getPublicUrl(filePath);

        imageUrl = publicUrlData.publicUrl;
      }

      const { error: updateError } = await supabase.from("profiles").upsert({
        first_name: firstName,
        last_name: lastName,
        profile_image: imageUrl,
        email,
      });

      if (updateError) {
        throw updateError;
      }

      alert("Profile updated successfully!");
      // setFirstName("");
      // setLastName("");
      // setSelectedImage(null);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md w-full">
      <h1 className="m-[0_0_0.5rem_0] font-bold text-[2rem] text-darkGrey">
        Profile Details
      </h1>
      <p className="font-normal text-[1rem] text-gray">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="rounded-[0.8rem] bg-lightGrey mb-[1.5rem] flex flex-row items-center justify-between p-[1.3rem] box-sizing-border">
        <h2 className="font-normal text-[1rem] text-gray">Profile picture</h2>
        <ImageUpload
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <form
        className="rounded-[0.8rem] bg-lightGrey flex flex-col items-center p-[1.3rem] w-full xl:w-[45.5rem] box-sizing-border"
        onSubmit={handleSubmit}
      >
        <div className="mb-[0.8rem] flex flex-row justify-between w-[43rem] box-sizing-border">
          <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
            First name*
          </h3>
          <input
            className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white px-2 h-[48px] w-full xl:w-[27rem]"
            placeholder="e.g. John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="m-[0_0_0.8rem_0] flex flex-row justify-between w-[43rem] box-sizing-border">
          <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
            Last name*
          </h3>
          <input
            className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white px-2 h-[48px] w-full xl:w-[27rem]"
            placeholder="e.g. Appleseed"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-between w-[43rem] box-sizing-border">
          <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
            Email*
          </h3>
          <input
            className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white h-[48px] px-2 w-full xl:w-[27rem]"
            value={email}
            readOnly
          />
        </div>

        <div className="flex items-right justify-end mt-4">
          <Button type="submit" variant="solid">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
