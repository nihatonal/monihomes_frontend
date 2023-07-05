import { React, useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { AiTwotoneDelete } from 'react-icons/ai';
import './GuestTable.css'
function GuestTable(props) {
    const contentEl = useRef();
    const [open, setOpen] = useState(true);
    const [height, setHeight] = useState(0)

    let toggleHandler = (e) => {
        setOpen(!open);
    };
    useEffect(() => {
        setHeight(contentEl.current.scrollHeight);
    }, [])
    console.log(height)
    //open animation with react spring
    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "38px" },
        to: { opacity: "1", maxHeight: open ? `${height + 46}px` : "38px" },
        config: { duration: "300" }
    });

    return (
        <div className='guest_table'>

            <table id='guests'>
                <tbody>
                    <tr>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th></th>
                    </tr>
                    <animated.tr className="accordion__item" style={openAnimation} id={props.id}>
                        <div className={open ? "accordion__header open" : "accordion__header"} onClick={toggleHandler}>
                            <h4>{!open ? <IoIosArrowDown /> : <IoIosArrowUp />}Deneme</h4>
                        </div>
                        <div className="accordion__content" ref={contentEl}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </div>
                    </animated.tr>
                    {/* {props.data && props.data.map((item, i) =>
                        <tr id={item.id} key={item.id+i}>
                            <td>{item.dates[0]}</td>
                            <td>{item.dates[1]}</td>
                            <td>{item.info}</td>
                            <td className='delete_btn' onClick={props.onDelete}><AiTwotoneDelete /></td>
                        </tr>
                    )} */}
                </tbody>
            </table>
        </div>
    );
}

export default GuestTable;