import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: {
            eq: "woman-in-yellow-shirt-writing-on-white-paper-3807755.jpg"
          }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <p className="bannerTitle">
            Effektiv sprogundervisning i tysk og fransk
          </p>
          <p className="bannerTitle"></p>
          <p className="bannerDescr">Willkommen - Bienvenue</p>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  &::before,
  &::after {
    filter: invert(15%);
  }
  width: 100%;
  min-height: 100vh;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
  z-index: 1;
`

export default StyledBackgroundSection
