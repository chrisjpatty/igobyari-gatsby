import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const PostBlock = ({post: { node: post }}) => (
  <Link css={wrapperStyles} to={post.fields.slug}>
    {
      post.frontmatter.featuredimage ?
      <Img fixed={post.frontmatter.featuredimage.childImageSharp.fixed} />
      :
      <ImagePlaceholder />
    }
    <Title>{post.frontmatter.title}</Title>
    <Excerpt>{post.excerpt}</Excerpt>
  </Link>
)

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0px 20px;
  text-decoration: none;
  color: inherit;
`

const Title = styled('h2')`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.title};
  line-height: 1.3;
`

const Excerpt = styled('p')`
  width: 100%;
  margin-top: 0px;
`

const ImagePlaceholder = styled('div')`
  width: 300px;
  height: 200px;
  background: #efefef;
`

export default PostBlock
