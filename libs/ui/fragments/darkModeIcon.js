import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

export function ToggleIcon({ onClick, display, boxSize }) {
  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      as="button" // Use lowercase "button" for consistency
      mr={3}
      boxSize={boxSize}
      p={2}
      borderRadius={8}
      borderWidth={1}
      borderColor="#707280"
      onClick={onClick}
      bg={useColorModeValue("darkPurple", "white")}
      color={useColorModeValue("veriLightBrown", "darkBrown")}
      display={display}
    />
  );
}
