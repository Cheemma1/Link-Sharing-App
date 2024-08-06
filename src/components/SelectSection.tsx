import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import githubIcon from "@/assest/teenyicons_github-solid.svg";
import frontendmentoricon from "@/assest/frontendmemtor-icon.png";
import twitterIcon from "../assest/twitter-icon.png";
import Image from "next/image";

interface SelectSectionProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

const options = [
  {
    id: 1,
    optName: "Github",
    optIcon: githubIcon,
  },
  {
    id: 2,
    optName: "FrontendMentor",
    optIcon: frontendmentoricon,
  },
  {
    id: 3,
    optName: "Twitter",
    optIcon: twitterIcon,
  },
];

const SelectSection: React.FC<SelectSectionProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const selectedOptionObject = options.find(
    (opt) => opt.optName === selectedOption
  );

  return (
    <Menu matchWidth>
      <MenuButton
        as={Button}
        variant="outline"
        className="rounded-[0.5rem] border-[0.1rem_solid] border-gray2 bg-white h-[76px] w-full text-left"
      >
        {selectedOptionObject ? (
          <Box display="flex" alignItems="center" gap="2">
            <Image
              src={selectedOptionObject.optIcon}
              alt={selectedOptionObject.optName}
              height={24}
              width={24}
            />
            <span>{selectedOptionObject.optName}</span>
          </Box>
        ) : (
          "Select option"
        )}
      </MenuButton>
      <MenuList className="rounded-md shadow-lg w-full">
        {options.map((opts) => (
          <MenuItem
            key={opts.id}
            onClick={() => setSelectedOption(opts.optName)}
            className="flex items-center gap-2 w-full"
            width="100%"
          >
            <Image
              src={opts.optIcon}
              alt={opts.optName}
              height={24}
              width={24}
            />
            <span>{opts.optName}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectSection;
