import React from 'react';

import {RadioButton} from "../index";
import classnames from 'classnames';

import './style.css';
import '../../style.css';

const BookTimeBlock = ({time, disabled, onChange}) => {
    console.log(onChange);
    return (
        <div className={classnames('date flexible jCenter', {dateOpacity: disabled})}>
            <RadioButton disabled={disabled} onChange ={onChange}/>
            <span>{time}<div className={classnames({timeLine : disabled})}/></span>
        </div>
    )
};

export default BookTimeBlock;