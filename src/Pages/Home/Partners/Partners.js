import React, { Component } from "react";
import Slider from "react-slick";
import bkash from '../../../images/partners/bkash.png';
import './Partners.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="container">
            <div>
                <h2 className="text-center mb-4">Our Partners</h2>
                <Slider {...settings}>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                    <div>
                        <img className="partner-image" src={bkash} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Partners;