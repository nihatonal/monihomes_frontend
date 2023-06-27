import React from 'react';

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
                            <div className="villa_masal">
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                                <div className="partner_image villa_masal_item"></div>
                            </div>

                        </a>
                    </div>
                    <div className="partners_content-item">
                        <h4 className="partner_name">Yoyo Tinyhouse</h4>
                        <a href="https://instagram.com/yoyo_tinyhouse_fethiye?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer" className="partner_link">
                            <div className="yoyo_villa">
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
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
