import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//Styled components
import { Container, Flex } from '../styles/globalStyles';
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
} from '../styles/navigationStyles';

import { FooterContent, FooterSocial } from '../styles/footerStyles';

//Icons
import { Linkedin, Email, Github } from '../assets/svg/social-icons';

const navRoutes = [
  {
    id: 0,
    title: 'Intro',
    path: '#intro',
  },
  {
    id: 1,
    title: 'About Me',
    path: '#about',
  },
  {
    id: 2,
    title: 'Portfolio',
    path: '#projects',
  },
  {
    id: 3,
    title: 'Contact',
    path: '#contact',
  },
];

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [tabView, setTabView] = useState(false);

  useEffect(() => {
    function handleWidth() {
      var w = window.innerWidth;

      if (w < 900) {
        setTabView(true);
      } else {
        setTabView(false);
      }
    }

    handleWidth();
  }, []);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            animate={{ x: toggleMenu ? 0 : '-100%' }}
            transition={{
              duration: tabView ? 0.4 : 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Sections</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor('pointer')}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <li key={route.id}>
                      <a
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                        onClick={() => setToggleMenu(!toggleMenu)}
                        href={route.path}
                      >
                        <motion.div
                          initial={{ x: -100 }}
                          whileHover={{
                            x: -20,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          className="link"
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex footer spaceBetween>
                  <FooterContent>
                    <span>
                      <p>kalyyandeka@gmail.com</p>
                    </span>
                  </FooterContent>

                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor('pointer')}
                      onMouseLeave={onCursor}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/kalyandeka/"
                    >
                      <Linkedin />
                    </a>
                    <a
                      onMouseEnter={() => onCursor('pointer')}
                      onMouseLeave={onCursor}
                      href="mailto:kalyyandeka@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Email />
                    </a>
                    <a
                      onMouseEnter={() => onCursor('pointer')}
                      onMouseLeave={onCursor}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/kalyyandeka"
                    >
                      <Github />
                    </a>
                  </FooterSocial>
                  <FooterContent alignRight>
                    <p>&copy;2020 Copyright by Kalyan Deka</p>
                  </FooterContent>
                </Flex>
              </NavFooter>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
