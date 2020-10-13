import styled, { css } from 'styled-components'
import { ArrowLeft, ArrowRight } from 'styled-icons/fa-solid'
import Link from 'next/link'
import MyLayout from '../components/layout'
import { getPostBySlug } from '../utils/api'
import PageTitle from '../components/post-title'
import LazyImage from '../components/lazy-img'
import generateLazyImage from '../utils/generate-lazy-image'
import { mediaQueries } from '../utils/media-queries'
import Scroll from '../components/scroll'
import { PageBody } from '../components/styles'
import markdownToHtml from '../utils/markdown-to-html'

const HomePage = ({ title, profil, hero, me }) => {
  

    return (
        <>
          <PageTitle hero={hero} css="min-height: 35em">
            <Title>
              {title.split(`, `).map(str => (
                <Link key={str} href={`/` + str.toLowerCase()}>
                  {str}
                </Link>
              ))}
            </Title>
            <Scroll direction="down" to={1} />
          </PageTitle>
          <PageBody>
            <Me src={me.src} lqip={me.lqip} />
            <div dangerouslySetInnerHTML={{ __html: profil }} />
            <H>最近博文</H>
          </PageBody>
        </>
    )
}

HomePage.Layout = MyLayout

export async function getStaticProps(context) {
    let mdx = getPostBySlug('landing')
    const { data, content } = mdx
    const title = data.title
    const hero = await generateLazyImage('/pages/loading/oeschinen-lake.jpg')
    const me = await generateLazyImage('/pages/loading/me.jpg')
    const profil = await markdownToHtml(content)
  return {
    props: { title, profil, hero, me }, // will be passed to the page component as props
  }
}

export default HomePage


const Me = styled(LazyImage)`
  border-radius: 50%; 
  justify-self: center;
  height: 175px!important;
  width: 175px!important;
`

const Title = styled.h1`
  text-align: center;
  margin-top: 4em!important;
  padding: 0 !important;
  display: grid;
  a {
    padding: 0.4em;
    color: white;
    ${mediaQueries.maxPhone} {
      & + a {
        border-top: 0.5px solid rgba(255, 255, 255, 0.9);
      }
    }
  }
  ${mediaQueries.minPhone} {
    grid-template-columns: 1fr 1fr;
    a {
      :nth-child(2),
      :nth-child(3) {
        background: rgba(0, 0, 255, 0.2);
      }
    }
  }
`

const iconCss = css`
  width: 0.6em;
  vertical-align: 0;
  margin: 0 0.4em;
`

const H = ({ children, as }) => (
  <h1 as={as} css="text-align: center;">
    <ArrowLeft css={iconCss} />
    {children}
    <ArrowRight css={iconCss} />
  </h1>
)