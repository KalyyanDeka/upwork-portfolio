import React from 'react';

//Styles component
import { Container, Flex } from '../styles/globalStyles';
import { FooterNav, FooterContent, FooterSocial } from '../styles/footerStyles';

//Icons
import { Linkedin, Email, Github } from '../assets/svg/social-icons';

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex footer spaceBetween>
          <FooterContent>
            <span>
              <p>kalyyandeka@gmail.com</p>
            </span>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kalyandeka/"
            >
              <Linkedin />
            </a>
            <a
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              href="mailto:kalyyandeka@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email />
            </a>
            <a
              onMouseEnter={() => onCursor('hovered')}
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
      </Container>
    </FooterNav>
  );
};

export default Footer;
