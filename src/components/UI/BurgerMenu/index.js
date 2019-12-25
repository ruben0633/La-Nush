import React from 'react';

import './style.css';

const BurgerMenu = ({
    onClick,
    open,
})=> {
    const whenClickOnMenu = () => {
        if (onClick === undefined) {
            return null
        }
        else {

            onClick();
        }
    }
    return (
    <div className="BurgerMenu" onClick = {whenClickOnMenu}>
        <div className="menuToggle">
            <label htmlFor="test">
            <input id="test" type="checkbox" />
            <span/>
            <span/>
            <span/>
            </label>
        </div>


    </div>
    )
}

export default BurgerMenu;