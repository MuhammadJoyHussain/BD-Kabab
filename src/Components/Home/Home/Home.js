import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import OpeningAndClosing from '../OpeningAndClosing/OpeningAndClosing';
import HomeMenu from '../HomeMenu/HomeMenu';
import Reviews from '../Reivews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Header />
            <OpeningAndClosing />
            <HomeMenu />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;