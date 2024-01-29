import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js'
import HeroSection from './components/heroSection/HeroSection';
import Skills from './components/skills/Skills';
import Navbar from './components/navbar/Navbar';
import Education from './components/education/Education';
import { BrowserRouter } from 'react-router-dom';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import ProjectDetails from "./components/projectDetails/ProjectDetails.jsx";
import Footer from './components/footer/Footer.js';
import { useState } from 'react';
import Contact from './components/contact/Contact.js';

const Body = styled.div`  
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  // margin-top: -40px;
`;


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal}/>
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
