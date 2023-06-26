import React from 'react';

import villamasal from '../../assets/images/villamasal.jpeg';
import villamasal2 from '../../assets/images/villamasal4.jpeg';
import villamasal3 from '../../assets/images/villamasal3.jpeg';
import villamasal4 from '../../assets/images/villamasal2.jpeg';

import yoyo from '../../assets/images/yoyo_tinyhouse.jpeg';
import yoyo2 from '../../assets/images/yoyo_tinyhouse_2.jpeg';
import './Partners.css';
function Partners(props) {
    return (
        <section className='section_container'>
            <div className="section_wrapper partners_wrapper">
                <h3 className="section_title">Maybe you might be interested in these...</h3>
                <div className="partners_content">
                    <div className="partners_content-item">
                        <h4 className="partner_name">Villa Masal</h4>
                        <a href="https://instagram.com/villamasalfethiye?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="partner_link">
                            <div className="partners_images">
                                <div className="partner_image">
                                    <img src={villamasal} alt={'villa masal'} />
                                </div>
                                <div className="partner_image">
                                    <img src={villamasal2} alt={'villa masal'} />
                                </div>
                                <div className="partner_image">
                                    <img src={villamasal3} alt={'villa masal'} />
                                </div>
                                <div className="partner_image">
                                    <img src={villamasal4} alt={'villa masal'} />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="partners_content-item">
                        <h4 className="partner_name">Yoyo Tinyhouse</h4>
                        <a href="https://instagram.com/yoyo_tinyhouse_fethiye?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer" className="partner_link">
                            <div className="yoyo_villa">
                                <div className="partner_image yoyo_villa_item">
                                    {/* <img src={yoyo} alt={'villa masal'} /> */}
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    {/* <img src={yoyo2} alt={'villa masal'} /> */}
                                </div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                            </div>
                        </a>
                    </div>

                </div>
                {/* https://instagram.com/villamasalfethiye?igshid=MzNlNGNkZWQ4Mg== */}
                {/* https://instagram.com/yoyo_tinyhouse_fethiye?igshid=NGExMmI2YTkyZg== */}

            </div>
        </section >
    );
}

export default Partners;
