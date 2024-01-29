import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectStyle'
import ProjectCard from '../card/project/ProjectCard'
import { projects } from '../../data/constants'

const Projects = ({openModal,setOpenModal}) => {

  return (
    <Container id='projects'>
        <Wrapper>
            <Title>Projects</Title>
            <Desc>I have worked on a wide range of projects. Here are some of my projects.</Desc>
            <br/>
            <CardContainer>
                { projects.map((project) => (
                    <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                ))}
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects