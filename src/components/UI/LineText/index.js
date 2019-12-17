import React from 'react';

import './style.css';
import '../../../style.css';
import classnmaes from 'classnames';

const LineText = ({
  width,
  headTitle,
  textTitleLeft,
  textTitleRight,
  lineStyle,
  textColor,
  flexName,
  className
}) => {

  return (
    <div
      style={{
      width: width,
      borderBottom: lineStyle
    }}
      className="LineText">
      <div className={classnmaes('textInner', className)}>
        {headTitle && <h3 style={{
          color: textColor
        }}>{headTitle}</h3> || <div className={classnmaes('textTitle', flexName)}>
          <div className="textTitleLeft">
            {textTitleLeft.map((e, i) => {
              return (
                <p key={i} style={{lineHeight:'35px', padding: '20px 0'}}>{e}</p>
              )
            })
}
          </div>
          <p>{textTitleRight}</p>

        </div>
}
      </div>
    </div>
  )
}

export default LineText;