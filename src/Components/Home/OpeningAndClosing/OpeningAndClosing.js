import { useEffect, useState } from 'react';
import { faClock, faMapMarkedAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const OpenAndClosing = () => {
    const [opening, setOpening] = useState([]);

    useEffect(() => {
        fetch('https://bd-kebab-bangla.herokuapp.com/api/home')
            .then(res => res.json())
            .then(data => setOpening(data))
    }, [])

    return (
        <Section>
            <Container className="container">
                {
                    opening.map(detail => {
                        return (
                            <div key={detail._id} className="row text-center text-white">
                                <div className="col-12 col-md-4 mt-5 mb-3 mb-md-0">
                                    <div className="shop-info">
                                        <FontAwesomeIcon className="mb-3 icon" icon={faClock} />
                                        <h1 className="mb-4">Hours of operation</h1>
                                        <p>{detail.openandclose}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mt-5 mb-3 mb-md-0">
                                    <div className="shop-info">
                                        <FontAwesomeIcon className="mb-3 icon" icon={faMapMarkedAlt} />
                                        <h1 className="mb-4">Our location</h1>
                                        <address>
                                            {detail.location}
                                        </address>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mt-5 mb-3 mb-md-0">
                                    <div className="shop-info">
                                        <FontAwesomeIcon className="mb-3 icon" icon={faMobileAlt} />
                                        <h1 className="mb-4">Get in touch</h1>
                                        <p>Phone: {detail.phone}</p>
                                    </div>
                                </div>
                                <hr className="mt-5" />
                            </div>
                        );
                    })
                }
            </Container>
        </Section>
    );
};

export default OpenAndClosing;

const Section = styled.div`
background-color: #10132F;
`

const Container = styled.div`
    .icon {
        color: #c69963;
        font-size: 50px;
    }

    h1 {
        font-family: 'Teko' sans-serif;
        font-size: 25px;
        font-weight: 300;
        text-transform: uppercase;
    }

    p, address {
        color: rgba(255, 255, 255, .5)
    }

    hr{
        border-top: 1px solid rgba(255, 255, 255, .05)
    }

`