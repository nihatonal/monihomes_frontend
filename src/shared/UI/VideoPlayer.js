import React, { useRef, useState } from 'react';

// import video_HD from "../../assets/images/homepage/Beautiful_Places_to_Visit_in_Denmark_HD.mp4";
// import video_FHD from "../../assets/images/homepage/Beautiful_Places_to_Visit_in_Denmark_FHD.mp4";
// import video_SD from "../../assets/images/homepage/Beautiful_Places_to_Visit_in_Denmark_SD.mp4";
import useVideoPlayer from "../hooks/useVideoPlayer";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import './VideoPlayer.css'
function VideoPlayer(props) {
    const { video_HD, video_FHD, video_SD } = props;
    const videoElement = useRef(null);
    const [volume, setVolume] = useState(0.4);
    const [quality, setQuality] = useState('HD');
    const [video, setVideo] = useState(video_HD);
    const [optionsQuality, setOptionsQuality] = useState(false)
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        toggleScreen,
        handleVolume
    } = useVideoPlayer(videoElement);
    return (
        <div className="video-container">

            <div className="video-wrapper">
                <video
                    src={video}
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="actions">
                    {!playerState.isPlaying ?
                        (<button onClick={togglePlay}>

                            <IoMdPlay /></button>
                        ) : (
                            <button onClick={togglePlay}><IoMdPause /></button>
                        )}

                </div>
                <div className="controls">

                    <div className="controls_buttons">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={playerState.progress}
                            onChange={(e) => handleVideoProgress(e)}
                        />
                        <div className="volume-bar-wrapper">
                            <span style={volume >= 0.1 ? { background: "#00acf2" } : null}
                                onClick={() => {
                                    setVolume(0.2)
                                    handleVolume(0.2)
                                }}
                                className="volume-line"></span>
                            <span style={volume >= 0.3 ? { background: "#00acf2" } : null}
                                onClick={() => {
                                    setVolume(0.4)
                                    handleVolume(0.4)
                                }}
                                className="volume-line"></span>
                            <span style={volume >= 0.5 ? { background: "#00acf2" } : null}
                                onClick={() => {
                                    setVolume(0.6)
                                    handleVolume(0.6)
                                }}
                                className="volume-line"></span>
                            <span style={volume >= 0.7 ? { background: "#00acf2" } : null}
                                onClick={() => {
                                    setVolume(0.8)
                                    handleVolume(0.8)
                                }}
                                className="volume-line"></span>
                            <span style={volume >= 0.9 ? { background: "#00acf2" } : null}
                                onClick={() => {
                                    setVolume(1)
                                    handleVolume(1)
                                }}
                                className="volume-line"></span>
                        </div>
                        <div className="video-quality-wrapper">
                            <p onClick={() => {
                                setOptionsQuality(!optionsQuality);
                                togglePlay()
                            }}>
                                {quality}
                            </p>
                            <ul
                                style={optionsQuality ? { top: "-66px" } : null}
                                className="video-quality-options" >
                                <li onClick={() => {
                                    setQuality('FHD')
                                    setVideo(video_FHD)
                                    setOptionsQuality(!optionsQuality)



                                }}>FHD</li>
                                <li onClick={() => {
                                    setQuality('HD')
                                    setVideo(video_HD)
                                    setOptionsQuality(!optionsQuality)


                                }}>HD</li>
                                <li onClick={() => {
                                    setQuality('SD')
                                    setVideo(video_SD)
                                    setOptionsQuality(!optionsQuality)


                                }}>SD</li>
                            </ul>
                        </div>

                        <button className="fullscreen-btn" onClick={toggleScreen}>
                            <AiOutlineFullscreen />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VideoPlayer;