import { motion } from 'framer-motion';

interface Props {
  letter: string;
}

function BounceLetter({ letter }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.8 }}
    >
      {letter === ' ' ? <div>&nbsp;</div> : letter}
    </motion.div>
  );
}

export default BounceLetter;
