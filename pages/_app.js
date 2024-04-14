import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import Navbar from "./ui/fragments/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
