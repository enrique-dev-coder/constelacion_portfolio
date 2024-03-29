import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuItems = [
  { title: "Home", href: "https://somosasteria.com/" },
  { title: "Manifiesto", href: "https://somosasteria.com/manifiesto/" },
  { title: "Contacto", href: "https://somosasteria.com/contacto/" },
];

export const Navigation = () => (
  <motion.ul className=" fixed top-20 left-5 z-[10000]" variants={variants}>
    {MenuItems.map((item, i) => (
      <MenuItem text={item.title} href={item.href} key={i} />
    ))}
  </motion.ul>
);
