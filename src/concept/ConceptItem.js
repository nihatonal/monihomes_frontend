import React from 'react';

import SectionCard from '../shared/components/SectionCard';
import { sectionsData } from '../assets/sectionsData';
import './Concept.css';
function ConceptItem(props) {


    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});
    console.log(props.item['section-id'])
    return (
        <div className='concept-container'>
            <div className="concept-wrapper">
                <SectionCard
                    key={props.item['section-id']}
                    slides={filteredData(props.item['section-id'])[props.item['section-id']]}
                    title={props.item['section-title']}
                    buttons={props.item['section-buttons']}
                    desc={props.item['section-desc']}
                    features={props.item['section-features']}
                    video_={sectionsData.video_data[0].video}
                    close={props.close}
                    id={props.item['section-id']}
                />
            </div>
        </div>
    );
}

export default ConceptItem;