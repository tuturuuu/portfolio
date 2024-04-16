import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { chakra } from "@chakra-ui/react";

const MotionHeader = chakra(motion.h1);

export default function CountUp() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) => Math.round(val * 10) / 10);

  useEffect(() => {
    const animation = animate(count, 7.5, { duration: 2 });

    return animation.stop;
  }, []);

  return <MotionHeader fontSize="6rem">{rounded}</MotionHeader>;
}
