import React  from 'react';

import classnames from 'classnames';

import './style.css';
import '../../style.css';

const RadioButton = ({disabled}) => {
    return(
        <div className={classnames('radio flexible jCenter aCenter', {'radioDisabled': disabled})} >
            <div className={classnames('radioContent', {'radioContentDisabled': disabled})}/>
        </div>
    )
};

export default RadioButton;