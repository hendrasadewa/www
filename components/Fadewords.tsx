"use client"

import { motion, Variants } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  words: Array<string>;
  className?: string,
}

const variants: Variants = {
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 2,
    },
  },
  hide: {
    opacity: 0,
  },
};

function FadeWords({ words, className }: Props) {
  const [wordIndex, setWordIndex] = useState(0);

  const length = words.length;
  const currentWord = words[wordIndex];

  const handleIntervalChange = useCallback(() => {
    setWordIndex((prev) => (prev + 1 <= length - 1 ? prev + 1 : 0));
  }, [length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleIntervalChange();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [handleIntervalChange]);

  return (
    <motion.p
      key={wordIndex}
      variants={variants}
      initial="hide"
      animate="show"
      className={className}
    >
      {currentWord}
    </motion.p>
  );
}

export default FadeWords;
