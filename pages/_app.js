import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import Navbar from "../components/navbar";
import Chakra from '../components/chakra'

function MyApp({ Component, pageProps }) {
  return (
      <Chakra cookies={pageProps.cookies}>
      <Navbar />
      <Component {...pageProps}/>
      </Chakra>
  );
}

export default MyApp;
