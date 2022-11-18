"use client"

import { motion } from 'framer-motion';

interface Props {
  letter: string;
}

function BounceLetter({ letter }: Props) {
  return (
    <motion.span
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.8 }}
    >
      {letter === ' ' ? <div>&nbsp;</div> : letter}
    </motion.span>
  );
}

export default BounceLetter;
