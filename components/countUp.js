import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { chakra } from "@chakra-ui/react";

const MotionHeader = chakra(motion.h1);

export default function CountUp() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) => Math.round(val * 10) / 10);

  const animationRef = useRef(null); // Create a ref to store the animation

  useEffect(() => {
    animationRef.current = animate(count, 7.5, { duration: 2 }); // Assign the animation to the ref

    // Clean up function to stop the animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }); // Empty dependency array ensures the effect runs only once on mount

  return <MotionHeader fontSize="6rem">{rounded}</MotionHeader>;
}
