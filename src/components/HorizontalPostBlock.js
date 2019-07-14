import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Img from "gatsby-image";

const HorizontalPostBlock = ({ post, reversed }) => (
  <Wrapper reversed={reversed}>
    <Link css={linkStyles} to={post.fields.slug}>
      <Story>
        <Title>{post.frontmatter.title}</Title>
        <DateWrapper>{post.frontmatter.date}</DateWrapper>
        <Excerpt>{post.frontmatter.description || post.excerpt}</Excerpt>
      </Story>
    </Link>
    {post.frontmatter.featuredimage ? (
      <Img
        css={imgStyles}
        fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
      />
    ) : null}
  </Wrapper>
);

const Wrapper = styled("article")`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: ${({reversed}) => reversed ? 'row-reverse' : 'row'}
`;

const linkStyles = css`
  text-decoration: none;
  color: inherit;
  margin-right: 50px;
`;

const Story = styled("div")`
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

export default HorizontalPostBlock;
