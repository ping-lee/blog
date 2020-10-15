import React, { useState } from 'react'
import Project from './project'
import { Modal, ProjectGrid, Thumbnail } from './styles'
import { useQueryParam } from '../../hooks/use-query-param'
import LazyImage from '../../components/lazy-img'

export function ProjectList({ projects, asRow }) {
  //console.log(`pages/web/projects/${projects[0].data.cover.fileName}/${projects[0].data.cover.img}`)
  const [urlProject, setUrlProject] = useQueryParam(`project`)
  //console.log(urlProject, setUrlProject)
  const urlProjIdx = projects
    .map(p => p.data.title)
    .findIndex(title => title === urlProject)
  //console.log(urlProjIdx,'urlProjIdx')

  const [modal, setModal] = useState(urlProjIdx)

  const project = modal >= 0 && modal < projects.length && projects[modal]

  const setter = idx => {
    setUrlProject(projects[idx]?.data.title ?? null)
    setModal(idx)
  }
  return (
    <ProjectGrid minWidth="15em" gap="1em" asRow>
      {projects.map(({ data: { title, cover } }, index) => (
        <Thumbnail key={title} onClick={() => setter(index)}>
          <LazyImage src={`pages/web/projects/${cover.fileName}/${cover.img}`}/>
          <h3>{title}</h3>
        </Thumbnail>
      ))}
      <Modal open={project} modal={modal} setModal={setter}>
        <Project {...project.data} body={project.content} />
      </Modal>
    </ProjectGrid>
  )
}
