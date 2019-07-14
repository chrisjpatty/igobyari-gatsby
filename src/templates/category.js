import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import FeaturedPost from "../components/FeaturedPost";
import TriPostBlock from "../components/TriPostBlock";
import HorizontalPostBlock from "../components/HorizontalPostBlock";

export const CategoryPageTemplate = ({ posts }) => {
  const featuredPost = posts[0];
  const triPosts = posts.slice(1, 4);
  const restPosts = posts.slice(4);
  return (
    <PageWrapper>
      {featuredPost ? <FeaturedPost post={featuredPost} /> : null}
      {triPosts.length ? <TriPostBlock posts={triPosts} /> : null}
      {restPosts.length ? (
        <PostListWrapper>
          {restPosts.map(post => (
            <HorizontalPostBlock post={post.node} key={post.node.id} />
          ))}
        </PostListWrapper>
      ) : null}
    </PageWrapper>
  );
};

const PageWrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const PostListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 100%;
`;

const CategoryPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <CategoryPageTemplate posts={posts} />
    </Layout>
  );
};

export const tagPageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM D, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 900, quality: 80) {
                  base64
                  sizes
                  srcSet
                  src
                  presentationWidth
                  presentationHeight
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryPage;
