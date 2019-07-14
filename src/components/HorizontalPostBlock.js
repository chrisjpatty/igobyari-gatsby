import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Img from "gatsby-image";

const HorizontalPostBlock = ({ post, reversed }) => (
  <Wrapper reversed={reversed}>
    <Story reversed={reversed}>
      <Link css={linkStyles} to={post.fields.slug}>
        <Title>{post.frontmatter.title}</Title>
      </Link>
      <DateWrapper>{post.frontmatter.date}</DateWrapper>
      <Excerpt>{post.frontmatter.description || post.excerpt}</Excerpt>
    </Story>
    {post.frontmatter.featuredimage ? (
      <Img
        className='f-image'
        css={imgStyles}
        fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
      />
    ) : (
      <ImagePlaceholder className='f-image f-placeholder' />
    )}
  </Wrapper>
);

const Wrapper = styled("article")`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  margin-bottom: 60px;
  @media (max-width: ${({theme}) => theme.breakpoints.sm}px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 45px;
    .f-image{
      max-width: 100%;
      width: 100%;
      height: 100%;
      max-height: 250px;
    }
    .f-placeholder{
      height: 250px;
    }
  }
`;

const linkStyles = css`
  text-decoration: none;
  color: inherit;
  &:hover{
    text-decoration: underline;
    text-decoration-color: rgb(189, 189, 189);
  }
`;

const Story = styled("div")`
  margin-right: ${({ reversed }) => (reversed ? 0 : 50)}px;
  margin-left: ${({ reversed }) => (reversed ? 50 : 0)}px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({theme}) => theme.breakpoints.sm}px) {
    margin-left: 0px;
    margin-right: 0px;
    max-width: 100%;
  }
`;

const Title = styled("h2")`
  margin-top: 0px;
  margin-bottom: 5px;
  @media (max-width: ${({theme}) => theme.breakpoints.sm}px){
    margin-top: 15px;
    font-size: 18px;
  }
`;

const DateWrapper = styled("span")`
  color: rgb(115, 115, 115);
  font-style: italic;
`;

const Excerpt = styled("p")`
  line-height: 1.5;
  margin-bottom: 0px;
`;

const imgStyles = css`
  width: 100%;
  max-width: 300px;
  height: 210px;
`;

const ImagePlaceholder = styled("div")`
  width: 300px;
  height: 210px;
  background: #ededed;
`;

export default HorizontalPostBlock;
