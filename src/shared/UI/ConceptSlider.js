import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from '../../assets/icons/mini_slide_arrow-right.svg';
import ArrowLeft from '../../assets/icons/mini_slide_arrow-left.svg'
import { ReactSVG } from 'react-svg';
import './SimpleSlider.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ><IoIosArrowForward /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ><IoIosArrowBack /></div>
    );
}
export default class ConceptSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            current: 0,
            length: props.slides.lenght
        };
    }
    next() {
        this.slider.slickNext();
        this.setState({ current: this.state.current + 1 })
    }
    previous() {
        this.slider.slickPrev();
        this.setState({ current: this.state.current - 1 })
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: this.props.autoplay,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            // beforeChange: (current, next) => {
            //     this.setState({ current: next})
            // },
            afterChange: current => this.setState({ current: current })


        };
        return (

            <div className="concept_slide-container">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.props.slides.map((slider, index) =>
                        <div className='slide_wrapper' key={index}>
                            <img src={slider.image} alt={index} key={index} />
                        </div>
                    )}
                </Slider>
                <div className="slide-arrow-wrapper">
                    <button className={this.state.current < 1 ? "slide-arrow-btn disable_btn" : "slide-arrow-btn"}
                        disabled={this.state.current < 1}
                        onClick={this.previous}>
                        <ReactSVG src={ArrowLeft} />
                    </button>
                    <button className="slide-arrow-btn"
                        disabled={this.state.current > this.props.slides.length - 2}
                        onClick={this.next} >
                        <ReactSVG src={ArrowRight} />
                    </button>
                </div>
                <div className="slide_bar">
                    <p>{this.state.current < 9 ? `0${this.state.current + 1}` : this.state.current + 1}</p>
                    <input
                        type="range"
                        min="1"
                        max={this.props.slides.length}
                        onChange={() => console.log(this.state.current)}
                        value={this.state.current + 1}
                    />
                    <p>{this.props.slides.length < 10 ? `0${this.props.slides.length}` : this.props.slides.length}</p>
                </div>
            </div>

        );
    }
}