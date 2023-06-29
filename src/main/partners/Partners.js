import React from 'react';


import villamasal1 from '../../assets/images/villamasal/villamasal_1.jpg';
import villamasal2 from '../../assets/images/villamasal/villamasal_2.jpg';
import villamasal3 from '../../assets/images/villamasal/villamasal_3.jpg';
import villamasal4 from '../../assets/images/villamasal/villamasal_4.jpg';
import villamasal5 from '../../assets/images/villamasal/villamasal_5.jpg';
import villamasal6 from '../../assets/images/villamasal/villamasal_6.jpg';
import villamasal7 from '../../assets/images/villamasal/villamasal_7.jpg';
import villamasal8 from '../../assets/images/villamasal/villamasal_8.jpg';
import villamasal9 from '../../assets/images/villamasal/villamasal_9.jpg';
import villamasal10 from '../../assets/images/villamasal/villamasal_10.jpg';
import villamasal11 from '../../assets/images/villamasal/villamasal_11.jpg';
import villamasal12 from '../../assets/images/villamasal/villamasal_12.jpg';

import yoyo1 from '../../assets/images/yoyo/yoyo_1.jpg';
import yoyo2 from '../../assets/images/yoyo/yoyo_2.jpg';
import yoyo3 from '../../assets/images/yoyo/yoyo_3.jpg';
import yoyo4 from '../../assets/images/yoyo/yoyo_4.jpg';
import yoyo5 from '../../assets/images/yoyo/yoyo_5.jpg';
import yoyo6 from '../../assets/images/yoyo/yoyo_6.jpg';
import yoyo7 from '../../assets/images/yoyo/yoyo_7.jpg';
import yoyo8 from '../../assets/images/yoyo/yoyo_8.jpg';
import yoyo9 from '../../assets/images/yoyo/yoyo_9.jpg';
import './Partners.css';
function Partners(props) {
    return (
        <section className='section_container'>
            <div className="section_wrapper partners_wrapper">
                <h3 className="section_title">{props.title}</h3>
                <div className="partners_content">
                    <div className="partners_content-item">
                        <h4 className="partner_name">{props.villa_1}</h4>
                        <a href="https://instagram.com/villamasalfethiye?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="partner_link">
                            <div className="villa_masal">
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal1} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal2} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal3} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal4} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal5} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal6} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal7} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal8} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal9} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal10} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal11} alt={'villa masal fethiye'} />
                                </div>
                                <div className="partner_image villa_masal_item">
                                    <img src={villamasal12} alt={'villa masal fethiye'} />
                                </div>
                                {/* <div className="partner_image villa_masal_item"></div>
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
                                <div className="partner_image villa_masal_item"></div> */}
                            </div>

                        </a>
                    </div>
                    <div className="partners_content-item">
                        <h4 className="partner_name">{props.villa_2}</h4>
                        <a href="https://instagram.com/yoyo_tinyhouse_fethiye?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer" className="partner_link">
                            <div className="yoyo_villa">
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo1} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo2} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo3} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo4} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo5} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo6} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo7} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo8} alt='yoyo tiny villa fethiye' />
                                </div>
                                <div className="partner_image yoyo_villa_item">
                                    <img src={yoyo9} alt='yoyo tiny villa fethiye' />
                                </div>
                                {/* <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div>
                                <div className="partner_image yoyo_villa_item"></div> */}
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
