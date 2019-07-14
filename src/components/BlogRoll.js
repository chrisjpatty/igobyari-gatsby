import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link, graphql, StaticQuery } from "gatsby";
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
          <HorizontalPostBlock post={post} reversed />
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
                    fixed(width: 300, height: 200, quality: 75) {
                      ...GatsbyImageSharpFixed
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

const PostMeta = styled("div")(
  {},
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "& a": {
      fontFamily: theme.fonts.title,
      color: "inherit",
      // textTransform: 'uppercase',
      fontSize: 36,
      textDecoration: "none"
      // paddingLeft: 20
    }
  }),
  ({ theme }) => ({
    [theme.media.sm]: {
      "& a": {
        fontSize: 28
      }
    }
  })
);

const PostWrapper = styled("div")(
  {
    margin: "60px 0px",
    "&:first-of-type": {
      marginTop: 0
    },
    "&:last-child": {
      marginBottom: 0
    }
  },
  ({ theme }) => ({
    [theme.media.sm]: {
      padding: "0px 20px"
    }
  })
);

const Excerpt = styled("p")`
  line-height: 1.5;
`;

const DateWrapper = styled("span")({
  opacity: 0.5,
  fontStyle: "italic"
});
