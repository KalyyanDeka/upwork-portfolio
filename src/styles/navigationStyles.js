import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.red};
  color: #000;
  z-index: 100;
  overflow: hidden;
`
export const NavHeader = styled.div`
  top: 72px;
  position: relative;

  h2 {
    color: ${props => props.theme.background};
    font-size: 2.5rem;
    transform: translateX(8rem);
    border-bottom: 3px solid ${props => props.theme.background};

    @media (max-width: 480px) {
      transform: translateX(0) translateY(-15px);
      font-size: 2rem;
      border-bottom: none;
    }
  }
`

export const CloseNav = styled.div`
  transform: translateY(-15px);
  z-index: 100;
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 40px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  transform: translateX(8rem);

  @media (max-width: 480px) {
    transform: translateX(1.5rem);
  }
  ul {
    padding: 0;

    li {
      list-style: none;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 76px;
      line-height: 76px;
      overflow: hidden;

      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;

        .arrow {
          height: 56px;
          margin-right: 8px;

          svg {
            width: 100px;
            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div`
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  p {
    color: ${props => props.theme.background};
  }

  svg path {
    fill: ${props => props.theme.background};
  }
`
