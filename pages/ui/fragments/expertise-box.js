import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
export default function Expertise({
  header,
  text,
  subheader,
  icon,
  underlineColor,
}) {
  return (
    <Box
      w={{ xl: "33%" }}
      variant="expertise-box"
      borderStyle="solid"
      borderColor={useColorModeValue("black", "white")}
      borderWidth="1.5px"
    >
      <Flex mt="20px" mb="20px">
        {icon}
        <Box>
          <Heading
            size="md"
            align="left"
            paddingTop={2}
            fontWeight="900"
            textUnderlineOffset="3px"
            textDecor="underline"
            textDecorationColor={underlineColor}
            textDecorationThickness="5px"
            color={useColorModeValue("darkerBlue", "white")}
          >
            {header}{" "}
          </Heading>
          <Heading
            size="md"
            align="left"
            paddingTop={2}
            color={useColorModeValue("darkerBlue", "white")}
          >
            {subheader}{" "}
          </Heading>
        </Box>
      </Flex>
      <Text margin={2} fontSize="md">
        &lt;Text&gt;
      </Text>

      <Text ml="3rem" mr="5px" fontSize="lg" fontWeight="lighter">
        {text}
      </Text>

      <Text margin={2} fontSize="md">
        &lt;/Text&gt;
      </Text>
    </Box>
  );
}
