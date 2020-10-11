import React from 'react'
import { Caption } from '../styles'
import { Img, PageTitleDiv } from './styles'

export default function PageTitle(props) {
  const { children, img, source, caption, url, ...rest } = props
  console.log(img)
  let test = {src: img}
  return (
    <PageTitleDiv {...rest}>
      <Img {...test} />
      {children}
      {(caption || source) && (
        <Caption showOnHoverParent={PageTitleDiv}>
          <span dangerouslySetInnerHTML={{ __html: caption }} />
          {caption && source && ` | `}
          {source && (
            <span>
              来源： <a href={url}>{source}</a>
            </span>
          )}
        </Caption>
      )}
    </PageTitleDiv>
  )
}
