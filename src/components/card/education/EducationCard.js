import React from 'react'
import { Card, Top, Body, Name, Description, Degree, Document, Grade, Span, Image, Date, Skills, ItemWrapper, Skill } from './EducationCardStyle'

const EducationCard = ({ education }) => {
  return (
    <Card>
        <Top>
            <Image src={education.img} />
            <Body>
                <Name>{education.school}</Name>
                <Degree>{education.degree}</Degree>
                <Date>{education.date}</Date>
            </Body>
        </Top>
        {education.grade && <Grade>Grade: {education?.grade}</Grade>}
        <Description>
            <Span>{education.desc}</Span>
        </Description>
    </Card>
  )
}

export default EducationCard