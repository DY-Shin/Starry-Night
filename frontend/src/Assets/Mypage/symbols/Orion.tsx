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

function Orion() {
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
            d="m234.49 402.01c0 46.251-37.502 83.754-83.748 83.754-46.251 0-83.754-37.502-83.754-83.754 0-46.246 37.502-83.748 83.754-83.748 46.246 0 83.748 37.502 83.748 83.748z"
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
            d="m234.49 402.01h83.748"
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
            d="m485.74 402.01c0 46.251-37.502 83.754-83.748 83.754-46.251 0-83.754-37.502-83.754-83.754 0-46.246 37.502-83.748 83.754-83.748 46.246 0 83.748 37.502 83.748 83.748z"
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
            d="m569.49 402.01h-83.748"
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
            d="m736.99 402.01c0 46.251-37.502 83.754-83.748 83.754-46.251 0-83.754-37.502-83.754-83.754 0-46.246 37.502-83.748 83.754-83.748 46.246 0 83.748 37.502 83.748 83.748z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Orion;
