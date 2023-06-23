import React, { useState, useEffect } from 'react';

import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import './RateReview.css'

const RateReview = ({ star }) => {
    const [rate, setRate] = useState(0);
    let active_stars = [];
    let empty_stars = [];

    let i;
    for (i = 0; i <= Number(star.toString().split('.')[0]) - 1; i++) {
        active_stars.push(<BsStarFill className='review_star' key={i}
            style={{ color: '#eeb524' }}
        />
        )
    }
    for (i = 0; i <= 4 - Number(star.toString().split('.')[0]) - 1; i++) {
        empty_stars.push(<BsStar className='review_star' key={i}
            style={{ color: '#eeb524' }}
        />
        )
    }


    useEffect(() => {
        setRate(100 - 100 * Number(0 + "." + star.toString().split('.')[1]))
    }, [star]);



    return (

        <div className='review_stars_wrapper'>
            {active_stars}
            {active_stars.length !== 5 && <div className='empty_star'>
                <BsStarFill className='review_star'
                    style={{ color: '#eeb524', clipPath: `inset(0 ${rate}% 0 0)` }}
                />
                <BsStar className='review_star_empty'
                    style={{ color: '#eeb524' }}
                />
            </div>}
            {empty_stars}

            {/* <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            />
            <BsStarFill className='review_star'
                style={{ color: '#eeb524' }}
            /> */}
            { }
            {/* {<div className='empty_star'>
                <BsStarFill className='review_star'
                    style={{ color: '#eeb524', clipPath: `inset(0 ${rate}% 0 0)` }}
                />
                <BsStar className='review_star_empty'
                    style={{ color: '#eeb524' }}
                />
            </div>} */}
        </div>
    );
};
export default RateReview;