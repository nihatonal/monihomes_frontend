import React from 'react';

import GetReviews from './GetReviews';

import './Reviews.css'
function Reviews(props) {

    //ChIJh_WzFH1BwBQRKxywcvDfSMs
    //AIzaSyDLvSBaiQXgIr8tGfI1qIS23GP3ymL5cZk
    return (
        <section className='section_container ' id='reviews'>
            <div className="section_wrapper">
                <h3 className="section_title reviews-title">Reviews</h3>
                <div className="reviews_content">
                    <GetReviews />
                </div>
            </div>
        </section>
    );
}

export default Reviews;