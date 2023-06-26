import React, { useEffect, useState } from 'react';
import { useHttpClient } from "../../shared/hooks/http-hook";

import ReviewCard from '../../shared/UI/ReviewCard';
import SimpleSlider from '../../shared/UI/SimpleSlider';

import './Reviews.css'
function Reviews(props) {
    // const https = require('https')
    const { sendRequest } = useHttpClient();
    const [reviews, setReviews] = useState([]);
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.REACT_APP_PLACE_ID}&key=${process.env.REACT_APP_API_KEY}`;
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/reviews`);
                setReviews(responseData.data.result.reviews)
            } catch (err) {
            }
        };
        fetchUsers();

    }, [sendRequest]);

    return (
        <section className='section_container ' id='reviews'>
            <div className="reviews_wrapper">
                <h3 className="section_title reviews-title">Reviews</h3>
                <div className="reviews_content">

                    {reviews.length < 1 ?
                        <p className='is_loading'>Is Loading...</p>
                        :
                        <SimpleSlider>
                            {reviews.map((review) =>
                                <ReviewCard
                                    profile_photo_url={review.profile_photo_url}
                                    author_name={review.author_name}
                                    text={review.text}
                                    rate={review.rating}
                                    key={review.author_name}
                                />
                            )}
                        </SimpleSlider>}

                </div>
            </div>
        </section>
    );
}

export default Reviews;