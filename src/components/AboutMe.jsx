import { useState } from "react";
import Button from '@mui/material/Button';
import AboutMeContent from "./content/AboutMeContent";


const AboutMe = () => {
    const [isContentVisible, setisContentVisible] = useState(false);

    const isContentVisibleToggler = () => {
        setisContentVisible(!isContentVisible);
    }

    return ( 
        <div className="about-me">
                <Button variant="outlined" onClick={isContentVisibleToggler} className="button">About Me</Button>
            {isContentVisible && 
                <div className="about-me-container">
                    <AboutMeContent/>
                </div>
            }
        </div>
    );
}

export default AboutMe;
