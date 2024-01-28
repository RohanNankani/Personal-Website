import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import React from 'react';

const BottomBar = () => {
    return (
        <Box sx={{width: 500}}>
            <BottomNavigation showLabels >
                <BottomNavigationAction
                    label="GitHub" icon={<GitHubIcon />}
                    href="https://github.com/RohanNankani" 
                    sx={{ '&:hover': { color: 'blue' } }}
                />
                <BottomNavigationAction
                label="LinkedIn" icon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/rohan-nankani/"
                sx={{ '&:hover': { color: 'blue' } }}
                />
                <BottomNavigationAction
                label="Email"
                icon={<AlternateEmailIcon />}
                href="/email" 
                sx={{ '&:hover': { color: 'blue' } }}
                />
            </BottomNavigation>
        </Box>
    );
}

export default BottomBar;