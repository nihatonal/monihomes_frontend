import React, { useEffect, useState, useContext } from 'react';
// import VideoPlayer from '../../shared/UI/VideoPlayer';
// import dron_video from '../../assets/video/dron.mp4'
import { Text } from "../../shared/context/Language";
import moment from "moment";
import { DatePicker, Space } from 'antd';
import { ShareContext } from '../../shared/context/ShareContext';
import './Hero.css';
function Hero() {
    const { RangePicker } = DatePicker;
    const share = useContext(ShareContext)
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const getDates = (dates) => {
        if (!dates) return
        share.setDateRange([moment(new Date(dates[0])).format("YYYY/MM/DD"), moment(new Date(dates[1])).format("YYYY/MM/DD")])
    }
    useEffect(() => {
        if (!share.dates) return
        setStartDate(share.dates[0]);
        setEndDate(share.dates[1]);
    }, [share.dates]);

    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',

        });

    }
    return (
        <div className='hero_container'>
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h1 className="hero_title">
                        <Text tid="hero-title" />
                        <br></br>
                        <Text tid="hero-title_span" />
                    </h1>
                </div>
                <div className="calendar_container">
                    <Space direction="vertical" size={12} >
                        <RangePicker onChange={getDates}
                            placement='topLeft'
                            placeholder={!startDate && !endDate ? ['Check-in', 'Check-out'] : [startDate, endDate]}
                        />
                    </Space>
                    <button onClick={() => {
                        scrollSmoothTo('availability')
                    }}
                        className='hero-search-btn'
                        disabled={!startDate && !endDate}
                    >
                        <Text tid="hero-search-btn" />
                    </button>
                </div>
                {/* <div className="hero-video">
                    <video className='videoTag' autoPlay loop muted>
                        <source src={dron_video} type='video/mp4' />
                    </video>
                </div>
                <div className="bg_filter"></div> */}
            </div>


        </div>
    );
}

export default Hero;