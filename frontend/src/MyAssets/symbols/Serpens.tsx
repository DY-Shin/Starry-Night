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

function Serpens() {
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
            d="m695.12 598.65c-40.037 23.123-91.286 9.4163-114.41-30.666-23.123-40.037-9.3714-91.246 30.666-114.37 40.077-23.123 91.291-9.4107 114.41 30.627 23.123 40.077 9.4163 91.291-30.666 114.41z"
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
            d="m150.74 235.99c-51.798 29.926-83.754 85.234-83.754 145.08s31.956 115.12 83.754 145.04c25.467 14.727 54.372 22.461 83.748 22.461 92.497 0 167.5-74.999 167.5-167.5 0-92.497 74.999-167.5 167.5-167.5 29.415 0 58.281 7.7338 83.754 22.422 51.832 29.926 83.748 85.234 83.748 145.08s-31.917 115.12-83.748 50.04"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Serpens;
