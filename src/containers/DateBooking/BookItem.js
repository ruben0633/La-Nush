import React from 'react';

import './style.css';
import '../../style.css';

const BookItem = ({children}) => {
        return(
            <div className='BookItem flexible aCenter'>
                <div className='itemIcon'></div>
                <span className='itemFont'>{children}</span>
            </div>
        )
};

export default BookItem;