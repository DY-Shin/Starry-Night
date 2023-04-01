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

function Hydra() {
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
            d="m485.74 653.26c0 46.251-37.502 83.754-83.748 83.754-46.251 0-83.754-37.502-83.754-83.754 0-46.246 37.502-83.748 83.754-83.748 46.246 0 83.748 37.502 83.748 83.748z"
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
            d="m401.99 67.007c-38.871 38.865-60.704 91.6-60.704 146.56 0 54.961 21.833 107.7 60.704 146.57 38.865 38.865 60.698 91.6 60.698 146.56 0 54.961-21.833 107.7-60.698 146.56"
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
            d="m66.991 402.01c44.417 44.417 104.69 69.38 167.5 69.38s123.08-24.962 167.5-69.38c44.412-44.412 104.68-69.374 167.5-69.374s123.09 24.962 167.5 69.374"
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
            d="m66.991 234.51c44.417 44.412 104.69 69.374 167.5 69.374s123.08-24.962 167.5-69.374c44.412-44.417 104.68-69.374 167.5-69.374s123.09 24.957 167.5 69.374"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Hydra;
