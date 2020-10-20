import Link from 'next/link'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/media-queries'
import { Gatsby, Github, Netlify } from 'styled-icons/simple-icons'


export const HeaderDiv = styled.header`
  background: ${props => props.theme.colors.b};
  position: sticky;
  top: 0;
  display: grid;
  grid-gap: calc(1em + 1vw);
  z-index: 4;
  //padding: 1em;
  color: white;
  font-size: 1.2em;
  grid-template-areas: 'nav title darkmode search';
  grid-template-columns: auto 1fr auto auto;
  border-bottom: 1px solid ${props => props.theme.colors.a};
  ${mediaQueries.minTablet} {
    grid-template-areas: 'title nav darkmode search';
  }
`

export const Logo = styled.a`
  //grid-area: title;
  //font-size: 2.4em;
  transform: scale(1, 0.85);
  color: inherit;
  place-self: center;
`

export const FooterDiv = styled.footer`
  background: ${props => props.theme.colors.b};
  padding: 5vh 5vw;
  color: white;
  a {
    color: ${props => props.theme.colors.lightLink};
  }
  display: grid;
  place-items: center;
  grid-template-areas:
    'copyright'
    'source'
    'poweredBy';
  grid-gap: 4vh 6vw;
  
  ${mediaQueries.minTablet} {
    grid-template-areas: 'copyright source poweredBy';
  }
`

export const Copyright = styled.span`
  margin-left: -13px;
`

export const PoweredBy = styled.div`
  grid-area: poweredBy;
  > a {
    padding: 0 0.5em;
  }
`

export const Icons = {
  Gatsby,
  Github,
  Netlify,
}
