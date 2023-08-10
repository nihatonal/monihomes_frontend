import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import SectionSlider from '../UI/SectionSlider';
import video_ from '../../assets/video/boattrip_video.mp4';
import VideoPlayer from "react-background-video-player";
import { BsCheckCircle } from 'react-icons/bs';
import './SectionCard.css';
function SectionCard(props) {
    let { cid } = useParams();
    const [desc, setDesc] = useState(0);
    const buttonHandler = (x) => {
        setDesc(x)
    }
    const conditions = ["Features", "Özellikler", "howdy"];
    return (
        <div className={`section-card-container ${props.className}`}>
            {/* {props.title_content} */}
            <SectionSlider slides={props.slides} />

            <div className="section-card-content"
                style={cid === 'boat_trip' ? { padding: '0' } : null}>

                <h3 className="section-card-content-title"
                    style={cid === 'boat_trip' ? { paddingLeft: '20px' } : null}
                >{props.title}</h3>

                {cid !== 'boat_trip' && <div className="section-btns-wrapper" style={{ gridTemplateColumns: `repeat(${props.buttons.length},auto)` }}>
                    {props.buttons.map((button, index) =>
                        <button
                            key={button + index}
                            id={button + (index + 1)}
                            className={desc === index ? `section-btn active-btn` : 'section-btn'}
                            onClick={() => buttonHandler(index)}
                        >
                            {button}
                        </button>
                    )}

                </div>}
                {conditions.some(el => props.buttons.includes(el))
                    && desc === 2 ?
                    <ul className='section-features'>
                        {props.features.map((item, index) =>
                            <li className="section-desc" key={index}><BsCheckCircle />{item}</li>
                        )}
                    </ul>

                    : <div className={cid === 'boat_trip' && 'section_desc_wrapper'}>
                        {cid === 'boat_trip' && <div className="video_wrapper">
                            <VideoPlayer
                                className="video_concept"
                                src={video_}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload={'true'}
                            />
                        </div>}
                        {props.desc[desc].split(/\r?\n|\r|\n/g).map((item, index) => <p className="section-desc" key={index}>{item}</p>)}</div>
                }
            </div>
        </div>
    );
}

export default SectionCard;