import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql, StaticQuery } from "gatsby";
import FeaturedPost from "./FeaturedPost";
import TriPostBlock from "./TriPostBlock";
import AboutMeBlock from "./AboutMeBlock";
import HorizontalPostBlock from "./HorizontalPostBlock";

const BlogRoll = ({data}) => {
  const [postLimit, setPostLimit] = React.useState(8);
  const { indexPage, allPosts } = data;
  const { edges: posts = [] } = allPosts;
  const featuredPost = posts.slice(0, 1)[0];
  const triPosts = posts.slice(1, 4);
  const restPosts = posts.slice(4);
  return (
    <Wrapper>
      <FeaturedPost post={featuredPost} />
      <TriPostBlock posts={triPosts} />
      <AboutMeBlock
        photo={indexPage.frontmatter.profilePhoto}
        biography={indexPage.frontmatter.biography}
      />
      {posts &&
        restPosts.slice(0, postLimit).map(({ node: post }, i) => (
          <HorizontalPostBlock post={post} reversed key={i} />
        ))}
      <LoadMoreRow>
        <LoadMoreButton onClick={() => setPostLimit(limit => limit + 8)}>Load More</LoadMoreButton>
    </LoadMoreRow>
    </Wrapper>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        indexPage: markdownRemark(
          frontmatter: { templateKey: { eq: "index-page" } }
        ) {
          frontmatter {
            title
            biography
            profilePhoto {
              childImageSharp {
                fixed(width: 240, height: 240, quality: 90) {
                  width
                  height
                  src
                  srcSet
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
        allPosts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadMoreRow = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`

const LoadMoreButton = styled('button')`
  border: none;
  background: #efefef;
  padding: 15px 20px;
  &:hover{
    background: #dad8d8;
  }
`
