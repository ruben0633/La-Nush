import React from 'react';
import './style.css';
import '../../../style.css';
import { Image } from '../../index';


import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Confidentiality from "../../../containers/ Confidentiality";


const Header = () => {
    return(
        <div className=' flexible jBetween Header pageContent aCenter'>
            <Link to='/'>
                <div>
                    <Image src="http://lanushmuenchen.de/wp-content/uploads/2018/12/Logo-300x89-1.png"></Image>
                </div>
            </Link>
            <div className="container purple topBotomBordersIn ">
                <ul className='flexible'>
                    <li>
                        <NavLink exact to='/'  >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Services' >
                            LEISTUNGEN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='Contact'>
                            KONTAKT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/DateBooking'>
                            TERMIN BUCHEN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Confidentiality'>
                            DATENSCUTZ
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header







