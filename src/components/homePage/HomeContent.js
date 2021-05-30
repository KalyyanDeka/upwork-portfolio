import React, { useEffect } from "react";

//Scroll Behaviour
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

//Styled Components
import { Container, SectionHeading } from "../../styles/globalStyles";
import { HomeContentSection, Content } from "../../styles/homeStyles";

const HomeContent = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content>
          <SectionHeading id="about">01: About Me</SectionHeading>
          <p>
            Accomplished full stack developer possessing advanced skills and
            knowledge of leading programming languages and tools. Expert in
            devising innovative and tailored solutions, having a strong
            background in design creation, coding, debugging, and testing, to
            assist businesses to achieve their goals in a variety of industries.
            <br />
            <br />I love learning new and better ways to create seamless user
            experiences with clean, efficient, and scalable code. I consider
            work an ongoing education, and I'm always looking for opportunities
            to work with those who are willing to share their knowledge as much
            as I want to learn. At the end of the day, my primary goal is to
            create something beautiful with people that bring out the best in
            me.
          </p>
        </Content>
      </Container>
    </HomeContentSection>
  );
};

export default HomeContent;
