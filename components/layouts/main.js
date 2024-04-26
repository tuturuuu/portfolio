import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Banner from "../banner"

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pham Minh Viet - Homepage</title>
      </Head>

      <Navbar />
      <Banner />

      <Container maxW="70%" pt={14} mt={10}>
      

        {children}
      </Container>
    </Box>
  );
};

export default Main;
