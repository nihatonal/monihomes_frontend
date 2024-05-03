import React, { useState, useEffect, useContext } from 'react';
import VideoPlayer from "react-background-video-player";
import ConceptSlider from '../../shared/UI/ConceptSlider';
import { LanguageContext } from "../../shared/context/Language";
import { sectionsData } from '../../assets/sectionsData';
import Modal from "../../shared/UI/Modal"
import ConceptItem from "./components/ConceptItem"

import './Concept.css';
function Concept(props) {
    const lang = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState({});
    const sectionData = lang.dictionary["concept_page"];
    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});
    // const modalHandler = (x) => {
    //     setSelect(x)
    //     const data = sectionsData.filter((x) => x['section-id'] === )[0];
    // }
    // useEffect(() => {
    //     console.log(select)
    // }, [select])

    return (
        <section className='section_container' id='concept'>
            <div className="section_wrapper concept_wrapper">
                <h3 className="section_title">{props.title}</h3>

                <div className="concept_items">
                    {props.data.map((item, index) =>
                        <div className="concept_item" key={index}>
                            <h4 className='concept_name'>{item['section-title']}</h4>
                            <div className={item['section-id'] === 'boat_trip' ? "concept_item_content concept_boat" : "concept_item_content "}>
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

                            </div>
                            <div className={"concept_item_desc"}>
                                <p> {item['section-desc'][0].slice(0, 144)}...</p>
                                <Modal show={open} onClose={() => setOpen(false)}>
                                    <ConceptItem item={select} close={() => setOpen(false)} />
                                </Modal>
                                <button className='read_more_btn'
                                    onClick={() => {
                                        setOpen(true)
                                        setSelect(sectionData.filter((x) => x['section-id'] === item['section-id'])[0])
                                    }}
                                >{lang.dictionary["read_more"]}</button>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Concept;