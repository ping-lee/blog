import Link from 'next/link'
import React from 'react'
import PostMeta from '../post-meta'
import { Cover, Post } from './styles'

export default function PostExcerpt({ post, noText }) {
  const { cover, slug, title } = post.data
  //console.log(post.data)
  return (
    <Post>
      <Link href={`/posts${slug}`}>
        <Cover src={`/posts/${cover.fileName}/${cover.img}`} />
      </Link>
      <h3 css="margin: 0.8em auto 0.5em;">
        <Link href={`/posts${slug}`}>{title}</Link>
      </h3>
      <PostMeta {...post.data} />
      
    </Post>
  )
}
