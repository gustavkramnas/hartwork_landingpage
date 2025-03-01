'use client'
import styled from 'styled-components'
import { Container, FadeSection, Heading, Slide } from '../baseComponents/base'
import { Project } from '@/app/types/Types'
import { ProjectThumbnailComponent } from './ProjectThumbnailComponent'
import { theme } from '@/app/utils/appSettings/theme'

type Props = {
  headLine: string
  projects: Project[]
  h1?: boolean
}

const ItemsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: ${theme.style.layout.gap};
  max-width: calc(${theme.style.layout.sizes.maxWidth} + 140px);
  padding-top: 20px;
`

const ProjectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const ProjectSection = ({ headLine, projects, h1 }: Props) => {
  return (
    <FadeSection>
      <Container>
        <Slide>
          <Heading h1={h1}>{headLine}</Heading>
        </Slide>
      </Container>
      <ItemsContainer>
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
      </ItemsContainer>
    </FadeSection>
  )
}
