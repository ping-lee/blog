import { useState } from 'react'
import App from 'next/app'
import { GlobalStyle } from '../components/global/styles'
import { ThemeProvider  } from 'styled-components' 
import lightTheme from '../utils/theme/light'
import 'highlight.js/styles/github.css'
import 'katex/dist/katex.min.css'
import '../styles.css'

const Noop = ({ children }) => children

const ThemeWrapper =  ({children, Layout}) => {
    const [theme, setTheme] = useState(lightTheme)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout setTheme={setTheme} >{children}</Layout>
        </ThemeProvider>
    )
}

// 动态
export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        const Layout = Component.Layout || Noop
        return (
            <>
              <ThemeWrapper Layout={Layout} >
                <Component {...pageProps} />
              </ThemeWrapper>
            </>
        )
    }
}