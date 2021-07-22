import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
    const [story, setStory] = useState([])

    useEffect(() => {
        fetch('https://bd-kebab-bangla.herokuapp.com/api/home')
            .then(res => res.json())
            .then(data => setStory(data))
    }, []);

    return (
        <Section>
            <Container className="container mt-5">
                {
                    story.map(story => {
                        return (
                            <div key={story._id} className="row align-items-lg-center">
                                <div className="col-12 col-md-6 text-center text-md-start">
                                    <SectionHeading className="mb-3">
                                        <h4>Discover</h4>
                                        <h1 className="display-4">Our Story</h1>
                                    </SectionHeading>
                                    <p>{story.story}</p>
                                    <button className="btn mt-4 mb-5 mb-md-0">Find Out More</button>
                                </div>
                                <div className="col-12 col-md-6 text-center">
                                    <img className="img-fluid" src={story.image} alt="" />
                                </div>
                            </div>
                        );
                    })
                }
            </Container>
        </Section>
    );
};

export default Header;

const Section = styled.div`
    padding: 60px 0;

`

const Container = styled.div`
    button {
        width: 150px;
        border: 1px solid #c69963;
        color: #c69963 !important;
        transition: background-color 650ms;
    }

    button:hover {
        color: #fff !important;
        background-color: #c69963;
    }

`
const SectionHeading = styled.div`
    h4 {
        text-transform: uppercase;
        color: #101D2C;
        line-height: 0;
        font-family: 'Teko', sans-serif;
        font-weight: 300;
        letter-spacing: 1px;
    }

    h1 {
        font-family: 'Niconne', cursive;
        color: #c69963;
    }
`