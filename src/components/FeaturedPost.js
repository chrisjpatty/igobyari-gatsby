import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const FeaturedPost = ({post: { node: post }}) => {
  return (
    <Link css={wrapperStyles} to={post.fields.slug}>
      {
        post.frontmatter.featuredimage &&
        <ImageWrapper>
          <TitleWrapper>
            <DateWrapper>{post.frontmatter.date}</DateWrapper>
            <Title>{post.frontmatter.title}</Title>
          </TitleWrapper>
          <Img css={imageStyles} fluid={post.frontmatter.featuredimage.childImageSharp.fluid} />
        </ImageWrapper>
      }
    </Link>
  )
}

const wrapperStyles = css`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  text-decoration: none;
`

const DateWrapper = styled('div')`
  padding: 10px;
  background: #ededed;
  color: rgba(65, 65, 65, 1);
  position: absolute;
  top: -45px;
  left: -10px;
`

const ImageWrapper = styled('div')`
  position: relative;
  width: 100%;
  @media(max-width: ${({theme}) => theme.breakpoints.sm}px){
    margin-bottom: 30px;
  }
`

const TitleWrapper = styled('div')`
  position: absolute;
  left: -20px;
  bottom: 10px;
  z-index: 9;
  width: 75%;
  @media(max-width: ${({theme}) => theme.breakpoints.md}px){
    left: 10px;
  }
  @media(max-width: ${({theme}) => theme.breakpoints.sm}px){
    left: 20px;
    bottom: -50px;
  }
`

const Title = styled('h1')`
  font-size: 36px;
  background: rgba(65, 65, 65, 1);
  box-shadow: 10px 0 0 rgba(65, 65, 65, 1), -10px 0 0 rgba(65, 65, 65, 1);
  color: #fff;
  font-family: ${({theme}) => theme.fonts.title};
  padding: 0px 10px;
  line-height: 1.5;
  display: inline;
  font-weight: 400;
  @media(max-width: ${({theme}) => theme.breakpoints.sm}px){
    font-size: 24px;
  }
`

const imageStyles = css`
  width: 100%;
  max-height: 450px;
`

export default FeaturedPost
