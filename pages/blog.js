import MyLayout from '../components/layout'
import PageTitle from '../components/page-title'
import { PageBody } from '../components/styles'
import TagList from '../components/tag-list'
import { useQueryParam } from '../hooks/use-query-param'
import React from 'react'
import PostList from '../views/post-list'

const insertAllTag = (tags, count) =>
  !tags.map(tag => tag.title).includes(`All`) &&
  tags.unshift({ title: `All`, count })

const filterPostsByTag = (tag, posts) =>
  // If !tag, tag is null which stands for all posts.
  posts.filter(post => !tag || post.frontmatter.tags.includes(tag))

const BlogPage = ({ data }) => {
  /*const { allMdx, img } = data
  const { posts, tags } = allMdx
  const [activeTag, setActiveTag] = useQueryParam(`tag`)
  insertAllTag(tags, posts.length)
  const filteredPosts = filterPostsByTag(activeTag, posts)*/
  return (
    <>
      <PageTitle img='blog-banner.svg'>
        <h1>博文</h1>
      </PageTitle>
      <PageBody>
        
      </PageBody>
    </>
  )
}

BlogPage.Layout = MyLayout


export async function getStaticProps(context) {
  //const hero = await generateLazyImage('/pages/landing/oeschinen-lake.jpg')
    return {
        props: {  }, // will be passed to the page component as props
    }
}

export default BlogPage