import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ProjectsContent from "./content/ProjectsContent";
import AboutMeContent from "./content/AboutMeContent";
import * as React from 'react';
import { useState } from "react";
import BottomBar from "./BottomNavigation";
import Button from '@mui/material/Button';
import Resume from "./Resume"

const Home = () => {
    const [isProjectsVisible, setisProjectsVisible] = useState(false);
    const [isAboutMeVisible, setisAboutMeVisible] = useState(false);

    const isProjectsVisibleToggler = () => {
        if(!isProjectsVisible && isAboutMeVisible) {
            setisAboutMeVisible(!isAboutMeVisible);
        }
        setisProjectsVisible(!isProjectsVisible);
    }

    const isAboutMeVisibleToggler = () => {
        if(!isAboutMeVisible && isProjectsVisible) {
            setisProjectsVisible(!setisProjectsVisible);
        }
        setisAboutMeVisible(!isAboutMeVisible);
    }

    return(
        <div className="home">
            <h1 className="name">Rohan Nankani</h1>
            <img src={require('.//profilepic.jpeg')} alt="Profile Pic"/>

            <div className="buttons">
                <div>
                    <Button variant="outlined" onClick={isAboutMeVisibleToggler}>About Me</Button>
                    {isAboutMeVisible && 
                        <div className="about-me-container">
                            <AboutMeContent/>
                        </div>
                    }
                </div>
                <div>
                    <Button variant="outlined" onClick={isProjectsVisibleToggler}>Projects</Button>
                    {isProjectsVisible && 
                        <div className="projects-container">
                            <ProjectsContent/>
                        </div>
                    }
                </div>
                <div>
                    <Button variant="outlined" onClick={()=>window.location.href='https://drive.google.com/file/d/1KXBGaHJ7u4vHwYq4maBBS1-oLFj--QAi/view?usp=sharing'} className="button">Resume</Button>
                </div>
            </div>
            <div className="bottom-navigation">
                <BottomBar/>
            </div>
        </div>
    );
}

export default Home;
