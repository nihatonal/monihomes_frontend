import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';
import SocialBar from '../../shared/navigation/SocialBar'
import Payment from './components/Payment';

import './Contact.css'
function Contact(props) {
    const lang = useContext(LanguageContext);
    //lang.dictionary["partner_title"]
    return (
        <section className='section_container' id='contact'>
            <div className="section_wrapper" >
                <h3 className="section_title">{props.title}</h3>
                <div className="contact_content">
                    <div className="contact_info">
                        <a href='https://www.google.com/maps/place/Moni+Homes/@36.6208173,29.1074659,17z/data=!3m1!4b1!4m6!3m5!1s0x14c0417d14b3f587:0xcb48dff072b01c2b!8m2!3d36.6208173!4d29.1096546!16s%2Fg%2F11kq5q_s9c?entry=ttu' target='_blank' rel='noopener noreferrer'
                            className="contact_info_item">
                            <IoLocationOutline />Cumhuriyet, 93. Sok No: 4C, 48300 Fethiye/Muğla, Türkiye
                        </a>
                        <a href='tel:+905308997709' target='_blank' rel='noopener noreferrer'
                            className="contact_info_item">
                            <AiOutlinePhone />+90 530 899 77 09
                        </a>
                        <a href='mailto:monihomes48@gmail.com' target='_blank' rel='noopener noreferrer'
                            className="contact_info_item">
                            <IoIosMail />monihomes48@gmail.com
                        </a>
                        <SocialBar />
                        <Payment
                            title={lang.dictionary["bank_acoount"][0]}
                            account={lang.dictionary["bank_acoount"][1]}
                            account_city={lang.dictionary["bank_acoount"][2]}
                            account_number={lang.dictionary["bank_acoount"][3]}
                            account_owner={lang.dictionary["bank_acoount"][4]}
                        />
                    </div>
                    <div className="content_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.823990600379!2d29.109808223703453!3d36.621938114854785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c0417d14b3f587%3A0xcb48dff072b01c2b!2sMoni%20Homes!5e0!3m2!1str!2sru!4v1687637006341!5m2!1str!2sru" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='monihomes'></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;