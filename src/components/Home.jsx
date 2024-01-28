import AboutMe from "./AboutMe";
import Projects from "./Projects";
import * as React from 'react';
import BottomBar from "./BottomNavigation";
import Resume from "./Resume"

const Home = () => {
    return(
        <div className="home">
            <h1 className="name">Rohan Nankani</h1>
            <img src={require('.//profilepic.jpeg')} alt="Profile Pic"/>
            <div className="buttons">
                <AboutMe/>
                <Projects/>
                <Resume/>
            </div>
            <div className="bottom-navigation">
                <BottomBar/>
            </div>
        </div>
    );
}

export default Home;