import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Skill from '../components/Skill';
import CIcon from '../static/img/c_icon.png';
import PythonIcon from '../static/img/python_icon.png';
import TypescriptIcon from '../static/img/typescript_icon.png';
import ReactIcon from '../static/img/react_icon.png';
import SolidityIcon from '../static/img/solidity_icon.png';
import DockerIcon from '../static/img/docker_icon.webp';

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

    const skill6 = {
        language: "Docker",
        description: "I have managed developing environment by Docker. I use a combination of cloudformation and docker-compose.yml to automate my infrastructure. ",
        image: DockerIcon,
        imageLabel: "docker-icon"
    }


    const skills = [
        skill1, skill2, skill3, skill4, skill5, skill6
    ]

    return (
        <div>
            <Grid container spacing={2} sx={{ marginTop: '1px' }}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant='h4' align='center' fontStyle={'italic'} gutterBottom >
                        Skills
                    </Typography>
                </Grid>

                {skills.map((skill, i) => (
                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: '3px' }} key={i}>
                    <Skill  skill={skill}  />
                </Grid>
                ))}
            </Grid>
            <Typography variant='h5'>AWS(EC2, CloudFormation, QLDB, DymamoDB), Database(MySQL, SQlite, MongoDB), Containerd, etc.</Typography>
        </div>
    );
}

export default Skills;