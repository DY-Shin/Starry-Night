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

function Lacerta() {
  return (
    <div className="container">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 700 700">
        <defs>
          <clipPath id="z">
            <path d="M70 0h559.99v559.99H70z" />
          </clipPath>
        </defs>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="41.791" clipPath="url(#z)">
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
            d="m401.99 737.01c-29.612-29.612-46.251-69.806-46.251-111.68 0-41.871 16.64-82.032 46.251-111.64 29.606-29.651 46.246-69.806 46.246-111.68 0-41.871-16.64-82.066-46.246-111.68-29.612-29.612-46.251-69.767-46.251-111.64 0-41.911 16.64-82.066 46.251-111.68"
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
            d="m234.49 290.33c22.226 22.226 52.342 34.687 83.748 34.687s61.562-12.462 83.754-34.687c22.226-22.186 52.342-34.687 83.748-34.687s61.562 12.501 83.748 34.687"
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
            d="m234.49 513.69c22.226-22.226 52.342-34.726 83.748-34.726s61.562 12.501 83.754 34.726c22.226 22.186 52.342 34.648 83.748 34.648s61.562-12.462 83.748-34.648"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Lacerta;
