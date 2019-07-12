import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import FeaturedImage from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ShareIcons from '../components/ShareIcons'
import RelatedPosts from '../components/RelatedPosts'

export const BlogPostTemplate = ({
  htmlAst,
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredimage,
  date,
  helmet,
  slug,
  relatedPosts
}) => {
  const PostContent = contentComponent || Content
  return (
    <PageWrapper>
      {helmet || ''}
      {
        featuredimage &&
        <FeaturedImage className='featured-image' fluid={featuredimage.childImageSharp.fluid} />
      }
      <Title>
        {title}
      </Title>
      <DateWrapper>
        {date}
      </DateWrapper>
      <ShareIcons slug={slug} />
      <Description>{description}</Description>
      <ContentWrapper>
        <PostContent htmlAst={htmlAst} content={content} />
      </ContentWrapper>
      <RelatedPosts posts={relatedPosts} />
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
  // content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { current: post, relatedPost1, relatedPost2, relatedPost3 } = data
  return (
    <Layout>
      <BlogPostTemplate
        htmlAst={post.htmlAst}
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
        date={post.frontmatter.date}
        featuredimage={post.frontmatter.featuredimage}
        slug={post.fields.slug}
        relatedPosts={[
          relatedPost1,
          relatedPost2,
          relatedPost3
        ]}
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
  query BlogPostByID($id: String!, $relatedId1: String!, $relatedId2: String!, $relatedId3: String!) {
    current: markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      fields{
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage{
          childImageSharp{
            fluid{
              tracedSVG
              aspectRatio
              src
              srcSet
              sizes
              presentationWidth
              presentationHeight
            }
          }
        }
        description
        tags
      }
    }
    relatedPost1: markdownRemark(id: { eq: $relatedId1 }) {
      fields {
        slug
      }
      frontmatter {
        title
        featuredimage{
          childImageSharp{
            fixed(width: 350, height: 200){
              tracedSVG
              aspectRatio
              src
              width
              height
            }
          }
        }
      }
    }
    relatedPost2: markdownRemark(id: { eq: $relatedId2 }) {
      fields {
        slug
      }
      frontmatter {
        title
        featuredimage{
          childImageSharp{
            fixed(width: 350, height: 200){
              tracedSVG
              aspectRatio
              src
              width
              height
            }
          }
        }
      }
    }
    relatedPost3: markdownRemark(id: { eq: $relatedId3 }) {
      fields {
        slug
      }
      frontmatter {
        title
        featuredimage{
          childImageSharp{
            fixed(width: 350, height: 200){
              tracedSVG
              aspectRatio
              src
              width
              height
            }
          }
        }
      }
    }
  }
`

const PageWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .featured-image': {
    width: '100%',
    maxWidth: 1200,
    maxHeight: 700
  }
})

const Title = styled('h1')({
  fontSize: 50,
  textAlign: 'center',
  width: '100%',
  maxWidth: 900,
  marginBottom: 0,
  // fontStyle: 'italic',
  fontWeight: 400,
}, ({theme}) => ({
  [theme.media.sm]: {
    fontSize: 35,
    padding: '0px 15px'
  }
}))

const DateWrapper = styled('span')({
  textAlign: 'center',
  marginTop: 30
})

const Description = styled('p')({

})

const ContentWrapper = styled('article')({
  width: '100%',
  maxWidth: 900,
  fontSize: 21,
  fontWeight: 300,
  lineHeight: 1.6,
  padding: '0px 20px',
  '& p': {
    // textAlign: 'justify'
  },
  '& img': {
    maxWidth: '100%'
  },
  '&::first-letter': {
    fontSize: '475%',
    fontStyle: 'normal',
    fontWeight: 400,
    verticalAlign: 'top',
    lineHeight: .6,
    float: 'left',
    padding: '18px 0px 15px 0px',
    marginRight: 13,
    // background: '#000000',
    marginTop: 0,
    // color: '#fff',
    // borderRadius: 3,
    fontFamily: "'Marcellus', serif",
    textTransform: 'uppercase'
  }
}, ({theme}) => ({
  [theme.media.sm]: {
    fontSize: 18,
    padding: '0px 20px'
  }
}))

/*
fontSize: '380%',
fontStyle: 'normal',
fontWeight: 600,
verticalAlign: 'top',
lineHeight: .6,
float: 'left',
padding: '18px 10px 15px 5px',
marginRight: 15,
background: '#000000',
marginTop: 10,
color: '#fff',
// borderRadius: 3,
fontFamily: "'Marcellus', serif"*/
