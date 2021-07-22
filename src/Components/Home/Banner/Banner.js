import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import headerImg from '../../../Images/kabab.jpg';

const Banner = () => {
    return (
        <Header>
            <Container className="container">
                <Text className="w-100 text-white px-2 px-sm-0">
                    <h1 className="display-4">Welcome</h1>
                    <p className="lead mb-4">BD Kebab Bangla, fast food restaurent</p>
                    <Link to="/menu" className="btn px-5 mr-2">Explore</Link>
                    <a href="https://www.facebook.com/BDKebabBanglaSejny" className="btn px-5 ml-2">Find a store</a>
                </Text>
            </Container>
        </Header>
    );
};

export default Banner;

const Header = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(16, 29, 44, .75), rgba(16, 29, 44, .75)),url(${headerImg}) center no-repeat;
    background-size: cover;
    position: relative;
`

const Container = styled.div`
    position: absolute;
    height: 100%;
    top: 50px;
    padding: 0;
`

const Text = styled.div`
    position: absolute;
    top: 45%;
    left: 60%;
    transform: translate(-50%, -45%);
    text-align: center;

    h1 {
        font-family: "Niconne", cursive;
        color: #c69963;
    }

    p {
        margin: 0;
    }

    a {
        color: white;
        top: 100px;
    }

    .btn {
        margin-right: 20px;
        width: 100px;
        padding: 5px 0!important;
        border: 1px solid #c69963;
        position: relative;
        overflow: hidden;
    }

    .btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .3), transparent);
        transition: all 650ms;
    }

    .btn::hover::before { 
        left: 100%;
    }

    @media(max-width: 600px) {
        left: 50%;
    }

`

