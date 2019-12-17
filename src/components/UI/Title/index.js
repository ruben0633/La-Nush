import React from 'react';

import './style.css';
import classnames from 'classnames';


const Title = ({
    desc1,
    desc2,
    title1,
    title2,
    width,
    subTitle,
    flexName,
    className
}) => {
    return (
        <div className={flexName}>
        <div
        style={{width: width}}
         className={classnames('title_container', className)}>
            <div className="title_content">
                <h2>{title1}</h2>
                {title1 && title2 && <h2>{title2}</h2>}
                <h3>{subTitle}</h3>
                <span>{desc1}</span>
                {desc1 && desc2 && <p>{desc2}</p>}
            </div>
        </div>
        </div>
    );
};

export default Title;