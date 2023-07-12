import React, { useEffect, useState, useContext } from 'react';
import { useHttpClient } from "../../shared/hooks/http-hook";
import { Text } from "../../shared/context/Language";
import { LanguageContext } from "../../shared/context/Language";
import ReviewCard from '../../shared/UI/ReviewCard';
import SimpleSlider from '../../shared/UI/SimpleSlider';
import PulseLoader from "react-spinners/PulseLoader";
import moment from 'moment';
import google_review from '../../assets/images/Google-review.png';

import localeTr from 'moment/locale/tr'
import './Reviews.css'
function Reviews(props) {
    const langs = useContext(LanguageContext).userLanguage;
    const { sendRequest } = useHttpClient();
    let [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [lang, setLang] = useState('')
    //console.log(reviews && moment(new Date(reviews[0].time * 1000)).format('MMMM DD, YYYY'));

    const getDate = (date) => {
        return moment(new Date(date)).format("MMMM DD, YYYY")
    }
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/reviews`);
                setReviews(responseData.data.result.reviews)
                setLoading(false)
            } catch (err) {
                setLoading(true)
            }
        };
        fetchUsers();

    }, [sendRequest]);

    useEffect(() => {
        if (langs === "en") {
            setLang('en-in')
        } else if (langs === "ru") {
            setLang('ru')
        } else if (langs === "tr") {
            setLang('tr')
        }
    }, [langs]);
    moment.locale(lang, [localeTr])
    /*
     * Create form to request access token from Google's OAuth 2.0 server.
     */
    // function oauthSignIn() {
    //     // Google's OAuth 2.0 endpoint for requesting an access token
    //     var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    //     // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    //     var form = document.createElement('form');
    //     form.setAttribute('method', 'GET'); // Send as a GET request.
    //     form.setAttribute('action', oauth2Endpoint);

    //     // Parameters to pass to OAuth 2.0 endpoint.
    //     var params = {
    //         'client_id': '895455833610-0bqvc7dnqs3283sp8ccagijlpeeot79b.apps.googleusercontent.com',
    //         'redirect_uri': 'https://www.monihomes.com.tr',
    //         'response_type': 'token',
    //         'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
    //         'include_granted_scopes': 'true',
    //         'state': 'pass-through value'
    //     };

    //     // Add form parameters as hidden input values.
    //     for (var p in params) {
    //         var input = document.createElement('input');
    //         input.setAttribute('type', 'hidden');
    //         input.setAttribute('name', p);
    //         input.setAttribute('value', params[p]);
    //         form.appendChild(input);
    //     }

    //     // Add form to page and submit it to open the OAuth 2.0 endpoint.
    //     document.body.appendChild(form);
    //     form.submit();
    // }

    return (
        <section className='section_container ' id='reviews'>
            <div className="reviews_wrapper">
                <h3 className="section_title reviews-title">{props.title}</h3>
                <div className="reviews_content">
                    {/* <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/164334' frameborder='0' width='100%' height='500'></iframe> */}
                    {reviews.length < 1 ?
                        <div className="reviews_loading">
                            <PulseLoader
                                color={'#628a76'}
                                loading={loading}
                                cssOverride={''}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
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
                            <ReviewCard
                                className='google-card'
                                profile_photo_url={google_review}
                                author_name={'5.0'}
                                rate={5}
                                text={<a href='https://g.page/r/CSscsHLw30jLEBM/review' target={'_blank'} rel="noreferrer"><Text tid="google-btn" /></a>}
                            />
                        </SimpleSlider>}
                    {/* https://g.page/r/CSscsHLw30jLEBM/review */}
                </div>
            </div>
        </section>
    );
}

export default Reviews;