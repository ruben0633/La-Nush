import React from 'react';

import {RadioButton} from "../index";
import classnames from 'classnames';

import './style.css';
import '../../style.css';

const BookTimeBlock = ({time, disabled}) => {
    return (
        <div className={classnames('date flexible jCenter', {dateOpacity: disabled})}>
            <RadioButton disabled={disabled}/>
            <span>{time}<div className={classnames({timeLine : disabled})}></div></span>
        </div>
    )
}

export default BookTimeBlock;