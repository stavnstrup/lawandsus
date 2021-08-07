import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'


const BackgroundSection = ({ className }) => (
  <StaticQuery
  query={graphql`{
    desktop: file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }`}
  render={(data) => {
    const imageData = data.desktop.childImageSharp.gatsbyImageData
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
    
/*
const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
    query {
      desktop: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `
    )
    
    // Set ImageData
    const imageData = 
    
    
  }
  
*/

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
