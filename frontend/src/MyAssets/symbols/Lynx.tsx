import * as React from 'react';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 0)',
  },
};

function Lynx() {
  return (
    <div className="container">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 700 700">
        <defs>
          <clipPath id="z">
            <path d="M70 0h559.99v559.99H70z" />
          </clipPath>
        </defs>
        <g fill="none" stroke="#7BD6CD" strokeMiterlimit="10" strokeWidth="41.791" clipPath="url(#z)">
          <motion.path
            fill="currentColor"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            transform="matrix(.69652 0 0 -.69652 70 560)"
            d="m401.99 540.76v-277.54"
          />

          <motion.path
            fill="currentColor"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            transform="matrix(.69652 0 0 -.69652 70 560)"
            d="m736.99 402.01c-88.829 88.829-209.33 138.75-335 138.75-125.62 0-246.14-49.925-335-138.75 88.868-88.863 209.38-138.79 335-138.79 125.66 0 246.17 49.925 335 138.79z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Lynx;
