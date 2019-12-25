import React from 'react';

import ContactMap from '../../components/Map';

import { Image } from '../../components'

import logo from '../../assets/logo.png';
import './style.css';
import '../../style.css';



const Contact = () => {
    return(
        <div className='flexible jCenter'>
            <div className='dataParent flexible jBetween vertical'>
                <div className='flexible jBetween contactParent'>
                    <div className='map-parent'>
                        <ContactMap />
                    </div>

                    <div className='flexible vertical  grow aCenter'>
                        <span className='contact-title'>Kontakt</span>
                        <Image className='contactImage' src={logo} />
                        <div className='flexible vertical contact-info'>
                            <span>Westendstr 151</span>
                            <span>80339 München</span>
                            <span>Tel. +49 89 54316454</span>
                            <span>Mob: +49 176 57891191</span>
                            <span>Email: info@lanush.de</span>
                        </div>
                    </div>
                    <div className='flexible vertical aEnd'>
                        <span className='info-middle'>Anfahrt mit den öffentlichen Verkehrsmitteln</span>
                        <span>Mit der S-Bahn: S 7 bis Heimeranplatz</span>
                        <span>Mit der U-Bahn: U4/U5 bis Heimeranplatz oder Westendstraße</span>
                        <span>Mit der Tram: Tram 18 oder 19 bis Barthstraße</span>
                    </div>
                </div>

                <div className='flexible jCenter vertical aCenter'>
                    <span className='title'>Haben Sie eine Frage? Schreiben Sie uns!</span>
                    <div className='user-contact-block flexible vertical aCenter'>
                        <input type="text" placeholder='Name' className='user-contact-info'/>
                        <input type="email" placeholder='E-Mail' className='user-contact-info'/>
                        <input type="text" placeholder='Telephone' className='user-contact-info'/>
                        <input type="text" placeholder='Nachricht' className='user-contact-info'/>
                        <div className='flexible jEnd button-parent' >
                            <button className='button'>Sended</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Contact