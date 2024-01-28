const ProjectsContent = () => {

    return (
        <div style={{ marginBottom: '50px' }}>
            <div className="project1">
                <h1>Laser Guitar</h1>
                <img className="laser-guitar" src={require('./media/laser-guitar.png')} alt="bike-lock-system" onClick={() =>window.location.href='https://drive.google.com/file/d/14ecZHMNJNbcxxaXx9ucgOcQK7K-yTud7/view?usp=sharing'}/>
            </div>
            <div className="project2">
                <h1>WatLock</h1>
                <img className="bike-lock" src={require('./media/bike-lock-system.jpeg')} alt="bike-lock-system" onClick={() =>window.location.href='https://docs.google.com/document/d/1PNpgQR8JWX5Lrf9fC2HCVdcIB_RdznL3inmq-L1fUNw/edit?usp=sharing'}/>
            </div>
            <div className="project3">
                <h1>Lyft's Backend V.E. Program</h1>
                <img className="lyfts-back-end" src={require('./media/refactored_uml.png')} alt="lyfts-back-end" onClick={() =>window.location.href='https://github.com/RohanNankani/forage-lyft-starter-repo?tab=readme-ov-file'}/>
            </div>
            <div className="project4">
                <h1>JP Morgan V.E. Program</h1>
                <img className="jp-swe" src={require('./media/jp-certificate.png')} alt="jp-certificate" onClick={() =>window.location.href='https://github.com/RohanNankani/forage-jpmc-swe-task-1'}/>
            </div>
        </div>
    );
}

export default ProjectsContent;