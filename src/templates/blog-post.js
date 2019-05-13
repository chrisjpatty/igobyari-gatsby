import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import styled from '@emotion/styled'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <PageWrapper>
      {helmet || ''}
      <Title>
        {title}
      </Title>
      <Description>{description}</Description>
      <ContentWrapper>
        <PostContent content={content} />
      </ContentWrapper>
      {/* {tags && tags.length ? (
        <div>
          <h4>Tags</h4>
          <ul>
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null} */}
    </PageWrapper>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

const PageWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const Title = styled('h1')({
  fontSize: 50,
  textAlign: 'center',
  width: '100%',
  maxWidth: 700,
  marginBottom: 0,
  fontStyle: 'italic',
  fontWeight: 400,
}, ({theme}) => ({
  [theme.media.sm]: {
    fontSize: 35,
    padding: '0px 15px'
  }
}))

const Description = styled('p')({

})

const ContentWrapper = styled('article')({
  width: '100%',
  maxWidth: 700,
  fontSize: 20,
  '& p': {
    // textAlign: 'justify'
  }
}, ({theme}) => ({
  [theme.media.sm]: {
    fontSize: 18,
    padding: '0px 20px'
  }
}))
