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
import twitterIcon from "../assest/twitter.svg";
import linkedinIcon from "../assest/linkedin.svg";
import youtubeIcon from "../assest/youtube.svg";
import facebookIcon from "../assest/bi_facebook.svg";
import twitchIcon from "../assest/twitch.svg";
import devtoIcon from "../assest/devto-dark.svg";
import codewarIcon from "../assest/codewar.svg";
import freecodecampIcon from "../assest/freecodecamp.svg";
import gitlabIcon from "../assest/gitlab-fill.svg";
import hashnodeIcon from "../assest/hashnode.svg";
import stackoverflowIcon from "../assest/stackoverflow.svg";
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
  {
    id: 4,
    optName: "Linkedin",
    optIcon: linkedinIcon,
  },
  {
    id: 5,
    optName: "Youtube",
    optIcon: youtubeIcon,
  },

  {
    id: 6,
    optName: "Facebook",
    optIcon: facebookIcon,
  },
  {
    id: 7,
    optName: "Twitch",
    optIcon: twitchIcon,
  },
  {
    id: 8,
    optName: " Dev.to",
    optIcon: devtoIcon,
  },
  {
    id: 9,
    optName: "Codewars",
    optIcon: codewarIcon,
  },
  {
    id: 10,
    optName: "Freecodecamp",
    optIcon: freecodecampIcon,
  },
  {
    id: 11,
    optName: "Gitlab",
    optIcon: gitlabIcon,
  },
  {
    id: 12,
    optName: "Hashnode",
    optIcon: hashnodeIcon,
  },
  {
    id: 13,
    optName: "Stack Overflow",
    optIcon: stackoverflowIcon,
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
              height={14}
              width={14}
            />
            <span className="text-sm">{selectedOptionObject.optName}</span>
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
              height={18}
              width={18}
            />
            <span>{opts.optName}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectSection;
