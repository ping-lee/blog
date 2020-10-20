import PageTitle from '../../components/page-title'
import PostMeta from '../../components/post-meta'
//import PrevNext from 'components/PrevNext'
import { PageBody } from '../../components/styles'
import Toc from '../../components/toc'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../../utils/api'
import generateLazyImage from '../../utils/generate-lazy-image'
import markdownToHtml from '../../utils/markdown-to-html'
import MyLayout from '../../components/layout'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'


const PostTemplate = ({ data, hero, body }) => {
  const { title, showToc, timeToRead } = data
  return (
    <>
       <PageTitle hero={hero}>
        <h1>{title}</h1>
        <PostMeta inTitle {...{ ...data, timeToRead }} />
      </PageTitle>
      <PageBody>
        {showToc && <Toc />}
        <div className='postcontent' dangerouslySetInnerHTML={{ __html: body }} />
        {/** <PrevNext prev={prev?.data} next={next?.data} label="post" /> */}
      </PageBody>
    </>
  )
}


export async function getStaticProps({ params }) {
  const posts = await getAllPosts('/posts')
  let post = posts.filter( x => x.data.slug == `/${params.slug}`)
  let { data, content } = post[0]
  let { cover } = data
  let { img, fileName} = cover
  let hero = await generateLazyImage(`/posts/${fileName}/${img}`)
  let body = await markdownToHtml(content)
  return {
    props: {
      data,
      hero,
      body,
    },
  }
}

PostTemplate.Layout = MyLayout

export async function getStaticPaths() {
  const posts = await getAllPosts('/posts')
  let slugs = posts.map(x => `/posts${x.data.slug}`)
  return {
    paths: slugs,
    fallback: false,
  }
}

export default PostTemplate