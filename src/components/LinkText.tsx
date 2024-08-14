"use client";

import { Button } from "@chakra-ui/react";
import clickImg from "../assest/Group.png";
import Image from "next/image";
import { useState } from "react";
import AddingLinks from "./AddingLinks";

const LinkText = () => {
  const [addLinks, setAddLinks] = useState<number[]>([]);

  const handleAddLink = () => {
    setAddLinks([...addLinks, addLinks.length]);
  };

  const handleRemove = (index: number) => {
    setAddLinks(addLinks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <h1 className="mb-2 self-start font-bold text-2xl leading-tight text-darkGray">
        Customize your links
      </h1>
      <p className="font-normal text-base leading-relaxed text-gray pb-4">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="flex flex-col items-center w-full max-w-3xl">
        <Button
          className="w-full mb-4"
          variant="outline"
          onClick={handleAddLink}
        >
          + Add new link
        </Button>
        {addLinks.length === 0 ? (
          <div className=" md:py-16">
            <div className="rounded-xl bg-gray-100 flex flex-col items-center w-full">
              <Image
                src={clickImg}
                alt="click-vector"
                className="mb-10 w-40 h-40"
              />
              <div className="flex flex-col items-center md:w-[70%] mx-auto">
                <h2 className="mb-6 inline-block break-words font-sans font-bold text-2xl leading-tight text-gray-800">
                  Let&apos;s get you started
                </h2>
                <p className="text-center break-words font-sans font-normal text-base leading-relaxed text-gray">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We&apos;re
                  here to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
        ) : (
          addLinks.map((_, index) => (
            <AddingLinks
              key={index}
              index={index}
              handleRemove={handleRemove}
            />
          ))
        )}
        {/* <div className="flex items-right justify-end mt-[4rem]">
          <Button variant="solid" type="submit">
            Save
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default LinkText;
