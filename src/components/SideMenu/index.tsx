import React, { useRef } from 'react';
import MenuButton from './MenuButton';
import { Navigation } from './Navigation';
import { motion, useCycle } from 'framer-motion';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

// lo que hace useCycle es que te hace como un contexto en el componente para tener estado opne y close
// pero sin necesidad de pasar open y closed como props

const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    // aqui envuelves a tus componentes con el animate opne yu closed , los  que estan adentro cada uno se anima por separado solo que por css y tiempo de animacion parecen que estan todos juntos
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuButton toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default SideMenu;
