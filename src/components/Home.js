import * as React from 'react';
import Card from './Card';
import Skills from './Skills';
import Portfolios from './Portfolios';
import Contact from './Contact';
import TopImage from '../static/img/top_img.jpg';
import Profile from './Profile';



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
            <div id="profile">
                <Profile />
            </div>
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