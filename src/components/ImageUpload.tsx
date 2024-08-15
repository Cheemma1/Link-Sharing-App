import React, { useRef } from "react";

import vector from "../assest/imgvector.svg";
import vectorwhite from "../assest/Vectorwhite.png";
import Image from "next/image";

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
    }
  };

  return (
    <div className="flex flex-col md:flex-row  ">
      <div
        className={`relative rounded-[0.8rem] m-[0_1.5rem_0_0] flex justify-center items-center lg:w-[12.1rem] cursor-pointer ${
          imageUrl ? "bg-transparent" : "bg-lightpurple"
        }`}
        onClick={handleClick}
        style={{
          height: "10rem",
          width: "100%",
        }}
      >
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt="Uploaded Image"
              className="rounded-[0.8rem] "
              priority={true}
              height={200}
              width={200}
            />
            <div className="absolute top-12 box-sizing-border flex items-center justify-center flex-col">
              <Image
                src={vectorwhite}
                alt="Change Image Icon"
                className=" mb-4"
                height={20}
                width={20}
              />
              <p className="font-semibold text-[1rem] text-white">
                + Change Image
              </p>{" "}
            </div>
          </>
        ) : (
          <>
            <div className="flex w-[2.5rem] h-[2.5rem] box-sizing-border ">
              <Image
                src={vector}
                alt="Upload Image Icon"
                height={20}
                width={20}
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
      <p className="  md:my-[4.9rem] w-full pt-10  lg:w-[215px] font-normal text-[0.8rem] text-gray">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default ImageUpload;
