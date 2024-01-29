import React from 'react'
import { Bio } from '../../data/constants';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import TypeWriter from 'typewriter-effect'
import HeroBgAnimation from '../heroBgAnimation/HeroBgAnimation'
import Sathish from '../../images/Sathish.jpeg'

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        {/* <HeroBg>
          <HeroBgAnimation />
        </HeroBg> */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a 
              <Span>
                <TypeWriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                  />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_Blank">Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={Sathish}></Img>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection