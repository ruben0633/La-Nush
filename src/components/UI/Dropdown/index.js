import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import BurgerMenu from '../BurgerMenu';
const Dropdown = ({
                      className,
                      onClick,
                      opened,
                      whenResize
                  }) => {
    const [state, setState] = useState('');
    const handleState = e => {
        onClick()
    }
    const handle =() => {
        setState('close');
    }
    const leaveHandler = e => {
        setState('');
    }
    return (
        <>
            {
                whenResize ?
                    <ul  className={classnames({'dropdownMenu' : opened, 'whenResize' : className})}>
                        <li onClick={handleState}>
                            <NavLink exact to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <a href="#leistungen">
                                LEISTUNGEN
                            </a>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to="/electricepilation">
                                NEEDLE / ELECTRIC EPILATION
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to="/MicroBlading">
                                Microblanding
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to="/lashesextension">
                            WIMPERNVERLÄNGERUNG
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to="/DauerhafteHaarentfernung">
                                DAUERHAFTEN HAATENTFERNUNG
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to="/wimpernwelle">
                                WEMPERNWELLE
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to="/naildesign">
                            NAGELDESIGN
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to='/hifu'>
                                HIFU
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to='/Contact'>
                                KONTAKT
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to='/DateBooking'>
                                TERMIN BUCHEN
                            </NavLink>
                        </li>
                        <li onClick={handleState}>
                            <NavLink to='/Confidentiality'>
                                DATENSCUTZ
                            </NavLink>
                        </li>
                        <BurgerMenu/>
                    </ul>
                    :
                    <ul onMouseLeave={leaveHandler}  className={classnames('dropdownMenu',state)}>
                        <li onClick={handle}>
                            <NavLink to="/electricepilation">
                                NADEL / ELECTRIC EPILATION
                            </NavLink>
                        </li>
                        <li onClick={handle}>
                            <NavLink to="/MicroBlading">
                                MICROBLADING
                            </NavLink>
                        </li>
                        <li onClick={handle}>
                            <NavLink to="/lashesextension">
                            WIMPERNVERLÄNGERUNG
                            </NavLink>
                        </li>
                        <li onClick={handle}>
                            <NavLink to="/DauerhafteHaarentfernung">
                                DAUERHAFTEN HAATENTFERNUNG
                            </NavLink>
                        </li>
                        <li onClick={handle}>
                            <NavLink to="/wimpernwelle">
                                WEMPERNWELLE
                            </NavLink>
                        </li>
                        <li onClick={handle}>
                            <NavLink to="/naildesign">
                            NAGELDESIGN
                            </NavLink>
                        </li>
                        <li onClick={handle}>
                            <NavLink to='/hifu'>
                                HIFU
                            </NavLink>
                        </li>
                        <BurgerMenu/>
                    </ul>
            }
        </>
    )
}
export default Dropdown;