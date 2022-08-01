import React from 'react';
import appStory from './appStory.png'
import googlePlay from './googlePlay.png'
import homeImg from './home-img.png'
import './Home.css'

const Home = () => {
    return ( 
        <div className='main-home container'>
            <div className='home-title'>
                <h1>The crypto portfolio app that makes you smile. Every day.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                <a href="https://www.apple.com/iphone/"><img src={appStory} alt="app-img" /></a>
                <a href="https://play.google.com/store/games?hl=ru&gl=KG"><img src={googlePlay} alt="google-img" /></a>
            </div>
            <img src={homeImg} alt="home-img" />
        </div>
     );
}
 
export default Home;