import * as React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Portfolios from '../components/Portfolios';
import Contact from '../components/Contact';
import Profile from '../components/Profile';
import Blogs from '../components/Blogs';

function Home() {

    return (
        <React.Fragment>
            <Hero />
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