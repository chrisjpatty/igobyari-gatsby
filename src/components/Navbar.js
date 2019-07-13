import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const Navbar = class extends React.Component {
  render() {
    return (
      <Header>
        <Link to='/'>
          <Branding>
            I GO BY ARI
          </Branding>
        </Link>
        <Nav
          role="navigation"
          aria-label="main-navigation"
        >
          <Link css={linkStyles} to='/life'>Life</Link>
          <Link css={linkStyles} to='/humor'>Humor</Link>
          <Link css={linkStyles} to='/faith'>Faith</Link>
          <Link css={linkStyles} to='/culture'>Culture</Link>
          <Link css={linkStyles} to='/adventure'>Adventure</Link>
          <Link css={linkStyles} to='/freelance'>Freelance</Link>
        </Nav>
      </Header>
    )
  }
}

export default Navbar

const Header = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& a': {
    textDecoration: 'none',
    color: 'inherit'
  }
})

const Branding = styled('h1')`
  text-align: center;
`

const Nav = styled('nav')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const linkStyles = css`
  margin: 0px 10px;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  &:hover{
    border-bottom: 2px solid #aaaaaa;
  }
`
