import React from 'react'
import styled from '@emotion/styled'
// import { Link } from 'gatsby'

const FooterComponent = class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Footer>
          © Arianna Rees {new Date().getFullYear()}
        </Footer>
      </Wrapper>
    )
  }
}

export default FooterComponent

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const Footer = styled('footer')({
  width: '100%',
  maxWidth: 700,
  textAlign: 'left',
  flex: '1 0 auto',
  padding: '30px 0px'
})
