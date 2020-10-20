import MyLayout from '../components/layout'
import PageTitle from '../components/page-title'
import { PageBody } from '../components/styles'
import TagList from '../components/tag-list'
import { useQueryParam } from '../hooks/use-query-param'
import React from 'react'
import PostList from '../views/post-list'
import generateLazyImage from '../utils/generate-lazy-image'
import { getPostBySlug, getAllPosts } from '../utils/api'


const insertAllTag = (tags, count) =>
  !tags.map(tag => tag.title).includes(`All`) &&
  tags.unshift({ title: `All`, count })

const filterPostsByTag = (tag, posts) =>
  // If !tag, tag is null which stands for all posts.
  posts.filter(post => !tag || post.data.tags.includes(tag))

const BlogPage = ({ hero, posts }) => {
  // temp
  let tags = [
    {
      "title": "Design",
      "count": 3
    },
    {
      "title": "Future",
      "count": 2
    },
    {
      "title": "JS",
      "count": 13
    },
    {
      "title": "Machine Learning",
      "count": 3
    },
    {
      "title": "Physics",
      "count": 2
    },
    {
      "title": "Python",
      "count": 3
    },
    {
      "title": "Science",
      "count": 5
    },
    {
      "title": "Statistics",
      "count": 4
    },
    {
      "title": "Sustainability",
      "count": 2
    },
  ]
  const [activeTag, setActiveTag] = useQueryParam(`tag`)
  insertAllTag(tags, posts.length)
  const filteredPosts = filterPostsByTag(activeTag, posts)
  return (
    <>
      <PageTitle hero={hero}>
        <h1>博文</h1>
      </PageTitle>
      <PageBody>
        <TagList {...{ tags, activeTag, setActiveTag }} />
        <PostList inBlog posts={filteredPosts} />
      </PageBody>
    </>
  )
}

BlogPage.Layout = MyLayout


export async function getStaticProps(context) {
  const hero = await generateLazyImage('/blog-banner.png')
  const posts = await getAllPosts('/posts')
  //console.log(posts)
    return {
        props: { hero, posts }, // will be passed to the page component as props
    }
}

export default BlogPage