import React  from 'react';

import classnames from 'classnames';

import './style.css';
import '../../style.css';

const RadioButton = ({disabled, onChange}) => {

    return(
        <div className={classnames('radio flexible jCenter aCenter', {'radioDisabled': disabled})} onClick={()=>{onChange()}} >
            <div className={classnames('radioContent', {'radioContentDisabled': disabled})}/>
        </div>
    )
};

export default RadioButton;