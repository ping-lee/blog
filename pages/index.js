import styled, { css } from 'styled-components'
import { ArrowLeft, ArrowRight } from 'styled-icons/fa-solid'
import Link from 'next/link'
import MyLayout from '../components/layout'
import { getPostBySlug, getAllPosts } from '../utils/api'
import PageTitle from '../components/post-title'
import LazyImage from '../components/lazy-img'
import generateLazyImage from '../utils/generate-lazy-image'
import { mediaQueries } from '../utils/media-queries'
import Scroll from '../components/scroll'
import { PageBody } from '../components/styles'
import markdownToHtml from '../utils/markdown-to-html'
import PostList from '../views/post-list'
import { ProjectList } from '../views/web'

const HomePage = ({ posts, hero, me, landingmd, profil, projects }) => {
  const { data } = landingmd
  const title = data.title
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
              <PostList asRow noText posts={posts} />
            <H>最近项目</H>
              <ProjectList asRow projects={projects}  />
          </PageBody>
        </>
    )
}

HomePage.Layout = MyLayout

export async function getStaticProps(context) {
  // profil
    let landingmd = getPostBySlug('/pages/landing/landing')
    //const { data, content } = mdx
    //const title = data.title
    // img
    const hero = await generateLazyImage('/pages/landing/oeschinen-lake.jpg')
    const me = await generateLazyImage('/pages/landing/me.jpg')
    const profil = await markdownToHtml(landingmd.content)
    // posts
    // posts 的content应转为html
    const posts = await getAllPosts('/posts')
    // projects

    const projects = await getAllPosts('pages/web/projects')
    //console.log(projects)
    //console.log(posts)
  
  return {
    props: { posts, hero, me, landingmd, profil, projects }, // will be passed to the page component as props
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
  margin-left: 1em;
  margin-right: 1em;
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
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    max-width: 300px;
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