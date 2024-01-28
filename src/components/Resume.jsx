import Button from '@mui/material/Button';

const Resume = () => {
    
    return (
        <div>
            <Button variant="outlined" onClick={()=>window.location.href='https://drive.google.com/file/d/1KXBGaHJ7u4vHwYq4maBBS1-oLFj--QAi/view?usp=sharing'} className="button">Resume</Button>
        </div>
    );
}

export default Resume;