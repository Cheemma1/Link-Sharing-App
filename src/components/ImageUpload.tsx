// "use client";

// import React, { useRef, useState } from "react";
// import vector from "../assest/imgvector.svg";
// import vectorwhite from "../assest/Vectorwhite.png";
// import Image from "next/image";

// interface ImageUploadProps {
//   selectedImage: File | null;
//   setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
//   imageUrl: React.Dispatch<React.SetStateAction<File | null>>;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   selectedImage,
//   setSelectedImage,
// }) => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const handleClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       const url = URL.createObjectURL(file);
//       setImageUrl(url);
//     }
//   };

//   return (
//     <div className="flex flex-row">
//       <div
//         className="rounded-[0.8rem] m-[0_1.5rem_0_0] flex flex-col justify-center items-center w-[12.1rem] cursor-pointer"
//         onClick={handleClick}
//         style={{
//           backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
//           backgroundColor: "#EFEBFF",
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "10rem",
//           width: "100%",
//         }}
//       >
//         {!imageUrl ? (
//           <>
//             <div className="m-[0_0_0.9rem_0rem] flex w-[2.5rem] h-[2.5rem] box-sizing-border">
//               <Image
//                 src={vector}
//                 alt="imgvector"
//                 className="w-[2rem] h-[1.7rem]"
//               />
//             </div>
//             <p className="font-semibold text-[1rem] text-purple">
//               + Upload Image
//             </p>
//           </>
//         ) : (
//           <>
//             <div className="m-[0_0_0.9rem_0rem] flex w-[2.5rem] h-[2.5rem] box-sizing-border">
//               <Image
//                 src={vectorwhite}
//                 alt="imgvector"
//                 className="w-[2rem] h-[1.7rem]"
//               />
//             </div>
//             <p className="font-semibold text-[1rem] text-white">
//               + change Image
//             </p>
//           </>
//         )}
//         <input
//           type="file"
//           ref={fileInputRef}
//           className="hidden"
//           onChange={handleChangeFile}
//         />
//       </div>
//       <p className="my-[4.9rem] w-[215px] font-normal text-[0.8rem] text-gray">
//         Image must be below 1024x1024px. Use PNG or JPG format.
//       </p>
//     </div>
//   );
// };

// export default ImageUpload;

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import vector from "../assest/imgvector.svg";
import vectorwhite from "../assest/Vectorwhite.png";

interface ImageUploadProps {
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
  imageUrl: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedImage,
  setSelectedImage,
  imageUrl,
}) => {
  const [localImageUrl, setLocalImageUrl] = useState<string | null>(imageUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setLocalImageUrl(url);
    }
  };

  return (
    <div className="flex flex-row">
      <div
        className="relative rounded-[0.8rem] m-[0_1.5rem_0_0] flex justify-center items-center w-[12.1rem] cursor-pointer"
        onClick={handleClick}
        style={{
          backgroundColor: "#EFEBFF",
          height: "10rem",
          width: "100%",
        }}
      >
        {localImageUrl ? (
          <>
            <Image
              src={localImageUrl}
              alt="Uploaded Image"
              layout="fill"
              objectFit="contain"
              className="rounded-[0.8rem]"
              priority={true} // Add priority to preload the image
            />
            <div className="absolute top-4 left-4 flex w-[2.5rem] h-[2.5rem] box-sizing-border">
              <Image
                src={vectorwhite}
                alt="Change Image Icon"
                className="w-[2rem] h-[1.7rem]"
              />
            </div>
            <p className="absolute bottom-4 left-4 font-semibold text-[1rem] text-white">
              + Change Image
            </p>
          </>
        ) : (
          <>
            <div className="flex w-[2.5rem] h-[2.5rem] box-sizing-border">
              <Image
                src={vector}
                alt="Upload Image Icon"
                className="w-[2rem] h-[1.7rem]"
              />
            </div>
            <p className="font-semibold text-[1rem] text-purple">
              + Upload Image
            </p>
          </>
        )}
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
