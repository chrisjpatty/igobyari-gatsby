import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

export default ({posts = []}) => (
  <Row>
    {
      posts.map(post => (
        <RelatedPost {...post} />
      ))
    }
  </Row>
)

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: ${({theme}) => theme.breakpoints.sm}px){
    justify-content: center;
  }
`

const RelatedPost = ({fields, frontmatter}) => (
  <Wrapper href={fields.slug}>
    {
      frontmatter.featuredimage ?
      <Img fixed={frontmatter.featuredimage} />
      :
      <ImagePlaceholder />
    }
    <Title>{frontmatter.title}</Title>
  </Wrapper>
)

const Wrapper = styled('a')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  flex: 0 0 33.3333%;
  width: 33.3333%;
  padding: 15px;
  @media(max-width: ${({theme}) => theme.breakpoints.sm}px){
    flex: 0 0 50%;
    width: 50%;
    padding: 0px;
    &:first-child{
      padding-left: 20px;
      padding-right: 10px;
    }
    &:nth-child(2){
      padding-right: 20px;
      padding-left: 10px;
    }
    &:last-child{
      display: none;
    }
  }
  ${'' /* @media(max-width: ${({theme}) => theme.breakpoints.xs}px){
    flex: 0 0 100%;
    width: 100%;
  } */}
`

const Title = styled('span')`
  text-align: center;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.title};
  margin-top: 15px;
  @media(max-width: ${({theme}) => theme.breakpoints.xs}px){
    font-size: 16px;
  }
`

const ImagePlaceholder = styled('div')`
  width: 100%;
  min-height: 150px;
  background: #efefef;
  @media(max-width: ${({theme}) => theme.breakpoints.xs}px){
    min-height: 100px;
  }
`
