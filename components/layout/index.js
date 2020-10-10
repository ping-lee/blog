import { HeaderDiv, Logo, FooterDiv, PoweredBy, Icons } from './styles'
import Rss from '../rss'
import Nav from '../nav'
import DarkToggle from '../dark-toggle'
export default function Layout({ children }) {
    let title = ''
    let copyright = 'lee ping'
    let poweredBy = [
        { title: 'Gatsby', url: 'https://gatsbyjs.org'},
        { title: 'Github', url: 'https://github.com/janosh/blog'},
        { title: 'Netlify', url: 'https://netlify.com'},
    ]
    return (
        <>
          <HeaderDiv>
            <Logo href=''>{title}</Logo>
            <Nav />
            <DarkToggle />
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