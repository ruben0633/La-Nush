import React, {useState} from 'react';
import classnames from 'classnames';

import './style.css';
import '../../style.css';

import { IoMdCheckmark } from 'react-icons/io'

const BookItem = ({service, persone, price}) => {
    const [ state, setState ] = useState(false);
    const renderState = () => {
        return setState(!state)
    };
    return(
        <div className={classnames( 'BookItem flexible aCenter jBetween',  {'actBook':state }  )} onClick={renderState}>
            <div className='flexible aCenter'>
                <div className={classnames( 'itemIcon flexible aCenter jCenter',  {'activeItemIcon': state })} >
                    { state ? <IoMdCheckmark fill='ghostWhite'/> : null}
                </div>
                <span  className={classnames( 'itemFont flexible aCenter',  {'activeItemFont': state })}>{service || persone}</span>
            </div>
            <p className={classnames({activeBookPrice : state})}>{price}</p>
        </div>
    )
};

export default BookItem;