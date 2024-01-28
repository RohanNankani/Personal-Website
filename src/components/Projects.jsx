import { useState } from "react";
import Button from '@mui/material/Button';
import ProjectsContent from "./content/ProjectsContent";

const Projects = () => {
    const [isProjectsVisible, setisProjectsVisible] = useState(false);

    const isProjectsVisibleToggler = () => {
        setisProjectsVisible(!isProjectsVisible);
    }

    return ( 
        <div className="projects">
            <Button variant="outlined" onClick={isProjectsVisibleToggler} className="button">Projects</Button>
            {isProjectsVisible && 
            <div className="projects-container">
                <ProjectsContent/>
            </div>
            }
        </div>
    );
}

export default Projects;

