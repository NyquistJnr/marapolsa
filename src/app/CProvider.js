"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export function CProviders({ children }) {
  const theme = extendTheme({
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("#F6EFED", "#1A202C")(props),
        },
      }),
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
