import React, { Component } from "react";
import Slider from "react-slick";
import bkash from '../../../images/partners/bkash.png'

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
            <h2 className="text-center">Our Partners</h2>
            <Slider {...settings}>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
                <div>
                    <img style={{ width: 200 }} src={bkash} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Partners;