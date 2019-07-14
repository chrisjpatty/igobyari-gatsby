import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { Link } from 'gatsby'

const MobileMenu = () => (
  <MenuWrapper>
    <Link css={linkStyles} to='/'>
      <Branding>
        I GO BY ARI
      </Branding>
    </Link>
    <LinkWrapper>
      <Link css={linkStyles} to='/life'>Life</Link>
      <Link css={linkStyles} to='/humor'>Humor</Link>
      <Link css={linkStyles} to='/faith'>Faith</Link>
      <Link css={linkStyles} to='/culture'>Culture</Link>
      <Link css={linkStyles} to='/adventure'>Adventure</Link>
      <Link css={linkStyles} to='/freelance'>Freelance</Link>
    </LinkWrapper>
  </MenuWrapper>
)

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const MenuWrapper = styled('div')`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 400ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: transform;
`

const Branding = styled('h1')`
  text-align: right;
  color: #ffffff;
  text-decoration: none;
  padding-right: 10%;
  width: 100%;
`

const linkStyles = css`
  text-decoration: none;
  width: 100%;
`

const LinkWrapper = styled('nav')`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  margin-top: 20px;
  width: 100%;
  padding-right: 10%;
  a{
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    margin-bottom: 35px;
    font-size: 30px;
    text-align: right;
    width: 100%;
  }
`

export default MobileMenu
