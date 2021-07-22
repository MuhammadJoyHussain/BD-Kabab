import React, { useEffect, useState } from 'react';
import img from '../../../Images/burger.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import styled from 'styled-components';
import axios from 'axios';

SwiperCore.use([Navigation, Pagination]);

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        axios.get('https://bd-kebab-bangla.herokuapp.com/api/reviews')
            .then(res => setReview(res.data))
    }, [])

    return (
        <Review className="text-center">
            <h1>What People Say</h1>
            <div className="testimonials mt-5">
                <Swiper className="swiper-container" effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} pagination={true} coverflowEffect={{
                    "rotate": 0,
                    "stretch": 0,
                    "depth": 0,
                    "modifier": 1,
                    "slideShadows": true,
                }}
                >
                    {
                        reviews.map(review => {
                            return (
                                <div key={review._id} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="cards">
                                            <div className="layer"></div>
                                            <div className="content">
                                                <p>{review.review}</p>
                                                <div className="imgBx"><img className="img-fluid" src={review.image} alt="" /></div>
                                                <div className="details">
                                                    <h2>{review.name}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            );
                        })
                    }
                </Swiper>
            </div>
        </Review>
    );
};

export default Reviews;

const Review = styled.div`
    background: #e7e3d8;
    .testimonials {
        position: relative;
        max-width: 100%;
        padding-bottom: 50px;
    }

    .swiper-wrapper {
        height: 450px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 350px;
        min-height: 350px;
        margin: 0 20px;
        background: #fff;
    }

    .testimonials .cards {
        position: relative;
        width: 100%;
        margin: 0 auto;
        background: #fff;
        padding: 60px 40px;
        text-align: center;
        overflow: hidden;
    }

    .testimonials .cards .layer {
        position: absolute;
        top: calc(100% - 2px);
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#f5f5f5, #acacac);
        z-index: 1;
        transition: 0.5s;
    }

    .testimonials .cards:hover .layer {
        top: 0;
    }

    .testimonials .cards .content {
        position: relative;
        z-index: 2;
    }

    p {
        font-size: 18px;
        line-height: 24px;
        margin-botton: 20px;
        color: #333;
    }

    .testimonials .cards .content .imgBx {
        width: 100px;
        height: 100px;
        margin: 0 auto 10px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 10px 20px (0, 0, 0, 0.2)
    }

    img {
        width: 120px;
        height: 100px;
    }

    h2{
        font-size: 18px;
        color: #333;
    }

    span {
        color: #e91ee3;
        font-size: 18px;
        transition: 0.5s;
    }

    span:hover {
        
    }

`