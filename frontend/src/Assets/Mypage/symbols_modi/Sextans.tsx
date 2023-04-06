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

function Sextans() {
  return (
    <div className="container">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 700 700">
        <defs>
          <clipPath id="z">
            <path d="M70 0h559.99v559.99H70z" />
          </clipPath>
        </defs>
        <g fill="none" stroke="#0492b1" strokeMiterlimit="10" strokeWidth="41.791" clipPath="url(#z)">
          <motion.path
            fill="#0492b1"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            transform="matrix(.69652 0 0 -.69652 70 560)"
            d="m141.41 211.22 260.59 451.37 260.58-451.37"
          />

          <motion.path
            fill="#0492b1"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            transform="matrix(.69652 0 0 -.69652 70 560)"
            d="m401.99 662.59v-521.17"
          />

          <motion.path
            fill="#0492b1"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            transform="matrix(.69652 0 0 -.69652 70 560)"
            d="m66.991 263.34c93.871-78.751 212.5-121.91 335-121.91 122.53 0 241.13 43.161 335 121.91"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Sextans;
