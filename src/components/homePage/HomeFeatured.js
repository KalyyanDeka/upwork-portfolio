import React, { useEffect } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Container, SectionHeading } from "../../styles/globalStyles"
import { HomeFeaturedSection } from "../../styles/homeStyles"
import { StyledProject } from "../../styles/projectStyles"

import { GithubProject, External } from "../../assets/svg/social-icons"

const HomeFeatured = () => {
  const animation = useAnimation()
  const [sectionHeading, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  const [projects, visible] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }

    if (visible) {
      animation.start("visible")
    }
  }, [animation, inView, visible])

  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700, traceSVG: { color: "#64ffda" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `)

  const featuredProjects = data.featured.edges.filter(({ node }) => node)

  return (
    <HomeFeaturedSection id="projects">
      <Container>
        <SectionHeading
          marginBottom
          marginLeft
          ref={sectionHeading}
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
          02: Some Things I've build
        </SectionHeading>
        <div>
          {featuredProjects &&
            featuredProjects.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { external, title, tech, github, cover } = frontmatter

              return (
                <StyledProject
                  key={i}
                  ref={projects}
                  animate={animation}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 72,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      },
                    },
                  }}
                  initial="hidden"
                >
                  <div className="project-content">
                    {/* <p className="project-overline">Featured Project</p> */}
                    <h3 className="project-title">{title}</h3>
                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link" target="_blank"
                        rel="noopener noreferrer">
                          <GithubProject />
                        </a>
                      )}
                      {external && (
                        <a href={external} aria-label="External Link" target="_blank"
                        rel="noopener noreferrer">
                          <External />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-image">
                    <a href={external ? external : github ? github : "#"} target="_blank"
            rel="noopener noreferrer" >
                      <Img
                        fluid={cover.childImageSharp.fluid}
                        alt={title}
                        className="img"
                      />
                    </a>
                  </div>
                </StyledProject>
              )
            })}
        </div>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
