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

function Gemini() {
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
            d="m481.82 165.59 14.449-8.793-17.473-28.672-14.391 8.625h-0.003906c-33.98 20.402-72.863 31.203-112.5 31.246h-3.8086 0.003906c-39.691 0.003906-78.637-10.777-112.67-31.191l-14.227-8.6797-17.473 28.672 14.391 8.625h0.003906c18.504 11.133 38.359 19.848 59.078 25.926v177.3c-20.691 6.0312-40.527 14.688-59.023 25.758l-14.449 8.793 17.473 28.672 14.391-8.625h0.003906c33.98-20.402 72.863-31.203 112.5-31.246h3.8086-0.003906c39.691-0.003906 78.637 10.777 112.67 31.191l14.227 8.6797 17.473-28.672-14.391-8.625h-0.003906c-18.504-11.133-38.359-19.844-59.078-25.926v-177.3c20.691-6.0312 40.527-14.688 59.023-25.758zm-92.625 195.66c-12.344-1.875-24.809-2.8281-37.297-2.8594h-3.8086 0.003906c-12.488 0.03125-24.953 0.98437-37.297 2.8594v-162.4c12.344 1.875 24.809 2.8281 37.297 2.8555h3.8086-0.003906c12.488-0.0625 24.957-1.0547 37.297-2.9688z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Gemini;
