import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, i) => (
            <PostWrapper key={post.id}>
              <article>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <PostMeta className="post-meta">
                    <Link
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <DateWrapper>
                      {post.frontmatter.date}
                    </DateWrapper>
                  </PostMeta>
                </header>
                <Excerpt>
                  {post.excerpt}
                </Excerpt>
              </article>
            </PostWrapper>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                # featuredimage {
                #   childImageSharp {
                #     fluid(maxWidth: 120, quality: 100) {
                #       ...GatsbyImageSharpFluid
                #     }
                #   }
                # }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

const PostMeta = styled('div')({

}, ({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '& a': {
    fontFamily: theme.fonts.title,
    color: 'inherit',
    // textTransform: 'uppercase',
    fontSize: 36,
    textDecoration: 'none',
    // paddingLeft: 20
  }
}), ({theme}) => ({
  [theme.media.sm]: {
    '& a': {
      fontSize: 28
    }
  }
}))

const PostWrapper = styled('div')({
  margin: '60px 0px',
  '&:first-of-type': {
    marginTop: 0
  },
  '&:last-child': {
    marginBottom: 0
  }
}, ({theme}) => ({
  [theme.media.sm]: {
    padding: '0px 20px',
  }
}))

const Excerpt = styled('p')`
  line-height: 1.5;
`

const DateWrapper = styled('span')({
  opacity: .5,
  fontStyle: 'italic'
})
