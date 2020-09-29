import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Menu = styled.div`
  transform: translateY(-15px);
  button {
    transform-origin: top;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 40px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`
