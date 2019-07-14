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
        css={imgStyles}
        fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
      />
    ) : (
      <ImagePlaceholder />
    )}
  </Wrapper>
);

const Wrapper = styled("article")`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  margin-bottom: 60px;
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
`;

const Title = styled("h2")``;

const DateWrapper = styled("span")``;

const Excerpt = styled("p")``;

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
