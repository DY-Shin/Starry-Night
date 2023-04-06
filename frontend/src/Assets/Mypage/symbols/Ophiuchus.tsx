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
    fill: 'rgba(255, 255, 255, 1)',
  },
};

function Ophiuchus() {
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
            d="m510.61 261.3c-12.961-26.137-36.973-45.07-65.41-51.578v-69.719h-33.598v67.762c-9.0312 0.91016-17.891 3.0781-26.32 6.4375l-83.051 33.207c-4.4531 1.7656-9.0938 3.0234-13.832 3.7539v-111.16h-33.598v108.14c-15.422-5.6094-28.098-16.941-35.395-31.641l-7.5039-14.895-29.902 14.895 7.5039 15.008c12.938 26.109 36.902 45.039 65.297 51.574v41.723c0 34.012 18.145 65.438 47.598 82.445 29.457 17.004 65.746 17.004 95.203 0 29.453-17.008 47.598-48.434 47.598-82.445v-80.137c15.422 5.6094 28.098 16.941 35.395 31.641l7.5039 14.895 29.902-14.895zm-160.61 125.1c-16.336 0-32.004-6.4883-43.559-18.039-11.551-11.555-18.043-27.223-18.043-43.559v-39.762c9.0312-0.91016 17.891-3.0781 26.32-6.4375l82.992-33.207v-0.003906c4.4766-1.7656 9.1328-3.0234 13.891-3.75v83.16c0 16.336-6.4922 32.004-18.043 43.559-11.555 11.551-27.223 18.039-43.559 18.039z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Ophiuchus;
