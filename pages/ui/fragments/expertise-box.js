import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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
      borderColor="black"
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
          >
            {header}{" "}
          </Heading>
          <Heading size="md" align="left" paddingTop={2} fontWeight="900">
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
