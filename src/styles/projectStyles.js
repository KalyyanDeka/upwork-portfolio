import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledProject = styled(motion.div)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 900px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: ${props => props.theme.red};
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    font-size: 13px;
    font-weight: 400;
  }

  .project-title {
    color: ${props => props.theme.text};
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: ${props => props.theme.text};
    }
  }

  .project-description {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 4px;
    background: rgba(23, 20, 29, .9);
    // background: rgba(119, 119, 119, 1);
    color: #ffffff;
    font-size: 18px;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      color: ${props => props.theme.text};

      &:hover {
        box-shadow: none;
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: pointer;
      color: #64ffda;
      &:hover,
      &:focus,
      &:active {
        color: #64ffda;
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: #64ffda !important;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: #64ffda;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0.5;
      }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: ${props => props.theme.text};
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      font-size: 13px;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: ${props => props.theme.text};
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
        fill: ${props => props.theme.text};
      }
    }
  }

  .project-image {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      background-color: #64ffda;
      border-radius: 4px;
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        // background-color: rgba(234, 41, 30, 0.5);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(0%) contrast(1) brightness(100%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(0%) contrast(1) brightness(100%);
      }
    }
  }
`
