// theme.ts
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#633CFF",
      100: "#BEADFF",
      200: "#D9D9D9",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "primary.50",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
          _active: {
            bg: "primary.100",
          },
          _disabled: {
            bg: "primary.200",
            cursor: "not-allowed",
          },
        },
        outline: {
          border: "1px solid",
          borderColor: "primary.50",
          color: "primary.50",
          _hover: {
            bg: "primary.100",
          },
          _active: {
            bg: "primary.100",
            borderColor: "primary.50",
          },
          _disabled: {
            bg: "transparent",
            borderColor: "primary.200",
            color: "primary.200",
            cursor: "not-allowed",
          },
        },
        ghost: {
          color: "primary.50",
          _hover: {
            bg: "primary.50",
          },
          _active: {
            bg: "primary.100",
          },
          _disabled: {
            color: "primary.100",
            cursor: "not-allowed",
          },
        },
        link: {
          color: "primary.50",
          _hover: {
            textDecoration: "none",
          },
          _active: {
            color: "primary.100",
          },
          _disabled: {
            color: "primary.200",
            cursor: "not-allowed",
          },
        },
      },
    },
  },
});

export default customTheme;
