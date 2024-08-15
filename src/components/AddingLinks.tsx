"use client";

import { supabase } from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import SelectSection from "./SelectSection";
import { Button } from "@chakra-ui/react";

interface AddingLinksProps {
  index: number;
  handleRemove: (index: number) => void;
}

const AddingLinks: React.FC<AddingLinksProps> = ({ index, handleRemove }) => {
  const [linkInput, setLinkInput] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve values from localStorage when the component mounts
    const storedLink = localStorage.getItem(`linkInput-${index}`);
    const storedOption = localStorage.getItem(`selectedOption-${index}`);

    if (storedLink) {
      setLinkInput(storedLink);
    }
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, [index]);

  useEffect(() => {
    // Save values to localStorage whenever they change
    localStorage.setItem(`linkInput-${index}`, linkInput);
    localStorage.setItem(`selectedOption-${index}`, selectedOption);
  }, [linkInput, selectedOption, index]);

  useEffect(() => {
    // Fetch the authenticated user's ID
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUserId(user?.id || null);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      alert("User is not authenticated.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("userLink") // from supabase table
        .insert([
          { link: linkInput, platform: selectedOption, user_id: userId },
        ]); // Include user_id

      if (error) {
        throw new Error(error.message);
      }

      alert("Link posted successfully!");
      // Optionally clear inputs after submission
      // setLinkInput("");
      // setSelectedOption("");
    } catch (error) {
      console.error("Error posting link:", error);
      alert("Failed to post link");
    }
  };

  return (
    <>
      <div className="mt-4 w-full">
        <div className="flex items-center justify-between mb-3">
          <p className="font-bold text-[1rem] text-gray">Link {index + 1}</p>
          <p
            className="font-normal text-[1rem] text-gray cursor-pointer"
            onClick={() => handleRemove(index)}
          >
            Remove
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="m-[0_0_0.8rem_0] flex flex-col w-full box-sizing-border gap-4">
            <div>
              <p className="mb-[0.3rem] font-normal text-[0.8rem] text-darkGray">
                Platform
              </p>
              <SelectSection
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
            <div>
              <p className="m-[0_0_0.3rem_0] font-normal text-[0.8rem] text-darkGray">
                Link
              </p>
              <input
                type="url"
                className="rounded-[0.5rem] border border-[0.1rem_solid] border-gray2 bg-white h-[46px] w-full text-darkGrey p-2"
                placeholder="https://www.github.com/elonmusk"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
        {/* <div className="flex items-right justify-end mt-[5rem] ">
          <Button variant="solid" onClick={handleSubmit}>
            Save
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default AddingLinks;
