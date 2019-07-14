import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const AboutMeBlock = ({ photo, biography }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <BioWrapper>
          <Title>About Me</Title>
          <Biography>{biography}</Biography>
        </BioWrapper>
        {
          photo &&
          <ImgWrapper>
            <Img css={imgStyles} fixed={photo.childImageSharp.fixed} />
          </ImgWrapper>
        }
      </ContentWrapper>
      <Background />
    </Wrapper>
  )
}

const Wrapper = styled('section')`
  width: 100%;
  min-height: 300px;
  position: relative;
  margin: 30px 0px;
  padding: 280px 0px;
  overflow: hidden;
`

const BioWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;
`

const Title = styled('h1')`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 0px;
  margin-top: 40px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.title};
`

const Biography = styled(`p`)`
  line-height: 1.5;
  font-size: 18px;
  max-width: 400px;
  text-align: center;
`

const ContentWrapper = styled('div')`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9;
  justify-content: center;
  align-items: center;
`

const Background = styled('div')`
  content: '""';
  position: absolute;
  left: -100px;
  top: 100px;
  width: calc(100% + 200px);
  height: calc(100% - 200px);
  background: #efefef;
  transform: rotate(-7deg);
`

const imgStyles = css`
  border-radius: 100%;
  border: 6px solid #fff;
`

const ImgWrapper = styled('div')`
  margin-top: -40px;
`

export default AboutMeBlock
