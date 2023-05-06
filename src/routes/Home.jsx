import * as React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Profile from '../components/Profile';

function Home() {

    return (
        <React.Fragment>
            <Hero />
            <Profile />
            <div id="contact">
                <Contact />
            </div>
        </React.Fragment>
    );
}


export default Home;