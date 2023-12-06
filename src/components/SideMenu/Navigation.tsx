import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuItems = ['Home', 'Contacto'];

export const Navigation = () => (
  <motion.ul className=" fixed top-20 left-5 z-[10000]" variants={variants}>
    {MenuItems.map((item, i) => (
      <MenuItem text={item} key={i} />
    ))}
  </motion.ul>
);
