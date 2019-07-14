import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Img from "gatsby-image";

const PostBlock = ({ post: { node: post } }) => (
  <Link css={wrapperStyles} to={post.fields.slug}>
    <ImgWrapper>
      {post.frontmatter.featuredimage ? (
        <Img
          css={imgStyles}
          className='featured-image'
          fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
        />
      ) : (
        <ImagePlaceholder />
      )}
    </ImgWrapper>
    <Title>{post.frontmatter.title}</Title>
    <Excerpt>{post.excerpt}</Excerpt>
  </Link>
);

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0px 20px;
  text-decoration: none;
  color: inherit;
  @media (max-width: 1000px) {
    max-width: 500px;
    margin-bottom: 35px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

const Title = styled("h2")`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 1.3;
`;

const Excerpt = styled("p")`
  width: 100%;
  margin-top: 0px;
`;

const ImagePlaceholder = styled("div")`
  width: 300px;
  height: 200px;
  background: #efefef;
`;

const ImgWrapper = styled("div")`
  @media (max-width: ${({ theme }) => theme.breakpoints.md + 100}px) {
    .featured-image{
      width: auto;
      height: auto;
      max-width: 500px;
      max-height: 350px;
    }
  }
  @media (max-width: 600px) {
    .featured-image{
      max-height: 200px;
    }
  }
`;

const imgStyles = css`
  width: 300px;
  height: 200px;
`;

export default PostBlock;
