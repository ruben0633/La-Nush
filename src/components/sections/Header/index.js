import React from 'react';
import './style.css';
import '../../../style.css';
import { Image } from '../../index';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' flexible jBetween Header pageContent aCenter'>
            <Link to='/'>
                <div>
                    <Image src="http://lanushmuenchen.de/wp-content/uploads/2018/12/Logo-300x89-1.png"></Image>
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
                                    <NavLink to="/microbladin">
                                        MICROBLADING
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/lashesextension">
                                        LASHES EXTENSION
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
                                        NAIL DESIGN
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