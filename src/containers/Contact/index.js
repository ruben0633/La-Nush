import React from 'react';

import ContactMap from '../../components/Map';

import { Image } from '../../components'

import './style.css';
import '../../style.css';



const Contact = () => {
    return(
        <div className='pageSize page-padding flexible jCenter'>
            <div className='dataParent flexible jBetween vertical'>
                <div className='flexible jBetween'>
                    <div className='map-parent'>
                        <ContactMap />
                    </div>

                    <div className='flexible vertical  grow aCenter'>
                        <span className='contact-title'>Kontakt</span>
                        <Image src="http://lanushmuenchen.de/wp-content/uploads/2018/12/Logo-300x89-1.png" />
                        <div className='flexible vertical contact-info'>
                            <span>Westendstr 151</span>
                            <span>80339 München</span>
                            <span>Tel. +49 89 54316454</span>
                            <span>Mob: +49 176 57891191</span>
                            <span>Email: info@lanush.de</span>
                        </div>
                    </div>
                </div>
                <div className='flexible vertical aEnd'>
                    <span className='info-middle'>Anfahrt mit den öffentlichen Verkehrsmitteln</span>
                    <span>Mit der S-Bahn: S 7 bis Heimeranplatz</span>
                    <span>Mit der U-Bahn: U4/U5 bis Heimeranplatz oder Westendstraße</span>
                    <span>Mit der Tram: Tram 18 oder 19 bis Barthstraße</span>
                </div>
                <div className='flexible jCenter'>
                    <span className='title'>Haben Sie eine Frage? Schreiben Sie uns!</span>
                </div>
            </div>
        </div>
    )
};
export default Contact