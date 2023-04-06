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

function Andromeda() {
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
            d="M116.66 373.34c51.56 0 93.355-41.79 93.355-93.348 0-51.531-41.793-93.327-93.354-93.327"
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
            d="M303.334 279.992c0-25.766-20.895-46.664-46.66-46.664s-46.66 20.898-46.66 46.664 20.894 46.66 46.66 46.66 46.66-20.894 46.66-46.66zM396.66 279.992c0-25.766-20.894-46.664-46.66-46.664s-46.664 20.898-46.664 46.664 20.899 46.66 46.664 46.66 46.66-20.894 46.66-46.66zM490.009 279.992c0-25.766-20.895-46.664-46.661-46.664-25.793 0-46.688 20.898-46.688 46.664s20.895 46.66 46.688 46.66c25.766 0 46.66-20.894 46.66-46.66z"
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
            d="M583.328 186.672c-51.531 0-93.326 41.794-93.326 93.327 0 51.558 41.793 93.348 93.326 93.348"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Andromeda;
