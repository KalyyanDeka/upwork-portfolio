import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  height: 100%;

  max-width: 1152px;

  // @media (max-width: 1408px) {
  //   max-width: 1244px;
  // }
  // @media (max-width: 1216px) {

  // }

  @media (max-width: 1024px) {
    max-width: 960px;
  }
  @media (max-width: 900px) {
    max-width: 720px;
  }

  @media (max-width: 480px) {
    max-width: 330px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${(props) =>
      props.spaceBetween &&
      css`
        justify-content: space-between;
      `}



    ${(props) =>
      props.flexEnd &&
      css`
        justify-content: flex-end;
      `}

    ${(props) =>
      props.alignTop &&
      css`
        align-items: flex-start;
      `}

    ${(props) =>
      props.noHeight &&
      css`
        height: 0;
      `}

      ${(props) =>
        props.footer &&
        css`
          flex-direction: row;

          @media (max-width: 900px) {
            flex-direction: column;
          }
        `}

`;

export const SectionHeading = styled(motion.h1)`
  font-family: "Roboto Mono", monospace;
  font-size: 2.5rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 3.5rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  ${(props) =>
    props.alignCenter &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.shrinkMargin &&
    css`
      margin-bottom: 2rem;
    `}

    ${(props) =>
      props.marginBottom &&
      css`
        margin-bottom: 8rem;

        @media (max-width: 480px) {
          margin-bottom: 3rem;
        }
      `}

      ${(props) =>
        props.marginLeft &&
        css`
          margin-left: 3rem;

          @media (max-width: 900px) {
            margin-left: 0;
          }
        `}
`;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.red};
  border-radius: 100%;
  transition: all 0s ease-in-out;
  transition-property: width, heightm border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  @media (max-width: 900px) {
    display: none;
  }

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.red};
  }

  &.pointer {
    border: 4px solid ${(props) => props.theme.text} !important;
  }

  &.nav-open {
    background: ${(props) => props.theme.text};
  }

  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.text};
    top: ${(props) => props.theme.top} !important;
    left: ${(props) => props.theme.left} !important;
  }
`;
