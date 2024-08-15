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

//         const { data, error } = await supabase
//           .from("profiles")
//           .select("*")
//           .eq("user_id", user.id)
//           .single();

//         if (error) {
//           console.error("Error fetching profile data:", error);
//         } else if (data) {
//           setProfileData(data);
//           setFirstName(data.first_name || "");
//           setLastName(data.last_name || "");
//           setImageUrl(data.profile_image || null);
//         } else {
//           console.error("No profile found for this user");
//         }
//       }
//     };
//     getUserProfile();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       let newImageUrl = imageUrl || "";

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

//       const {
//         data: { user },
//         error: userError,
//       } = await supabase.auth.getUser();

//       if (userError) {
//         throw userError;
//       }

//       const profilePayload = {
//         user_id: user!.id,
//         first_name: firstName,
//         last_name: lastName,
//         profile_image: newImageUrl,
//         email,
//       };

//       if (profileData) {
//         // Profile exists, so update it
//         const { error: updateError } = await supabase
//           .from("profiles")
//           .update(profilePayload)
//           .eq("user_id", user!.id);

//         if (updateError) {
//           throw updateError;
//         }

//         alert("Profile updated successfully!");
//       } else {
//         // Profile doesn't exist, so upsert it
//         const { error: upsertError } = await supabase
//           .from("profiles")
//           .upsert(profilePayload);

//         if (upsertError) {
//           throw upsertError;
//         }

//         alert("Profile created successfully!");
//       }
//     } catch (error) {
//       console.error("Error saving profile:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-md w-full mx-auto  ">
//       <h1 className="m-[0_0_0.5rem_0] font-bold text-[2rem] text-darkGrey ">
//         Profile Details
//       </h1>
//       <p className="font-normal text-[1rem] text-gray mb-8 md:mb-0">
//         Add your details to create a personal touch to your profile.
//       </p>

//       <div className="rounded-[0.8rem] bg-lightGrey mb-[1.5rem] flex flex-col md:flex-row md:items-center justify-between p-2 md:p-[1.3rem] box-sizing-border">
//         <h2 className="font-normal text-[1rem] text-gray py-2 md:py-0">
//           Profile picture
//         </h2>
//         <ImageUpload
//           selectedImage={selectedImage}
//           setSelectedImage={setSelectedImage}
//           imageUrl={imageUrl}
//         />
//       </div>

//       <form
//         className="rounded-[0.8rem] bg-lightGrey flex flex-col items-center p-2  md:p-[1.3rem] w-full  mx-auto xl:w-[45.5rem] box-sizing-border"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-[0.8rem] flex flex-col md:flex-row justify-between w-full lg:w-[43rem] box-sizing-border">
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

//         <div className="m-[0_0_0.8rem_0] flex flex-col md:flex-row justify-between w-full  lg:w-[43rem] box-sizing-border">
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

//         <div className="flex flex-col md:flex-row justify-between w-full lg:w-[43rem] box-sizing-border">
//           <h3 className="m-[0.8rem_0.8rem_0.8rem_0] w-[15rem] font-normal text-[1rem] text-gray">
//             Email*
//           </h3>
//           <input
//             className="rounded-[0.5rem] border-[0.1rem] border-gray2 bg-white h-[48px] px-2 w-full xl:w-[27rem]"
//             value={email}
//             readOnly
//           />
//         </div>

//         <div className="flex items-right justify-right mt-10 md:mt-8">
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
    <div className="bg-white p-4 rounded-md w-full mx-auto">
      <h1 className="mb-4 font-bold text-2xl text-darkGrey">Profile Details</h1>
      <p className="font-normal text-base text-gray mb-8">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="rounded-lg bg-lightGrey mb-6 flex flex-col md:flex-row md:items-center justify-between p-4 ">
        <h2 className="font-normal text-base text-gray mb-4 md:mb-0">
          Profile picture
        </h2>
        <ImageUpload
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          imageUrl={imageUrl}
        />
      </div>

      <form
        className="rounded-lg bg-lightGrey flex flex-col items-center p-4 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-6 flex flex-col md:flex-row justify-between w-full box-border">
          <h3 className="mb-2 md:mb-0 w-full md:w-1/3 text-base text-gray">
            First name*
          </h3>
          <input
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 w-full md:w-2/3"
            placeholder="e.g. John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6 flex flex-col md:flex-row justify-between w-full box-border">
          <h3 className="mb-2 md:mb-0 w-full md:w-1/3 text-base text-gray">
            Last name*
          </h3>
          <input
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 w-full md:w-2/3"
            placeholder="e.g. Appleseed"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full box-border">
          <h3 className="mb-2 md:mb-0 w-full md:w-1/3 text-base text-gray">
            Email*
          </h3>
          <input
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 w-full md:w-2/3"
            value={email}
            readOnly
          />
        </div>

        <div className="flex justify-end mt-6 w-full">
          <Button type="submit" variant="solid">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
