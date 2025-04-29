import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="page"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
