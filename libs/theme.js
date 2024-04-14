import {
  background,
  border,
  extendTheme,
  textDecoration,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFFAF5", "#363844")(props),
    },
  }),
};

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        marginTop: 3,
        marginBottom: 4,
        color: "#363844",
      },
    },
  },

  Text: {
    baseStyle: (props) => ({
      fontSize: "lg",
    }),
  },

  Link: {
    baseStyle: (props) => ({
      color: mode("#363844", "white")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  darkPink: "#b88c8c",
  darkBrown: "#9b7960",
  veriLightBrown: "#FFFAF5",
  darkBlueBlack: "#363844",
  lightBrown: "#cbb19b",
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  components,
});

export default theme;
