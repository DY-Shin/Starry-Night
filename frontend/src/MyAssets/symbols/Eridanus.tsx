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

function Eridanus() {
  return (
    <div className="container">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 700 700">
        <defs>
          <clipPath id="z">
            <path d="M70 0h559.99v559.99H70z" />
          </clipPath>
        </defs>
        <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="41.791" clipPath="url(#z)">
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
            d="m234.49 67.007c-22.186 22.186-34.687 52.342-34.687 83.748s12.501 61.528 34.687 83.754c22.226 22.186 34.687 52.342 34.687 83.748s-12.462 61.523-34.687 83.748c-22.186 22.192-34.687 52.347-34.687 83.754s12.501 61.523 34.687 83.748c22.226 22.186 34.687 52.342 34.687 83.748s-12.462 61.528-34.687 83.754"
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
            d="m401.99 67.007c-22.192 22.186-34.687 52.342-34.687 83.748s12.495 61.528 34.687 83.754c22.226 22.186 34.687 52.342 34.687 83.748s-12.462 61.523-34.687 83.748c-22.192 22.192-34.687 52.347-34.687 83.754s12.495 61.523 34.687 83.748c22.226 22.186 34.687 52.342 34.687 83.748s-12.462 61.528-34.687 83.754"
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
            d="m569.49 67.007c-22.186 22.186-34.687 52.342-34.687 83.748s12.501 61.528 34.687 83.754c22.226 22.186 34.687 52.342 34.687 83.748s-12.462 61.523-34.687 83.748c-22.186 22.192-34.687 52.347-34.687 83.754s12.501 61.523 34.687 83.748c22.226 22.186 34.687 52.342 34.687 83.748s-12.462 61.528-34.687 83.754"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Eridanus;
