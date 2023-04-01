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

function Scorpius() {
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
            d="m478.13 251.33-56.672 56.672 23.742 23.742 28-28v57.457c0 13.004-6.9375 25.023-18.199 31.523-11.262 6.5039-25.137 6.5039-36.398 0-11.266-6.5-18.203-18.52-18.203-31.523v-170.8c-0.027344-16.527-6.6992-32.355-18.516-43.914-11.816-11.562-27.781-17.891-44.309-17.562-16.527 0.33203-32.23 7.2891-43.574 19.309-11.598-12.406-27.816-19.449-44.801-19.449-16.98 0-33.203 7.043-44.801 19.449-11.617-12.371-27.824-19.402-44.797-19.43h-16.801v33.602h16.801v-0.003906c7.4258 0 14.547 2.9531 19.797 8.2031s8.2031 12.371 8.2031 19.797v151.2h33.602l-0.003906-151.2c0-10 5.3359-19.246 14-24.246 8.6641-5.0039 19.336-5.0039 28 0 8.6641 5 14 14.246 14 24.246v151.2h33.602v-151.2c0-10 5.3359-19.246 14-24.246 8.6641-5.0039 19.336-5.0039 28 0 8.6641 5 14 14.246 14 24.246v170.8c0 25.008 13.34 48.117 35 60.621 21.656 12.504 48.34 12.504 70 0 21.656-12.504 35-35.613 35-60.621v-57.457l28 28 23.742-23.742-56.672-56.672c-3.1484-3.1445-7.418-4.9141-11.871-4.9141s-8.7227 1.7695-11.871 4.9141z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Scorpius;
