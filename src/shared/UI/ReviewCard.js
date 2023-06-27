import React from 'react';
import RateReview from './RateReview'
import './ReviewCard.css'
function ReviewCard(props) {
    return (
        <div className={`review_card_wrapper ${props.className}`}
            style={props.style}
        >
            <img src={props.profile_photo_url} alt='user_photo' />
            <h4 className="review_author">{props.author_name}</h4>
            <div className='review_rate_wrapper'><RateReview star={props.rate} /></div>
            <p className="review_text">{props.text}</p>
            <p className="review_date">{props.date}</p>
        </div>
    );
}

export default ReviewCard;