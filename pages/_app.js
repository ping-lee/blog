import App from 'next/app'
import { GlobalStyle } from '../components/global/styles'
import { ThemeProvider } from 'styled-components' //全局样式
import { theme } from '../utils/theme' //主题

const Noop = ({ children }) => children

// 动态
export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        const Layout = Component.Layout || Noop

        return (
            <>
              <GlobalStyle />
              <ThemeProvider theme={theme} >
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
              </ThemeProvider>
            </>
        )
    }
}