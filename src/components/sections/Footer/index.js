import React from 'react';
import { Link } from 'react-router-dom';

import  {Image} from '../../../components';
import logo from '../../../assets/logo.png';

import {FaInstagram} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import './style.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='size'>
                <div className='flexible jBetween footResp'>
                    <div className='flexible vertical footRight aCenter'>
                        <Image src={logo} className='footerImage'/>
                        <div className='flexible footIconParent jCenter'>
                            <a href="mailto:info@lanush.de">
                                <FaEnvelope className='envelopeIcon'/>
                            </a>
                            <a href="https://www.facebook.com/lanushmuc/">
                                <FaFacebookF className='faceIcon'/>
                            </a>
                            <a href="https://www.instagram.com/explore/locations/736888283166177/lanush-haarentfernung-laser-beauty-center/">
                                <FaInstagram className='instaIcon'/>
                            </a>
                        </div>
                    </div>
                    <div className='flexible aCenter jCenter grow footLeft'>
                        <div className='flexible vertical footerText'  style={{textAlign:'center'}}>
                            <span>Westendstr 151</span>
                            <span>80339 München</span>
                            <span>Tel. +49 89 54316454</span>
                            <span>Mob: +49 176 57891191</span>
                            <span>Email: info@lanush.de</span>
                        </div>
                    </div>
                </div>
                <div className='flexible jCenter lastText'>
                    <p style={{marginTop: '20px'}}>© Copyright – La‘Nush |
                        <Link to='/Impressum'> Website created by webfulpro.  Impressum. Datenschutz.</Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer