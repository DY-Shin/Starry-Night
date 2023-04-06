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

function Aries() {
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
            d="m439.6 140h-0.95312c-35.855 0.007812-69.246 18.234-88.648 48.383-19.402-30.148-52.793-48.375-88.648-48.383-26.008-0.17188-50.133 13.547-63.285 35.988-13.152 22.438-13.332 50.191-0.47656 72.801 12.859 22.609 36.801 36.641 62.809 36.812h16.801v-33.602h-16.801c-12.477 0.058594-24.227-5.8789-31.582-15.961-5.832-7.9141-8.4766-17.727-7.4102-27.5 1.0664-9.7695 5.7617-18.785 13.16-25.258 7.3984-6.4688 16.961-9.9258 26.785-9.6797 19.051 0.011719 37.316 7.5859 50.789 21.059 13.469 13.473 21.043 31.738 21.059 50.789v174.55h33.602v-174.55c0.015625-19.051 7.5898-37.316 21.059-50.789 13.473-13.473 31.738-21.047 50.789-21.059h0.95312c14.004 0 26.945 7.4688 33.945 19.598 7.0039 12.129 7.0039 27.07 0 39.199-7 12.129-19.941 19.602-33.945 19.602h-16.801v33.602h16.801c26.008 0 50.039-13.879 63.047-36.402 13.004-22.523 13.004-50.273 0-72.801-13.008-22.523-37.039-36.398-63.047-36.398z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Aries;
