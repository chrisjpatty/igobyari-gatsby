import React from 'react'
import styled from '@emotion/styled'
import PostBlock from './PostBlock'

const TriPostBlock = ({posts}) => (
  <Row>
    {
      posts.map(post => (
        <PostBlock post={post} />
      ))
    }
  </Row>
)

const Row = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
`

export default TriPostBlock
