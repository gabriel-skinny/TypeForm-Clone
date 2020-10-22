import React from 'react';

import { Container } from './styles';
import { useViewportScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, 
    [0.188, 0.198],
    ["0%", "-100%"])

  const headerHeight = useTransform(scrollYProgress,
    [0.01, 0.02],
    ["200px", "100px"])

  return (
    <Container style={{ 
      y: headerY,
      height: headerHeight
    }} />
  );
}

export default Header;