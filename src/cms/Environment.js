import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'

class CSSInjector extends React.Component {
  constructor() {
    super()
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHead = iframe.contentDocument.head
    this.cache = createCache({ container: iframeHead })
  }

  render() {
    return (
      <CacheProvider value={this.cache}>
        {this.props.children}
      </CacheProvider>
    )
  }
}

export default ({ children }) => (
  <CSSInjector>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </CSSInjector>
);
