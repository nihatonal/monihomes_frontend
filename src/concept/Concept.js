import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from "../shared/context/Language";
import SectionCard from '../shared/components/SectionCard';
import { sectionsData } from '../assets/sectionsData';
import './Concept.css';
function Concept(props) {
    const lang = useContext(LanguageContext);
   
    let { cid } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const sectionData = lang.dictionary["concept_page"];
    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});
    const item = sectionData.filter((x) => x['section-id'] === cid)[0];

    return (
        <div className='concept-container'>
            <div className="concept-wrapper">
                <SectionCard
                    key={item['section-id']}
                    slides={filteredData(cid)[cid]}
                    title={item['section-title']}
                    buttons={item['section-buttons']}
                    desc={item['section-desc']}
                    features={item['section-features']}
                    video_={sectionsData.video_data[0].video}
                />
            </div>
        </div>
    );
}

export default Concept;