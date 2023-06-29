import React, { useEffect, useState } from 'react';
import { useHttpClient } from "../../shared/hooks/http-hook";

import ReviewCard from '../../shared/UI/ReviewCard';
import SimpleSlider from '../../shared/UI/SimpleSlider';
import LoadingSpinner from '../../shared/UI/LoadingSpinner';
import moment from 'moment';
import './Reviews.css'
function Reviews(props) {
    const { sendRequest } = useHttpClient();
    const [reviews, setReviews] = useState([]);
    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/reviews`);
                setReviews(responseData.data.result.reviews)
                //console.log(responseData.data.result.reviews)
            } catch (err) {
            }
        };
        fetchUsers();

    }, [sendRequest]);

    return (
        <section className='section_container ' id='reviews'>
            <div className="reviews_wrapper">
                <h3 className="section_title reviews-title">{props.title}</h3>
                <div className="reviews_content">

                    {reviews.length < 1 ?
                        <p className='is_loading'><LoadingSpinner />{props.loading}</p>
                        :
                        <SimpleSlider>
                            {reviews.map((review) =>
                                <ReviewCard
                                    profile_photo_url={review.profile_photo_url}
                                    author_name={review.author_name}
                                    text={review.text}
                                    rate={review.rating}
                                    key={review.author_name}
                                    date={getDate(review.time * 1000)}
                                />
                            )}
                        </SimpleSlider>}

                </div>
            </div>
        </section>
    );
}

export default Reviews;