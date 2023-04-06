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

function Sagittarius() {
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
            d="m333.76 272.44-107.63 107.69 23.742 23.742 107.69-107.63c27.711 33.137 42.875 74.969 42.84 118.16v16.801h33.602v-16.801c0.03125-52.098-18.648-102.48-52.641-141.96l86.242-86.297v71.457h33.602l-0.003906-112c0-4.457-1.7695-8.7305-4.918-11.883-3.1523-3.1484-7.4258-4.918-11.883-4.918h-112v33.602l71.457-0.003906-86.297 86.242c-39.48-33.992-89.859-52.672-141.96-52.641h-16.801v33.602h16.801c43.191-0.035156 85.023 15.129 118.16 42.84z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Sagittarius;
