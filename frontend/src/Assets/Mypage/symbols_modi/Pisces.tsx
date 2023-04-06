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

function Pisces() {
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
            d="m484.4 263.2h-71.789c4.9258-39.438 26.383-74.926 59.023-97.605l-19.266-27.551v-0.003907c-20.551 14.328-37.758 32.93-50.441 54.535-12.684 21.605-20.539 45.699-23.031 70.625h-57.789c-2.4922-24.926-10.348-49.02-23.031-70.625-12.684-21.605-29.891-40.207-50.441-54.535l-19.266 27.551v0.003906c32.641 22.68 54.098 58.168 59.023 97.605h-71.789v33.602h71.789c-4.9258 39.438-26.383 74.926-59.023 97.605l19.266 27.551v0.003907c20.551-14.328 37.758-32.93 50.441-54.535 12.684-21.605 20.539-45.699 23.031-70.625h57.789c2.4922 24.926 10.348 49.02 23.031 70.625 12.684 21.605 29.891 40.207 50.441 54.535l19.266-27.551v-0.003906c-32.641-22.68-54.098-58.168-59.023-97.605h71.789z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Pisces;
