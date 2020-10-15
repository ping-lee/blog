import React from 'react'
import { Grid } from '../../components/styles'

export function TechStack() {
  let tech = [
      {title: Algolia, url: 'https://algolia.com', logo: 'logos/algolia.svg'}
  ]
  return (
    <Grid minWidth="5em" align="center">
      {tech.map(({ title, url, logo }) => (
        <a
          key={title}
          href={url}
          css="transition: 0.4s; :hover {transform: scale(1.05);}"
        >
          <span css="font-size: 0.85em;">{title}</span>
          <img src={logo.dataURI || logo.src} alt={title} />
        </a>
      ))}
    </Grid>
  )
}
