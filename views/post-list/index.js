import React from 'react'
import PostExcerpt from '../../components/post-excerpt'
import { PostGrid } from './styles'

export default function PostList({ posts, noText, ...rest }) {
  return (
    <PostGrid minWidth="17em" maxWidth="24em" gap="1.5em" {...rest}>
      {posts.map(post => (
        <PostExcerpt key={post.data.slug} post={post} noText={noText} />
      ))}
    </PostGrid>
  )
}
