import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'
export default class SimpleSlider extends Component {
    render() {
        var settings = {
            className: "center",
            centerMode: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]

        };
        return (

            <Slider {...settings}>
                {this.props.children}
            </Slider>

        );
    }
}