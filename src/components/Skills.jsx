import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Skill from '../components/Skill';
import CIcon from '../static/img/c_icon.png';
import PythonIcon from '../static/img/python_icon.png';
import TypescriptIcon from '../static/img/typescript_icon.png';
import ReactIcon from '../static/img/react_icon.png';
import SolidityIcon from '../static/img/solidity_icon.png';

// this component of skills part.
function Skills() {
    const skill1 = {
        language: "C#",
        description: "I have experienced C# for 3 years at an IT company in Japan. This is my fundamental skill.",
        image: CIcon,
        imageLabel: "c#-icon"
    }

    const skill2 = {
        language: "Python",
        description: "I write scripts by python to make my life be more convenient. In addition, I solve some algorithm problems by python.",
        image: PythonIcon,
        imageLabel: "python-icon"
    }

    const skill3 = {
        language: "Typescript",
        description: "I develop blockchain applications using typescript and Node.js.",
        image: TypescriptIcon,
        imageLabel: "typescript-icon"
    }

    const skill4 = {
        language: "React",
        description: "This site is created by React and Material UI. I can use Next.js, as well.",
        image: ReactIcon,
        imageLabel: "react-icon"
    }

    const skill5 = {
        language: "Solidity",
        description: "My interest. I am learning it by creating my personal Dapp.",
        image: SolidityIcon,
        imageLabel: "solidity-icon"
    }

    const skills = [
        skill1, skill2, skill3, skill4, skill5
    ]

    return (
        <Grid container spacing={2} sx={{ marginTop: '1px' }}>
            <Grid item xs={12} md={12} lg={12} sx={{ backgroundColor: 'custom.main' }}>
                <Typography variant='h4' align='center' fontFamily={'Roboto'} fontStyle={'italic'} color={'white'} gutterBottom >
                    Skills
                </Typography>
            </Grid>
            {skills.map((skill, i) => (
                <Skill key={i} skill={skill} sx={{ marginBottom: '3px' }} />
            ))}
        </Grid>
    );
}

export default Skills;