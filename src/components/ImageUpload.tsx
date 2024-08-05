"use client";

// import React, { useRef, useState } from "react";
// import vector from "../assest/imgvector.svg";
// import Image from "next/image";

// // interface ImageUploadProps {
// //   setSelectedImage: (url: string) => void;
// //   selectedImage: string | null;
// // }
// interface ImageUploadProps {
//   selectedImage: File | null;
//   setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
// }
// const ImageUpload: React.FC<ImageUploadProps> = ({
//   selectedImage,
//   setSelectedImage,
// }) => {
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const handleClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };
//   const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };
//   return (
//     <div className="flex flex-row">
//       <div
//         className="rounded-[0.8rem]e m-[0_1.5rem_0_0] flex flex-col justify-center items-center w-[12.1rem] cursor-pointer"
//         onClick={handleClick}
//         style={{
//           background: selectedImage ? `url(${selectedImage})` : "#EFEBFF",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "10rem",
//         }}
//       >
//         <div className="m-[0_0_0.9rem_0rem] flex w-[2.5rem] h-[2.5rem] box-sizing-border">
//           <Image src={vector} alt="imgvector" className="w-[2rem] h-[1.7rem]" />
//         </div>
//         <p className="font-semibold text-[1rem]  text-purple">+ Upload Image</p>
//         <input
//           type="file"
//           ref={fileInputRef}
//           className="hidden"
//           onChange={handleChangeFile}
//         />
//       </div>
//       <p className="my-[4.9rem]  w-[215px] font-normal  text-[0.8rem]  text-gray">
//         Image must be below 1024x1024px. Use PNG or JPG format.
//       </p>
//     </div>
//   );
// };

// export default ImageUpload;
import React, { useRef, useState } from "react";
import vector from "../assest/imgvector.svg";
import Image from "next/image";

interface ImageUploadProps {
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedImage,
  setSelectedImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
    }
  };

  return (
    <div className="flex flex-row">
      <div
        className="rounded-[0.8rem]e m-[0_1.5rem_0_0] flex flex-col justify-center items-center w-[12.1rem] cursor-pointer"
        onClick={handleClick}
        style={{
          background: imageUrl ? `url(${imageUrl})` : "#EFEBFF",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "10rem",
        }}
      >
        <div className="m-[0_0_0.9rem_0rem] flex w-[2.5rem] h-[2.5rem] box-sizing-border">
          <Image src={vector} alt="imgvector" className="w-[2rem] h-[1.7rem]" />
        </div>
        <p className="font-semibold text-[1rem] text-purple">+ Upload Image</p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleChangeFile}
        />
      </div>
      <p className="my-[4.9rem] w-[215px] font-normal text-[0.8rem] text-gray">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default ImageUpload;
