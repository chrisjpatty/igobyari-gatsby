import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { ThemeProvider } from 'emotion-theming'
import SiteWrapper from './SiteWrapper'
import MobileMenu from './MobileMenu'
import theme from '../theme.js'

const TemplateWrapper = ({ children, hideNavigation }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      {
        menuOpen &&
        <MobileMenu />
      }
      <SiteWrapper menuOpen={menuOpen} onRequestMenuClose={() => setMenuOpen(false)}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          {/* <meta property="og:image" content="/img/og-image.jpg" /> */}
        </Helmet>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Navbar hideNavigation={hideNavigation} onRequestMenuOpen={() => setMenuOpen(true)} />
            <div>{children}</div>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </SiteWrapper>
    </React.Fragment>
  )
}

export default TemplateWrapper
