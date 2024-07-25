// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/theme"; // Adjust the path as necessary

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
