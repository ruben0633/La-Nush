import React from 'react';
import classnames from 'classnames';

const Image = ({
                   src,
                   alt,
                   width,
                   height,
                   className,
                   ...restProps
               }) => (
    <img
        style={{ width, height}}
        className={classnames('Image', className)}
        src={src}
        alt={alt}
        { ...restProps}
    />
);

export default Image;