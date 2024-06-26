"use client";

import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import Logo from "./logo";
import { Link } from "@chakra-ui/next-js";
import { ToggleIcon } from "./darkModeIcon";
import { useColorMode } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} variant="menuLink">
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      p={3}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It Works</MenuItem>
        <MenuItem to="/work">Works</MenuItem>
        <ToggleIcon
          onClick={toggleColorMode}
          display={{ md: "block", base: "none" }}
          boxSize={10}
        />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={{ md: "center", base: "space-between" }}
      wrap="wrap"
      w="100%"
      backgroundColor={useColorModeValue(
        "rgba(218, 206, 255, 0.8)",
        "rgba(0, 0, 0, 0.8)",
      )}
      backdropFilter="saturate(180%) blur(5px)"
      color={useColorModeValue("darkBlueBlack", "white")}
      position="fixed"
      top="0"
      zIndex="200"
    >
      {children}
    </Flex>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Box display={{ base: "block", md: "none" }} onClick={toggle} mr="1rem">
        <ToggleIcon
          onClick={(event) => {
            event.stopPropagation();
            toggleColorMode();
          }}
          boxSize={10}
        />
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <NavBarContainer>
      <Logo color={useColorModeValue("darkerBlue", "white")} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
