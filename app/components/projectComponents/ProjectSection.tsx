'use client'
import styled from 'styled-components'
import { Container, Section } from '../baseComponents/base'
import { H2 } from '../fontComponents/fonts'
import { Project } from '@/app/types/Types'
import { ProjectThumbnailComponent } from './ProjectThumbnailComponent'
import { theme } from '@/app/utils/appSettings/theme'

type Props = {
  headLine: string
  projects: Project[]
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  gap: ${theme.style.layout.gap};
`

const ProjectItem = styled.div``

export const ProjectSection = ({ headLine, projects }: Props) => {
  return (
    <Section>
      <Container>
        <H2>{headLine}</H2>
        <ProjectsContainer>
          {projects.map((project: Project) => {
            const thumbnailUrl = `https:${
              project.fields.projectThumbnail?.fields.file.url || ''
            }`
            const title = project.fields.title || 'No Title'
            const slug = project.fields.slug || 'no-slug'

            return (
              <ProjectItem key={project.sys.id}>
                <ProjectThumbnailComponent
                  title={title}
                  thumbnailUrl={thumbnailUrl}
                  slug={slug}
                />
              </ProjectItem>
            )
          })}
        </ProjectsContainer>
      </Container>
    </Section>
  )
}
