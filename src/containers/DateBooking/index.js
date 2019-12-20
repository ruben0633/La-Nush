import React, { useState } from 'react';
import classnmaes from 'classnames';

import './style.css';
import '../../style.css';


 import BookSecond from "./BookSecond";
import BookFirst from "./BookFirst";
import BookLast from "./BookLast";

const DateBooking = () => {
    const [state, setState] = useState(1);
    const onChange = () => {
        return setState(state +1)
    };
    const incState = () => {
        if(state === 1) {
            return <BookFirst onChange={onChange}/>
        }else if(state === 2) {
            return <BookSecond onChange={onChange}/>
        } else {
           return <BookLast />
        }
    };

     return(
        <div className='flexible jCenter'>
            <div className='dataParent'>
                <div className = 'data-services flexible jBetween'>
                    <div className='flexible vertical jCenter grow active-block '>
                        <span className='middle-text'>1. Bedienung</span>
                        <div className={classnmaes('bookStep',{activeStep: state === 1})} />
                    </div>
                    <div className='flexible vertical jCenter grow active-block'>
                        <span className='middle-text'>2. Einzelheiten</span>
                        <div className={classnmaes('bookStep',{activeStep: state === 2})} />
                    </div>
                    <div className='flexible vertical jCenter grow active-block'>
                        <span className='middle-text'>3. Erledigt</span>
                        <div className={classnmaes('bookStep',{activeStep: state === 3})} />
                    </div>
                </div>
                {incState()}
            </div>
        </div>
    )
};

export default DateBooking;