"use client";

import { supabase } from "@/utils/supabase/client";
import { Button, Select } from "@chakra-ui/react";
import React, { useState } from "react";

interface AddingLinksProps {
  index: number;
  handleRemove: (index: number) => void;
}

const AddingLinks: React.FC<AddingLinksProps> = ({ index, handleRemove }) => {
  const [linkInput, setLinkInput] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("userLink") // Replace 'links' with your actual table name
        .insert([{ link: linkInput, platform: selectedOption }]);

      if (error) {
        throw new Error(error.message);
      }

      alert("Link posted successfully!");
      setLinkInput("");
      setSelectedOption("");
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

              <Select
                placeholder="Select option"
                className="rounded-[0.5rem] border-[0.1rem_solid] border-gray2 bg-white h-[76px] w-full"
                variant="outline"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
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
          <div className="flex items-right justify-end mt-[5rem] ">
            <Button variant="solid" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddingLinks;
