import React, { useState, useEffect } from 'react';
import './style.css';
import '../../../style.css';
import { Image } from '../../index';
import {BurgerMenu,Dropdown} from '../../index';

import logo from '../../../assets/logo.png';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
const Header = () => {
    let [whenClickOnBurger, setwhenClickOnBurger] = useState(false);
    let [showOrNot, setshowOrNot] = useState(false);
    const handleClick = () => {
        setwhenClickOnBurger(!whenClickOnBurger);
    }
    const handleShowOrNot = () => {
        ( window.scrollY > 10) ? setshowOrNot(true) : setshowOrNot(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleShowOrNot)
    })
    return (
        <div className={classnames('flexible jBetween Header pageContent aCenter', {'showOrNot' : showOrNot})}>
            <Link to='/'>
                <div>
                    <Image src={logo} className='headerLogo'></Image>
                </div>
            </Link>
            <div className="container purple topBotomBordersIn flexible aCenter">
                <ul className='flexible'>
                    <div className="contentSecondLi">
                        <li>
                            <NavLink exact to='/'>
                                HOME
                            </NavLink>
                        </li>
                    </div>
                    <div className="contentSecondLi">
                        <li>
                            <a href='#leistungen'>
                                LEISTUNGEN
                                <FaChevronDown className="FaChevronDown" />
                            </a>
                            <Dropdown
                                onClick = {handleClick}
                                opened = {whenClickOnBurger}
                                show />
                        </li>
                    </div>
                    <div className="contentSecondLi">
                        <li>
                            <NavLink to='/Contact'>
                                KONTAKT
                            </NavLink>
                        </li>
                    </div>
                    <div className="contentSecondLi">
                        <li>
                            <NavLink to='/DateBooking'>
                                TERMIN BUCHEN
                            </NavLink>
                        </li>
                    </div>
                    <div className="contentSecondLi">
                        <li>
                            <NavLink to='/Confidentiality'>
                                DATENSCUTZ
                            </NavLink>
                        </li>
                    </div>
                </ul>
                <BurgerMenu
                    onClick = {handleClick}
                />
                <Dropdown
                    onClick = {handleClick}
                    opened
                    whenResize
                    className={whenClickOnBurger}
                />
            </div>
        </div>
    )
}
export default Header