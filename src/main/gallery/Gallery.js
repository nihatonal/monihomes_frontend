import React, { useState } from 'react';
import Availability from './components/Availability';
import Modal from '../../shared/UI/Modal';
import GalleryFancyBox from './GalleryFancyBox';
import { IoCloseCircleSharp } from 'react-icons/io5';
import gallery_1 from '../../assets/images/room1/room1_1.jpg';
import gallery_2 from '../../assets/images/monihomes_night.jpg';
import gallery_3 from '../../assets/images/room3/room3_7.jpg';
import gallery_4 from '../../assets/images/room3/room3_6.jpg';
import gallery_5 from '../../assets/images/room1/room1_9.jpg';
import gallery_6 from '../../assets/images/room2/room2_2.jpg';
import gallery_7 from '../../assets/images/room2/room2_4.jpg';
import gallery_8 from '../../assets/images/room3/room3_3.jpg';
import gallery_9 from '../../assets/images/room2/room2_5.jpg';


import { TfiGallery } from "react-icons/tfi";
import './Gallery.css';
function Gallery(props) {

    const [bg, setBg] = useState();
    const [show, setShow] = useState(false);
    const bg_data = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9]
    const handler = (e) => {
        setShow(!show);
        setBg(bg_data[e.target.id.slice(-1) - 1])
    }
    return (
        <section className='section_container gallery_container' id='gallery'>
            
            <div className="section_wrapper" >
                <h3 className="section_title gallery-title">{props.title}</h3>
                <div className="gallery_content">
                    <div id="gallery_1" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_2" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_3" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_4" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_5" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_6" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_7" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_8" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                    <div id="gallery_9" className="gallery_content_item" onClick={handler}>
                        <TfiGallery />
                    </div>
                </div>
            </div>
            <Modal show={show}
            >
                <div className="modal_wrapper"
                    style={{
                        backgroundImage: `linear-gradient(
                            135deg,
                            rgba(0, 0, 0, 0.8),
                            rgba(0, 0, 0, 0.6)
                          ), url(${bg})`
                    }}>
                    <IoCloseCircleSharp className='close_modal' onClick={() => setShow(false)} />
                    <GalleryFancyBox />
                </div>

            </Modal>
        </section>
    );
}

export default Gallery;
// import React from 'react';

// import gallery_1 from '../../assets/images/room1/room1_1.jpg';
// import gallery_2 from '../../assets/images/monihomes_night.jpg';
// import gallery_3 from '../../assets/images/room3/room3_7.jpg';
// import gallery_4 from '../../assets/images/room3/room3_6.jpg';
// import gallery_5 from '../../assets/images/room1/room1_9.jpg';
// import gallery_6 from '../../assets/images/room2/room2_2.jpg';
// import gallery_7 from '../../assets/images/room2/room2_4.jpg';
// import gallery_8 from '../../assets/images/room3/room3_3.jpg';
// import gallery_9 from '../../assets/images/room2/room2_5.jpg';

// import './Gallery.css';
// function Gallery(props) {
//     return (
//         <section className='section_container gallery_container' id='gallery'>
//             <div className="section_wrapper">
//                 <h3 className="section_title gallery-title">Gallery</h3>
//                 <div className="gallery_content">
//                     <div className="gallery_content_item">
//                         <img src={gallery_1} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_2} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_3} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_4} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_5} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_6} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_7} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_8} alt='room' />
//                     </div>
//                     <div className="gallery_content_item">
//                         <img src={gallery_9} alt='room' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Gallery;