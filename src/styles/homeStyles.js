import styled from 'styled-components';
import { motion } from 'framer-motion';

//Banner

export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  positon: relative;
  //  margin-bottom: 296px;
  margin-bottom: 10rem;

  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`;

export const BannerTitle = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 18px;
  color: ${(props) => props.theme.text};
  pointer-events: none;

  @media (max-width: 900px) {
    bottom: 180px;
    left: 0;
  }

  @media (max-width: 480px) {
    bottom: 150px;
    left: 0;
  }
`;

export const Intro = styled(motion.h3)`
  display: block;
  font-size: 2rem;
  margin-left: 0.8rem;
  color: ${(props) => props.theme.text};
  font-weight: 300;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-left: 0;
  }
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 12rem;
  font-weight: 1000;
  line-height: 0.76;

  @media (max-width: 900px) {
    font-size: 7rem;
  }

  @media (max-width: 480px) {
    font-size: 4.5rem;
    margin-bottom: 0.2rem;
  }
`;

//Content-section
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;

  @media (max-width: 480px) {
    margin-bottom: 100px;
  }
`;

export const Content = styled.div`
  font-size: 1.3rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: 200;
  margin-left: 3rem;
  color: ${(props) => props.theme.text};

  @media (max-width: 480px) {
    font-size: 1.13rem;
    margin-left: 0;
  }
`;

//Featured-Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;

  @media (max-width: 480px) {
    margin-bottom: 140px;
  }
`;
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: #ffffff;

  h3 {
    font-size: 1.4rem;
  }

  .meta {
    display: flex;

    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }

  .featured-title {
    position: absolute;
    bottom: -87px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;

      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;

        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`;

//Contact

export const Contact = styled(motion.div)``;

export const AboutContent = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.text};

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1.13rem;
  }

  p {
    width: 60%;
    margin-bottom: 3rem;

    @media (max-width: 480px) {
      margin-bottom: 2rem;
    }
  }

  button {
    color: ${(props) => props.theme.red};
    background: ${(props) => props.theme.background};
    border: 2px solid ${(props) => props.theme.text};
    font-family: 'Roboto Mono', monospace;
    height: 4rem;
    width: 12rem;
    transition: all 0.2s;

    @media (max-width: 480px) {
      height: 3rem;
      width: 9rem;
    }

    &:hover {
      background: rgba(234, 41, 30, 0.2);
    }
  }
`;
