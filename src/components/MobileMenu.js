import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { Link } from 'gatsby'

const MobileMenu = () => (
  <MenuWrapper>
    <Link css={linkStyles} style={{animationDelay: '150ms'}} to='/'>
      <Branding>
        I GO BY ARI
      </Branding>
    </Link>
    <LinkWrapper>
      <Link css={linkStyles} style={{animationDelay: '200ms'}} to='/life'>Life</Link>
      <Link css={linkStyles} style={{animationDelay: '250ms'}} to='/humor'>Humor</Link>
      <Link css={linkStyles} style={{animationDelay: '300ms'}} to='/faith'>Faith</Link>
      <Link css={linkStyles} style={{animationDelay: '350ms'}} to='/culture'>Culture</Link>
      <Link css={linkStyles} style={{animationDelay: '400ms'}} to='/adventure'>Adventure</Link>
      <Link css={linkStyles} style={{animationDelay: '450ms'}} to='/freelance'>Freelance</Link>
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

const fadeInLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-25%);
  }
  to{
    opacity: 1;
    transform: translateX(0%);
  }
`

const MenuWrapper = styled('div')`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${'' /* animation: ${fadeIn} 400ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards; */}
  will-change: transform;
`

const Branding = styled('h1')`
  text-align: right;
  color: #ffffff;
  text-decoration: none;
  padding-right: 15%;
  width: 100%;
`

const linkStyles = css`
  text-decoration: none;
  width: 100%;
  opacity: 0;
  animation: ${fadeInLeft} 400ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
`

const LinkWrapper = styled('nav')`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  margin-top: 20px;
  width: 100%;
  padding-right: 15%;
  a{
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    margin-bottom: 5vh;
    font-size: 30px;
    text-align: right;
    width: 100%;
  }
`

export default MobileMenu
