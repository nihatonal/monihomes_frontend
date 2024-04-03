import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { ReactSVG } from 'react-svg';
import ConceptSlider from '../UI/ConceptSlider';
import VideoPlayer from "react-background-video-player";
import { BsCheckCircle } from 'react-icons/bs';
import ArrowLeft from '../../assets/icons/mini_slide_arrow-left.svg'
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

            <ConceptSlider slides={props.slides} />

            <div className="section-card-content"
                style={cid === 'boat_trip' ? { padding: '0' } : null}>

                <div className="back_btn" onClick={props.close}>
                    <ReactSVG src={ArrowLeft} />
                </div>
                <h3 className="section-card-content-title"
                    style={cid === 'boat_trip' ? { padding: '0 0 30px 20px' } : null}
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

                    : <div className={cid === 'boat_trip' ? 'section_desc_wrapper' : ''}>
                        {cid === 'boat_trip' && <div className="video_wrapper">
                            <VideoPlayer
                                className="video_concept"
                                src={props.video_}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload={'true'}
                            />
                        </div>}
                        {props.desc[desc].split(/\r?\n|\r|\n/g).map((item, index) =>
                            <p
                                className="section-desc" key={index}
                                style={cid === 'boat_trip' ? { color: '#fff' } : null}
                            >{item}</p>
                        )}
                    </div>
                }
            </div>
        </div>
    );
}

export default SectionCard;