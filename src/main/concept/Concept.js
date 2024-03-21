import React from 'react';
import VideoPlayer from "react-background-video-player";
import { NavLink } from 'react-router-dom';
import ConceptSlider from '../../shared/UI/ConceptSlider';
import { sectionsData } from '../../assets/sectionsData';

import './Concept.css';
function Concept(props) {

    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});
    return (
        <section className='section_container' id='concept'>
            <div className="section_wrapper concept_wrapper">
                <h3 className="section_title">{props.title}</h3>

                <div className="concept_items">
                    {props.data.map((item, index) =>
                        <div className="concept_item" key={index}>
                            <h4 className='concept_name'>{item['section-title']}</h4>
                            <div className="concept_item_content">
                                {item['section-id'] === 'boat_trip' ?
                                    <VideoPlayer
                                        className="video"
                                        src={sectionsData.video_data[1].video}
                                        autoPlay={true}
                                        muted={true}
                                        loop={true}
                                        playsInline={true}
                                        preload={'true'}
                                    /> :
                                    <ConceptSlider autoplay={true} slides={filteredData(item['section-id'])[item['section-id']]} />}
                                <div className="concept_item_desc">
                                    <p> {item['section-desc'][0].slice(0, 120)}...</p>
                                    <NavLink className='read_more_btn' to={`/concept/${item['section-id']}`}>Read More</NavLink>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Concept;