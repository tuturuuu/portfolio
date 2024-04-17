import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/roboto-mono";
import "@fontsource/roboto";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#E8E1E8", "#1C1C24")(props),
    },
  }),
};

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
};

const components = {
  Heading: {
    variants: {
      "section-title": (props) => ({
        marginTop: 3,
        marginBottom: 4,
        color: mode("darkBlue", "lightBlue")(props),
      }),
    },
  },

  Text: {
    baseStyle: (props) => ({
      fontSize: "lg",
      color: mode("#253758", "white")(props),
    }),
  },

  Link: {
    baseStyle: (props) => ({
      fontSize: "lg",
      color: mode("#253758", "white")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  lightPink: "#E1BFD1",
  darkPink: "#b88c8c",
  darkBrown: "#9b7960",
  veriLightBrown: "#FFFAF5",
  darkBlueBlack: "#363844",
  lightBrown: "#cbb19b",
  darkBlue: "#5C7DBA",
  darkerBlue: "#253758",
  normalBlue: "#8584A1",
  darkPurple: "#615086",
  lightBlue: "#9AB2E7",
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  components,
});

export default theme;
