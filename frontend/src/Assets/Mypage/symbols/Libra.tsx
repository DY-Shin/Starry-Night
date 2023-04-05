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

function Libra() {
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
            d="m182 380.8h336v33.602h-336z"
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
            d="m305.2 309.01-2.8555-2.4648c-15.957-13.629-25.145-33.559-25.145-54.543 0-26.008 13.875-50.043 36.402-63.047 22.523-13.004 50.273-13.004 72.797 0 22.527 13.004 36.402 37.039 36.402 63.047 0 20.984-9.1875 40.914-25.145 54.543l-2.8555 2.4648v26.992h123.2v-33.602h-74.594c8.4961-15.441 12.965-32.773 12.992-50.398 0-38.012-20.277-73.137-53.199-92.145-32.918-19.008-73.48-19.008-106.4 0-32.922 19.008-53.199 54.133-53.199 92.145 0.011719 17.621 4.4609 34.953 12.934 50.398h-74.535v33.602h123.2z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Libra;
