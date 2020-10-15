//import { CommentCount } from 'disqus-react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import { Comments } from 'styled-icons/fa-solid'
import { Timer } from 'styled-icons/material'
import { Calendar } from 'styled-icons/octicons'
//import { disqusConfig } from 'templates/post'
import { Meta, TagList } from './styles'

const PostMeta = ({ title, slug, dateFormated, timeToRead, tags, inTitle = false }) => (
  <Meta inTitle={inTitle}>
    <span>
      <Calendar size="1.2em" />
      &ensp;
      {dateFormated}
    </span>
    <span>
      <Timer size="1.2em" />
      &ensp;
      {timeToRead.readingTime} 分钟
    </span>
    <span>
      <Comments size="1.2em" />
      &ensp;
      <Link href={slug + `#disqus_thread`}>
        56
      </Link>
    </span>
    <TagList tags={tags} />
  </Meta>
)

export default PostMeta

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.object.isRequired,
  inTitle: PropTypes.bool,
}
