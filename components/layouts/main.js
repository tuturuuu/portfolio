import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Pham Minh Viet - Homepage</title>
        </Head>
  
        <Navbar />
  
        <Container maxW="" pt={14}>
  
          {children}
  
        </Container>
      </Box>
    )
  }
  
  export default Main