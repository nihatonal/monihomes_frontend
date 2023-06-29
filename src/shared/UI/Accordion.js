
import { React, useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import './Accordion.css'
function Accordion(props) {
    const contentEl = useRef();
    const [open, setOpen] = useState(true);
    const [height, setHeight] = useState(0)

    let toggleHandler = (e) => {
        setOpen(!open);
    };
    useEffect(() => {
        setHeight(contentEl.current.scrollHeight);
    }, [])

    //open animation with react spring
    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "46px" },
        to: { opacity: "1", maxHeight: open ? `${height + 46}px` : "38px" },
        config: { duration: "300" }
    });

    return (
        <animated.div className="accordion__item" style={openAnimation} id={props.id}>
            <div className={open ? "accordion__header open" : "accordion__header"} onClick={toggleHandler}>
                <h4>{!open ? <IoIosArrowDown /> : <IoIosArrowUp />}{props.title}</h4>
            </div>
            <div className="accordion__content" ref={contentEl}>
                {props.children}
            </div>
        </animated.div>
    );
}
export default Accordion;