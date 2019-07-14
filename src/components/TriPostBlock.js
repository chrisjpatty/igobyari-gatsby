import React from 'react'
import styled from '@emotion/styled'
import PostBlock from './PostBlock'

const TriPostBlock = ({posts}) => (
  <Row>
    {
      posts.map((post, i) => (
        <PostBlock post={post} key={i} />
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
  @media(max-width: ${({theme}) => theme.breakpoints.md + 100}px){
    flex-direction: column;
    align-items: center;
  }
`

export default TriPostBlock
