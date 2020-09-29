import React, { useState, useEffect } from "react"

//styled components
import { HeaderNav, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

import "../assets/switchBtn/switch.css"

const Header = ({ onCursor, setToggleMenu, toggleMenu }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  // const hamburger = useRef(null)
  // const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const menuHover = () => {
    onCursor("pointer")
    // setHamburgerPosition({ x: position.x, y: position.y + 72 })
  }

  const [shouldShowActions, setShouldShowActions] = useState(true)
  const [lastYPosition, setLastYPosition] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const yPosition = window.scrollY
      const isScrollingUp = yPosition < lastYPosition

      setShouldShowActions(isScrollingUp)
      setLastYPosition(yPosition)
    }

    window.addEventListener("scroll", handleScroll, false)

    return () => {
      window.addEventListener("scroll", handleScroll, false)
    }
  }, [lastYPosition])

  return (
    <HeaderNav
      animate={{
        y: shouldShowActions ? 0 : -72,
        opacity: shouldShowActions ? 1 : 0,
      }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex flexRow spaceBetween noHeight>
          <div>
            <label className="switch">
              <input type="checkbox" />
              <span onClick={toggleTheme} className="slider round"></span>
            </label>
          </div>

          <Menu
            // ref={hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
