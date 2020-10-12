import React from 'react'
import { Caption } from '../styles'
import { Img, PageTitleDiv } from './styles'

export default function PageTitle(props) {
  const { children, lyimg, source, caption, url, ...rest } = props
  return (
    <PageTitleDiv {...rest}>
      <Img src={lyimg.src} lqip={lyimg.lqip} />
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
