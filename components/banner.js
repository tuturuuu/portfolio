import { Box, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import TextAnim from "./typing animation/textAnim";
import RedoAnimText from "./typing animation/redoAnimText";
const Banner = () => (
  <Box align="center" mt='13rem' mb='4rem'>
    <TextAnim />
    <Box height={3} mt={4} mb={6}>
      <RedoAnimText />
    </Box>

    <Button
      mt={6}
      p={5}
      fontWeight="bold"
      fontSize="xl"
      bg={useColorModeValue("darkPurple", "lightBlue")}
      borderStyle="solid"
      borderWidth="2px"
      borderRadius="1px"
      borderColor="darkPurple"
      color={useColorModeValue("white", "black")}
      _hover={{
        bg: useColorModeValue("transparent", "darkBlue"),
        color: useColorModeValue("darkBlueBlack", "white"),
      }}
    >
      Contact me !
    </Button>
  </Box>
);

export default Banner;
