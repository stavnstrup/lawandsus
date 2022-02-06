import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
// import Banner from '../images/round-banner1.svg'



const BackgroundSection = ( { className } ) => {
  const data  = useStaticQuery (
    graphql`
      query {
        desktop: file(relativePath: {eq: "woman-in-yellow-shirt-writing-on-white-paper-3807755.jpg"}) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1920){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid


  return (
    <BackgroundImage
    Tag="section"
    className={className}
    fluid={imageData}
    backgroundColor={`#040e18`}
  >
{/*
    <p className="bannerTitle">
      Målrettet sprogundervisning i tysk og fransk
    </p>
    <Banner />
  */}
      <div className="bannerContainer">
        <div className="bannerBox">
          <h1>Tyskundervisning Franskundervisning</h1>
          <p>Nemt og hurtigt. Tilrettelagt specielt til dig offline eller online.<br /> 
          Klik <Link to="/tilmelding/">her</Link> for en uddybende samtale.</p>
        </div>
      </div>
    </BackgroundImage>
  )

}


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
