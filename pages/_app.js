import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import Layout from '../components/layouts/main'

function Website({ Component, pageProps, router }) {

  return (
    
    <ChakraProvider >
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
     </Layout>

    </ChakraProvider>
  );
}

export default Website;
