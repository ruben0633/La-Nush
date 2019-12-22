import React from 'react';
import ReactDOM from 'react-dom';

import Modal from '../Modal';

const Portal = ({onChange}) => {
    return(
        <div>
            {ReactDOM.createPortal(<Modal onChange={onChange}/>, document.getElementById('portal'))}
        </div>
    )
};

export default Portal;