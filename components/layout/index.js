import { HeaderDiv, Logo, FooterDiv, PoweredBy, Icons, Copyright } from './styles'
import { RSS } from '../rss'
import Nav from '../nav'
import DarkToggle from '../dark-toggle'
import Search from '../search'

export default function Layout({ children, setTheme }) {
    let title = 'LP'
    let copyright = 'lee ping'
    let poweredBy = [
        { title: 'Gatsby', url: 'https://gatsbyjs.org'},
        { title: 'Github', url: 'https://github.com/janosh/blog'},
        { title: 'Netlify', url: 'https://netlify.com'},
    ]
    const searchIndices = [
      { name: `Pages`, title: `Pages` },
      { name: `Posts`, title: `Blog Posts`, type: `postHit` },
    ]
    return (
        <>
          <HeaderDiv>
            {/**<Logo href='/'>{title}</Logo> */}
            <Nav />
            <DarkToggle setTheme={setTheme} />
            <Search indices={searchIndices} />
          </HeaderDiv>
          {children}
          <FooterDiv>
            <Copyright>
                © {new Date().getFullYear()} - {copyright}
                &emsp; <RSS />
            </Copyright>
            <PoweredBy>
                支持：&ensp;
                {poweredBy.map(({ url, title }) => {
                const Icon = Icons[title]
                return (
                    <a key={title} href={url} aria-label={title}>
                    <Icon size="1.4em" />
                    </a>
                )
                })}
            </PoweredBy>
          </FooterDiv>
        </>
    )
  }