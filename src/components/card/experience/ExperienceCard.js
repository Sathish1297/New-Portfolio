import React from 'react'
import { Card, Top, Body, Role, Company, Description, Document, Span, Image, Date, Skills, ItemWrapper, Skill } from './ExperienceCardStyle'

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
        <Top>
            <Image src={experience.img} />
            <Body>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Date>{experience.date}</Date>
            </Body>
        </Top>
        <Description>{experience.desc}
          {experience?.skills && 
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience.skills.map((skill) => (
                  <Skill>{skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>}
        </Description>
        {experience.doc && (
          <a href={experience.doc} target='new'>
            <Document src={experience.doc}/>
          </a>
        )}
    </Card>
  )
}

export default ExperienceCard