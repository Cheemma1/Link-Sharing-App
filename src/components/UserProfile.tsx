// "use client";

// import { Button } from "@chakra-ui/react";
// import React, { useState, useEffect } from "react";
// import ImageUpload from "./ImageUpload";
// import { supabase } from "@/utils/supabase/client";

// const UserProfile: React.FC = () => {
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [profileData, setProfileData] = useState<any>(null);

//   useEffect(() => {
//     const getUserProfile = async () => {
//       const {
//         data: { user },
//         error: authError,
//       } = await supabase.auth.getUser();

//       if (authError) {
//         console.error("Error getting user:", authError);
//         return;
//       }

//       if (user) {
//         setEmail(user.email || "");

//         // Fetch the profile data using the user's ID
//         const { data, error } = await supabase
//           .from("profiles")
//           .select("*")
//           .eq("user_id", user.id)
//           .single();

//         if (error) {
//           console.error("Error fetching profile data:", error);
//         } else {
//           setProfileData(data || null);
//           setFirstName(data?.first_name || "");
//           setLastName(data?.last_name || "");
//           setSelectedImage(data?.profile_image || "");
//           // if (data?.profile_image) {
//           //   const { data: publicUrlData, error: publicUrlError } = await supabase.storage
//           //     .from("profile-image")
//           //     .getPublicUrl(`profile-image/${data.profile_image}`);
//           //   if (publicUrlError) {
//           //     console.error("Error getting public URL:", publicUrlError);
//           //   } else {
//           //     setImageUrl(publicUrlData.publicUrl);
//           //   }
//           // } else {
//           //   setImageUrl(null);
//           // }
//         }
//       }
//     };
//     getUserProfile();
//   }, []);
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       let newImageUrl = imageUrl;
//       if (selectedImage) {
//         const fileExt = selectedImage.name.split(".").pop();
//         const fileName = `${Date.now()}.${fileExt}`;
//         const filePath = `profile-image/${fileName}`;

//         const { error: uploadError } = await supabase.storage
//           .from("profile-image")
//           .upload(filePath, selectedImage);

//         if (uploadError) {
//           throw uploadError;
//         }

//         const { data: publicUrlData } = supabase.storage
//           .from("profile-image")
//           .getPublicUrl(filePath);

//         newImageUrl = publicUrlData.publicUrl;
//       }

//       // Fetch the current user
//       const {
//         data: { user },
//         error: userError,
//       } = await supabase.auth.getUser();

//       if (userError) {
//         throw userError;
//       }

//       // Update or insert the profile data using the user's ID
//       const { error: upsertError } = await supabase.from("profiles").upsert({
//         user_id: profileData?.user_id || user!.id, // Use the fetched user ID
//         first_name: firstName,
//         last_name: lastName,
//         profile_image: imageUrl,
//         email,
//       });

//       if (upsertError) {
//         throw upsertError;
//       }

//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };
//   return (
//     <div className="bg-white p-4 rounded-md w-full">
//       <h1 className="m-[0_0_0.5rem_0] font-bold text-[2rem] text-darkGrey">
//         Profile Details
//       </h1>
//       <p className="font-normal text-[1rem] text-gray">
//         Add your details to create a personal touch to your profile.
//       </p>

//       <div className="rounded-[0.8rem] bg-lightGrey mb-[1.5rem] flex flex-row items-center justify-between p-[1.3rem] box-sizing-border">
//         <h2 className="font-normal text-[1rem] text-gray">Profile picture</h2>
//         <ImageUpload
//           selectedImage={selectedImage}
//           setSelectedImage={setSelectedImage}
//         />
//       </div>

//       <form
//         className="rounded-[0.8rem] bg-lightGrey flex flex-col items-center p-[1.3rem] w-full xl:w-[45.5rem] box-sizing-border"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-[0.8rem] flex flex-row justify-between w-[43rem] box-sizing-border">
//           <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
//             First name*
//           </h3>
//           <input
//             className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white px-2 h-[48px] w-full xl:w-[27rem]"
//             placeholder="e.g. John"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="m-[0_0_0.8rem_0] flex flex-row justify-between w-[43rem] box-sizing-border">
//           <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
//             Last name*
//           </h3>
//           <input
//             className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white px-2 h-[48px] w-full xl:w-[27rem]"
//             placeholder="e.g. Appleseed"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-row justify-between w-[43rem] box-sizing-border">
//           <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
//             Email*
//           </h3>
//           <input
//             className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white h-[48px] px-2 w-full xl:w-[27rem]"
//             value={email}
//             readOnly
//           />
//         </div>

//         <div className="flex items-right justify-end mt-4">
//           <Button type="submit" variant="solid">
//             Save
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserProfile;
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
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        console.error("Error getting user:", authError);
        return;
      }

      if (user) {
        setEmail(user.email || "");

        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile data:", error);
        } else if (data) {
          setProfileData(data);
          setFirstName(data.first_name || "");
          setLastName(data.last_name || "");
          setImageUrl(data.profile_image || null);
        } else {
          console.error("No profile found for this user");
        }
      }
    };
    getUserProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let newImageUrl = imageUrl || "";

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

        newImageUrl = publicUrlData.publicUrl;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      const profilePayload = {
        user_id: user!.id,
        first_name: firstName,
        last_name: lastName,
        profile_image: newImageUrl,
        email,
      };

      if (profileData) {
        // Profile exists, so update it
        const { error: updateError } = await supabase
          .from("profiles")
          .update(profilePayload)
          .eq("user_id", user!.id);

        if (updateError) {
          throw updateError;
        }

        alert("Profile updated successfully!");
      } else {
        // Profile doesn't exist, so upsert it
        const { error: upsertError } = await supabase
          .from("profiles")
          .upsert(profilePayload);

        if (upsertError) {
          throw upsertError;
        }

        alert("Profile created successfully!");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
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
          imageUrl={imageUrl}
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
            required
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
            required
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
