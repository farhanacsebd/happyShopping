import React from 'react';
import Services from '../Services/Services';
import Footer from './Footer/Footer';
import Contact from '../../Contact/Contact';
import HeroSection from './HeroSection/HeroSection';
import ShowReviews from './ShowReviews/ShowReviews';
import Sliding from './Sliding/Sliding';
import CookingArt from './CookingArt/CookingArt';
import ChatChef from './ChatChef/ChatChef';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>

            <Services></Services>


            <ShowReviews></ShowReviews>
            <CookingArt></CookingArt>
            <ChatChef></ChatChef>
            <Contact></Contact>
            <Footer></Footer>



        </div>
    );
};

export default Home;