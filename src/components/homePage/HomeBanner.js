import React from 'react';

import { Banner, BannerTitle, Intro, Headline } from '../../styles/homeStyles';

import { Container } from '../../styles/globalStyles';

const HomeBanner = ({ onCursor }) => {
  const parent = {
    initial: { y: 800, opactiy: 0 },
    animate: {
      y: 0,
      opactiy: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const child = {
    initial: { y: 800, opactiy: 0 },
    animate: {
      y: 0,
      opactiy: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Banner
      id="intro"
      onMouseEnter={() => onCursor('hovered')}
      onMouseLeave={onCursor}
    >
      <Container>
        <BannerTitle variants={parent} initial="initial" animate="animate">
          <Intro variants={child}>Hi, my name is...</Intro>
          <Headline variants={child}>NITU DEKA.</Headline>
          {/* <Headline variants={child}>DEKA</Headline> */}
        </BannerTitle>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
