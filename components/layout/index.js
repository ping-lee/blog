import { HeaderDiv, Logo, FooterDiv, PoweredBy, Icons } from './styles'
import Rss from '../rss'
import Nav from '../nav'
import DarkToggle from '../dark-toggle'
import Search from '../search'

export default function Layout({ children }) {
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
            <Logo href=''>{title}</Logo>
            <Nav />
            <DarkToggle />
            {/** <Search indices={searchIndices} /> */}
          </HeaderDiv>
          {children}
          <FooterDiv>
            <span>
                © {new Date().getFullYear()} - {copyright}
                &emsp; <Rss />
            </span>
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