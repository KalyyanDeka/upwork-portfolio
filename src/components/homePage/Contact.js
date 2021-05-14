import React, { useEffect } from 'react';

//Scroll Behaviour
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

//Styled Components
import { Container, SectionHeading } from '../../styles/globalStyles';
import { Contact, AboutContent } from '../../styles/homeStyles';

const HomeContact = () => {
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <Contact
      id="contact"
      ref={aboutRef}
      animate={animation}
      variants={{
        hidden: {
          opacity: 0,
          y: 72,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
        },
      }}
      initial="hidden"
    >
      <Container>
        <AboutContent>
          <SectionHeading shrinkMargin alignCenter>
            Get in Touch!
          </SectionHeading>
          <p>
            My inbox is always open. Whether for a potential project or just to
            say hi, feel free to reach out to me!
          </p>
          <a
            href="mailto:kalyyandeka@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <strong>Say Hello</strong>
            </button>
          </a>
        </AboutContent>
      </Container>
    </Contact>
  );
};

export default HomeContact;
