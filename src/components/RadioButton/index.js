import React,{useState}  from 'react';

import classnames from 'classnames';

import './style.css';
import '../../style.css';

const RadioButton = ({disabled, onChange}) => {
const [check, setCheck] = useState(false);
    return(
        <div onClick={()=>{setCheck(!check)}}>
            <div  className={classnames('radio flexible jCenter aCenter', {'radioDisabled': disabled, 'radioCheck':check})}  >
                <div className={classnames('radioContent', {'radioContentDisabled': disabled, 'checkRadioContent': check})}/>
            </div>
        </div>
    )
};

export default RadioButton;