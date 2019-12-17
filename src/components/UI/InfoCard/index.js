import React from 'react';

import './style.css';
import '../../../style.css';
import './zoomIn.css';


import classnames from 'classnames';
import {Animated} from 'react-animated-css';



const InfoCard = ({
    bgColor,
    textData,
    listStyle,
    className
}) => {
    return (
        <Animated
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={true}
        className="inforCardContent"
        >
        <div 
        className={classnames('InfoCard', className)}>
            <ul style={{
                backgroundColor : bgColor,
                listStyleType : listStyle || 'none',
                paddingLeft : (listStyle) ? '15px' : '0'
            }} >
                <div className="info_content">
                {
                    textData.map( (e, i) => {
                        return (
                        <li key={i}>{e}</li>
                        )
                    } )

                }
                </div>
            </ul>
        </div>
        </Animated>
    )
}
export default InfoCard;