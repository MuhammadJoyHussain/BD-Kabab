import React, { useEffect, useState } from 'react';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import footerImg from '../../../Images/kabab.jpg';
import logo from '../../../Images/logo.jpg';

const Footer = () => {
    const [footer, setFooter] = useState([]);

    useEffect(() => {
        fetch('https://bd-kebab-bangla.herokuapp.com/api/home')
            .then(res => res.json())
            .then(data => setFooter(data))
    }, [])

    return (
        <Container>
            {
                footer.map(footer => {
                    return (
                        <footer key={footer._id}>
                            <div className="mt-5 pt-5 pb-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-xs-12">
                                            <h2><img className="img-fluid" src={logo} alt="" /> BD KEBAB BANGLA</h2>
                                            <p className="pr-5 text-white-50">{footer.story}</p>
                                            <ul className="social">
                                                <a href="https://www.facebook.com/BDKebabBanglaSejny">
                                                    <li>
                                                        <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
                                                    </li>
                                                </a>
                                                <a href="https://www.instagram.com/bdkebabbanglasejny/">
                                                    <li>
                                                        <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                                                    </li>
                                                </a>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-xs-12">
                                            <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>
                                            <ul className="m-0 p-0 links">
                                                <li>
                                                    <a href="https://www.facebook.com/BD-Kebab-Bangla-Bia%C5%82a-Piska-101350755466959">BD Kebab Bangla, Biała Piska</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-xs-12">
                                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                                            <p><FontAwesomeIcon className="location-i" icon={faMapMarkerAlt} /> {footer.location}</p>
                                            <p><FontAwesomeIcon className="location-i" icon={faPhone} /> {footer.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col copyright text-center">
                                            <p>
                                                <small className="text-white-50">
                                                    All Rights Reserved & Copy. BD KEBAB BANGLA Powred by <a href="https://portfolio-39817.web.app/" className="text-decoration-none">Md Joynul Hussain</a>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    );
                })
            }
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    footer {
        background: linear-gradient(rgba(16, 29, 44, .75), rgba(16, 29, 44, .75)),url(${footerImg}) center no-repeat;
        position: absolute;
        color: #fff;
        width: 100%;
    }
    
    .social {
        padding: 0;
    }

    h4 {
        padding: 15px 0px;
    }

    .social li {
        margin-right: 5px;
        display: inline-block;
        background-color: #fff;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        padding: 0cm;
        cursor: pointer;
    }

    .social-icon {
        padding-top: 4px;
        color: #333;
        transition: .3s;
        font-size: 25px;
    }

    .social-icon:hover {
        color: rgb(30, 118, 226);
    }

    ul {
        list-style-type: none;
    }

    .links a {
        color: #fff;
        transition: color 0.2s;
        text-decoration: none;
    }

    .links a:hover {
        color: rgb(30, 118, 226);
    }

    .location-i{
        font-size: 18px;
    }

    .copyright p {
        font-size: 1.3rem;
        text-shadow: 1px 1px black;
        border-top: 1px solid rgb(255, 255, 255, .8)
    }

`