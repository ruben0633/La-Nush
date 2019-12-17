import React from 'react';

import './style.css';
import '../../style.css'

import { FaTrashAlt } from "react-icons/fa";
import BookItem from "./BookItem";

const DateBooking = () => {
    return(
        <div className='flexible jCenter'>
            <div className='dataParent'>
                <div className = 'data-services flexible jBetween'>
                    <div className='flexible vertical jCenter'>
                        <span className='middle-text'>1. Bedienung</span>
                        <div className='service-color active-color'></div>
                    </div>
                    <div className='flexible vertical jCenter'>
                        <span className='middle-text'>2. Zeit</span>
                        <div className='service-color'></div>

                    </div>
                    <div className='flexible vertical jCenter'>
                        <span className='middle-text'>3. Einzelheiten</span>
                        <div className='service-color'></div>
                    </div>
                    <div className='flexible vertical jCenter'>
                        <span className='middle-text'>4. Erledigt</span>
                        <div className='service-color'></div>
                    </div>
                </div>
                <div className='booking-select-service'>
                    <div style={{padding: '30px 0'}}>
                        <span className='booking-service-title'>Please select service:</span>
                    </div>
                    {/*<div className='flexible vertical'>*/}
                    {/*    <div className='flexible aCenter'>*/}
                    {/*        <div className='select-service flexible vertical '>*/}
                    {/*            <span className='service-text '>*/}
                    {/*                Kategorie*/}
                    {/*            </span>*/}
                    {/*            <select name="" id="" className='section'>*/}
                    {/*                <option>Uncategorized</option>*/}
                    {/*                <option>Uncategorized</option>*/}
                    {/*                <option>Uncategorized</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*        <div className='select-service flexible vertical '>*/}
                    {/*            <span className='service-text'>*/}
                    {/*                Bedienung*/}
                    {/*            </span>*/}
                    {/*            <select name="" id="" className='section'>*/}
                    {/*                <option>Wahlen Sie Service Aus </option>*/}
                    {/*                <option>Wahlen Sie Service Aus</option>*/}
                    {/*                <option>Wahlen Sie Service Aus</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*        <div className='select-service flexible vertical '>*/}
                    {/*            <span className='service-text'>*/}
                    {/*                Mitarbeiter*/}
                    {/*            </span>*/}
                    {/*            <select name="" id="" className='section'>*/}
                    {/*                <option>Lusine Chakalyan </option>*/}
                    {/*                <option>Arus Tigranyan</option>*/}
                    {/*                <option>Freddy Mercury</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*        <div className='icon-parent'>*/}
                    {/*            <FaTrashAlt />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div style={{padding: '50px 0'}}>*/}
                    {/*        <button className='secondary-button'>ADD SERVICES</button>*/}
                    {/*    </div>*/}
                    {/*    <div className='booking-last flexible jEnd'>*/}
                    {/*        <button className='secondary-button'>Nächster</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className='category'>
                        <div>
                            <p className='active-color'>Kategorie</p>
                            <BookItem>Kategorie Wahlen</BookItem>
                            <BookItem>Beratung</BookItem>
                            <BookItem>MIcroblanding Eyebrows/Shadow</BookItem>
                            <BookItem>Wimpernvelangerung</BookItem>
                            <BookItem>Nadelepilation / Elektroepilation</BookItem>
                            <BookItem>Haaeretfernung Laser Herren</BookItem>
                            <BookItem>Haaeretfernung Laser Damen</BookItem>
                            <BookItem>Nageldesigner</BookItem>
                            <BookItem>Nachbesprechung</BookItem>
                            <BookItem>WimpoernWelle / Lashes Lifting</BookItem>
                            <BookItem>Uncategorized</BookItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DateBooking