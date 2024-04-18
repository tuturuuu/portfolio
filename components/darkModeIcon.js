import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export function ToggleIcon({ onClick, display, boxSize }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div style={{display: 'inline-block'}} key={useColorModeValue('light', 'dark')} initial={{y:-20, opacity: 0}} animate={{y:0, opacity:1}} exit={{y:20, opacity:0}} transition={{duration: 0.2}}>
      <IconButton
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        as="button" 
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
        _hover={{bg: useColorModeValue("lightBlue", "darkBrown"), color: useColorModeValue("darkerBlue", "veriLightBrown")}}
      />
      </motion.div>
    </AnimatePresence>
  );
}
