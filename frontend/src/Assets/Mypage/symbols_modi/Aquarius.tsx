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

function Aquarius() {
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
            d="m439.6 222.66-49.727-49.727h-0.003906c-3.1484-3.1484-7.418-4.9141-11.871-4.9141s-8.7227 1.7656-11.871 4.9141l-49.73 49.727-49.727-49.727c-3.1484-3.1484-7.418-4.9141-11.871-4.9141s-8.7227 1.7656-11.871 4.9141l-62.273 62.27 23.742 23.746 50.398-50.398 49.727 49.727h0.003906c3.1523 3.1445 7.4219 4.9102 11.871 4.9102 4.4531 0 8.7227-1.7656 11.875-4.9102l49.727-49.73 49.727 49.727v0.003907c3.1523 3.1445 7.4219 4.9102 11.875 4.9102 4.4492 0 8.7188-1.7656 11.871-4.9102l67.871-67.875-23.742-23.742z"
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
            d="m439.6 351.46-49.73-49.73c-3.1484-3.1445-7.418-4.9102-11.871-4.9102s-8.7227 1.7656-11.871 4.9102l-49.73 49.73-49.727-49.727v-0.003907c-3.1484-3.1445-7.418-4.9102-11.871-4.9102s-8.7227 1.7656-11.871 4.9102l-62.273 62.273 23.742 23.742 50.398-50.398 49.727 49.727h0.003906c3.1523 3.1484 7.4219 4.9141 11.871 4.9141 4.4531 0 8.7227-1.7656 11.875-4.9141l49.727-49.727 49.727 49.727c3.1523 3.1484 7.4219 4.9141 11.875 4.9141 4.4492 0 8.7188-1.7656 11.871-4.9141l67.871-67.871-23.742-23.742z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Aquarius;
