import * as React from 'react';
import styled from '@mui/material/styles/styled';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Card from './Card';
import Skills from './Skills';
import Portfolios from './Portfolios';
import Contact from './Contact';
import { TypeAnimation } from 'react-type-animation';
import TopImage from '../static/img/top_img.jpg';



const card = {
    title: 'Takao Mizuno',
    description:
        "I am a Software Engineer",
    descriptionTwo: "C#, Python, Typescript, React",
    image: TopImage,
    imageText: 'main image description',
}

function Home() {
    return (
        <React.Fragment>
            <Card detail={card} />
            <div id="skills">
                <Skills />
            </div>
            <div id="portfolios">
                <Portfolios />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </React.Fragment>
    );
}


export default Home;