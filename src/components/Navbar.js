import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

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

const Branding = styled('h1')({
  textAlign: 'center'
})

const Nav = styled('nav')({

})
