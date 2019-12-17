import React from 'react';

import './style.css';
import '../../style.css';

import {rrs} from '../../assets/HomePage';
import { Services }  from '../../containers';

const Main = () => {
    return(
        <div className='Main' >
            <div className='main-first flexible aCenter jCenter vertical' style={{backgroundImage:`url(${rrs})`}} >
                <span className='italic-text'>Herzlich Willkommen im</span>
                <span className='italic-text' >La‘Nush</span>
                <span className='italic-text'>Laser & Beauty Center</span>
            </div>

            <div className='main-second'>
               <div className='flexible jCenter'>
                   <button className='button'>
                       So finden Sie uns
                   </button>
               </div>
                <div className='flexible jCenter'>
                    <span className='second-title'> ÜBER LA‘NUSH</span>
                </div>
                <span className='second-text flexible'>
                    Wir möchten, dass Sie sich vom ersten Moment an
                    bei uns wohlfühlen und haben ein Laser & Beauty
                    Center geschaffen,
                    welches Wert auf Details legt und sich dadurch
                    wie sich das eigene moderne Wohnzimmer anfühlt.
                </span>
                <span className='second-text flexible'>Sobald Sie unser Laser & Beauty
                    Center im Münchener Westend betreten, werden Sie es spüren:
                    La ‘ Nush ist ein Ort des Ankommens,
                    Wohlfühlens, der Entspannung und garantiert Ihnen
                    eine kleine Auszeit von Ihrem Alltag!
                </span>
                <span  className='second-text flexible jCenter'>
                    Ihr persönlicher Beauty – Moment
                </span>
                <span  className='second-text flexible'>
                    Als Experte für dauerhafte Haarentfernung mit Diodenlaser
                    erfüllen wir Frauen gleichermaßen wie Männer ihren Traum von traumhafter
                    glatter und zarter Haut. Unsere Beauty Treatments wie Microblading,
                    Wimpernverlängerung, Wimpernwelle und Nageldesign runden Ihr
                    Schönheitsprogramm in unserem Beauty & Laser Center perfekt ab.
                </span>
            </div>
            <div >
                <div className='flexible jCenter' id='leistungen'>
                    <span className='title'>LEISUNGEN</span>
                </div>
                <div className='flexible aCenter jCenter'>
                    <Services />
                </div>
                <div className='flexible jCenter'>
                    <button className='button'>
                        Termin buchen
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Main


