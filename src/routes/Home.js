import * as React from 'react';
import Card from '../components/Card';
import Skills from '../components/Skills';
import Portfolios from '../components/Portfolios';
import Contact from '../components/Contact';
import TopImage from '../static/img/top_img.jpg';
import Profile from '../components/Profile';
import Blogs from '../components/Blogs';

function Home() {

    const card = {
        title: 'Takao Mizuno',
        description:
            "I am a Software Engineer",
        descriptionTwo: "C#, Python, Typescript, React, Solidity",
        image: TopImage,
        imageText: 'main image description',
    }

    return (
        <React.Fragment>
            <Card detail={card} />
            <div id="profile">
                <Profile />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="portfolios">
                <Portfolios />
            </div>
            <div id="blogs">
                <Blogs />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </React.Fragment>
    );
}


export default Home;