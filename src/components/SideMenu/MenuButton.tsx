import * as React from 'react';
import { motion } from 'framer-motion';

const Path = ({ ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#D6C9E3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className="fixed top-0 left-0 w-12 h-12  overflow-hidden flex flex-col justify-center items-center gap-1 z-[10000] rounded-full ml-4 mt-4"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

export default MenuButton;
