import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Image } from '../../index';
import logo from '../../../assets/logo.png';
import { FaChevronDown } from "react-icons/fa";

import './style.css';
import '../../../style.css';

const Header = () => {
    return (
        <div className=' flexible jBetween Header pageContent aCenter'>
            <Link to='/'>
                <div>
                    <Image src={logo}></Image>
                </div>
            </Link>
            <div className="container purple topBotomBordersIn ">
                <ul className='flexible'>
                    <div className="contentSecondLi">
                        <li>
                            <NavLink exact to='/'  >
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
                            <ul className='dropdownMenu'>
                                <li>
                                    <NavLink to="/electricepilation">
                                        NEEDLE / ELECTRIC EPILATION
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/microblading">
                                        MICROBLADING
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/lashesextension">
                                        WIMPERNVERLÄNGERUNG
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/DauerhafteHaarentfernung">
                                        DAUERHAFTEN HAATENTFERNUNG
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/wimpernwelle">
                                        WEMPERNWELLE
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/naildesign">
                                        NAGELDESIGN
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/hifu'>
                                        HIFU
                                    </NavLink>
                                </li>
                            </ul>
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
            </div>
        </div>
    )
}
export default Header