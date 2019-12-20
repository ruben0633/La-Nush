import React from 'react';

import './style.css';
import '../../style.css';

import {BookItem, BookTimeBlock} from "../../components";

const BookFirst = ({onChange}) => {
    return(
        <div className='booking-select-service'>
            <div style={{paddingTop: '30px'}}>
                <span className='booking-service-title'>Please select service:</span>
            </div>
            <div className='category'>
                <div>
                    <p className='active-color'>Kategorie</p>
                    <BookItem service='Kategorie Wahlen' price='23€' ></BookItem>
                    <BookItem service='Beratung' price='23€'></BookItem>
                    <BookItem service='MIcroblanding Eyebrows/Shadow' price='23€'></BookItem>
                    <BookItem service='Wimpernvelangerung' price='23€'></BookItem>
                    <BookItem service='Nadelepilation / Elektroepilation' price='23€'></BookItem>
                </div>
            </div>
            <div className='category'>
                <div>
                    <p className='active-color'>Bedienung</p>
                    <BookItem service='Kategorie Wahlen' price='23€' ></BookItem>
                    <BookItem service='Beratung' price='23€'></BookItem>
                    <BookItem service='MIcroblanding Eyebrows/Shadow' proce='23€'></BookItem>
                    <BookItem service='Wimpernvelangerung' price='23€'></BookItem>
                    <BookItem service='Nadelepilation / Elektroepilation' price='23€'></BookItem>
                </div>
            </div>
            <div className='category'>
                <div>
                    <p className='active-color'>Mitarbeiter</p>
                    <BookItem persone='Irgendein'></BookItem>
                    <BookItem persone='Lusine Chakhalyan' ></BookItem>
                    <BookItem persone='Anush Chakhalyan'></BookItem>
                </div>
            </div>
            <button className='bookButton'>
                ADD SERVICES
            </button>


            <div className='book-second-step'>
                <div className='row flexible jBetween'>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35' onChange={onChange}/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText'>Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                    <div className='column flexible vertical'>
                        <div className='dateBlock active-block'>
                            <span className='dateText' >Web, Dec 18</span>
                        </div>
                        <BookTimeBlock time='13:35' disabled />
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                        <BookTimeBlock time='13:35'/>
                    </div>
                </div>
                <div style={{borderTop: '1px solid #666'}} className='flexible jEnd'>
                    <button className='bookButton'>Nächster</button>
                </div>
            </div>
        </div>
    )
};

export  default BookFirst;