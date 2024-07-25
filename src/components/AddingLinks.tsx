import { Select } from "@chakra-ui/react";
import React from "react";

interface AddingLinksProps {
  index: number;
  handleRemove: (index: number) => void;
}

const AddingLinks: React.FC<AddingLinksProps> = ({ index, handleRemove }) => {
  return (
    <div className="mt-4 w-full ">
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-[1rem] text-gray">= Link #1</p>

        <p
          className=" font-normal  text-[1rem]  text-gray"
          onClick={() => handleRemove(index)}
        >
          Remove
        </p>
      </div>

      <div className="m-[0_0_0.8rem_0] flex flex-col w-full box-sizing-border gap-4">
        <div>
          <p className="mb-[0.3rem] font-normal text-[0.8rem]  text-darkGray">
            Platform
          </p>

          <Select
            placeholder="Select option"
            className="rounded-[0.5rem] border-[0.1rem_solid] border-gray2 bg-white h-[76px] w-full"
            variant="outline"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div>
          <p className="m-[0_0_0.3rem_0]  font-normal text-[0.8rem]  text-darkGray">
            Link
          </p>
          <input
            type="url"
            className="rounded-[0.5rem]  border border-[0.1rem_solid] border-gray2 bg-white h-[46px] w-full text-darkGrey p-2"
            name=""
            id=""
            placeholder="https://www.github.com/elonmusk"
          />
        </div>
      </div>
    </div>
  );
};

export default AddingLinks;
