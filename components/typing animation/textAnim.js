import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
export default function TextAnim() {
  const baseText = "Hello,_$yourName  ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    animate(count, baseText.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
    });
  });

  return (
    <span className="">
      <Heading
        mt="10rem"
        as="h1"
        size="2xl"
        color={useColorModeValue("darkerBlue", "lightBlue")}
      >
        <motion.span>{displayText}</motion.span>
      </Heading>
    </span>
  );
}
