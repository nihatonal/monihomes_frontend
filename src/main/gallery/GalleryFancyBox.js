import React from 'react';
import { roomsData } from '../../assets/roomsData';
import Fancybox from '../../shared/UI/Fancybox';

import './GalleryFancyBox.css'
function GalleryFancyBox(props) {

    return (
        <div className='gallery_wrapper'>
            {roomsData.map((room, index) =>
                <div className="gallery_item" key={room.id}>
                    <h4 className="gallery_item_title">
                        {room.title}
                    </h4>
                    <Fancybox

                        options={{
                            Carousel: {
                                infinite: false,
                            },
                            Thumbs: {
                                type: "modern",
                                showOnStart: true

                            },
                        }}
                    >
                        {room.images.map((el) =>
                            <a
                                key={room.id + el}
                                id={el}
                                data-fancybox={room.id}

                                href={`${process.env.REACT_APP_ASSETS_URL}${require(`../../assets/images/${room.id}/${el}.jpg`)}`}
                                style={el !== room.id + '_1' ? { display: 'none' } : null}
                            >
                                <img className="gallery_image" src={require(`../../assets/images/${room.id}/${el}.jpg`)} alt={el} />
                            </a>)}

                    </Fancybox>


                </div>
            )}
        </div>
    );
}

export default GalleryFancyBox;