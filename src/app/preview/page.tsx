"use client";

import ProfileData from "@/components/ProfileData";
import { Button, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PreviewPage = () => {
  const toast = useToast();
  const [shareableLink, setShareableLink] = useState("");

  const generateShareableLink = () => {
    // Generate a unique URL
    const uniqueId = uuidv4();
    const link = `${window.location.origin}/preview/profile/${uniqueId}`;
    setShareableLink(link);
    return link;
  };

  const handleCopyLink = async () => {
    const link = generateShareableLink();

    try {
      await navigator.clipboard.writeText(link);
      toast({
        title: "Link copied to clipboard!",
        description: "You can now paste the link anywhere to share it.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } catch (err) {
      toast({
        title: "Failed to copy link.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  // const handleShare = async () => {
  //   const link = generateShareableLink();

  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: "Profile Preview",
  //         text: "Check out this profile preview!",
  //         url: link,
  //       });
  //       toast({
  //         title: "Profile shared successfully!",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //         position: "bottom",
  //       });
  //     } catch (err) {
  //       toast({
  //         title: "Failed to share profile.",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //         position: "bottom",
  //       });
  //     }
  //   } else {
  //     // Fallback to copy the link
  //     try {
  //       await navigator.clipboard.writeText(link);
  //       toast({
  //         title: "Link copied to clipboard!",
  //         description: "You can now paste the link anywhere to share it.",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //         position: "bottom",
  //       });
  //     } catch (err) {
  //       toast({
  //         title: "Failed to copy link.",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //         position: "bottom",
  //       });
  //     }
  //   }
  // };

  return (
    <div className="pb-[22rem]">
      <div className="md:bg-purple h-[357px] rounded-t-none rounded-r-lg rounded-l-lg pt-0 md:pt-10">
        <div className="flex items-center justify-between sm:bg-none md:bg-white px-4 h-[60px] rounded-md md:w-[90%] mx-auto mb-4  md:mb-[8rem] ">
          <Link href="/user/profile">
            <Button variant="outline">Back to Editor</Button>
          </Link>
          <Button variant="solid" onClick={handleCopyLink}>
            Share Link
          </Button>
        </div>

        <div className="bg-white shadow-xl  w-[95%] md:w-[350px] mx-auto rounded-lg mb-[10rem] px-2 md:px-0">
          <ProfileData />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
