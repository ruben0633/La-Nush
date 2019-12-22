import React, {useState, UseState} from 'react';

import {Portal} from '../../components';

import './style.css';
import '../../style.css';
const BookSecond = ({onChange}) => {
    const [modalShow, setModalShow] = useState(false);
    const renderState = () => setModalShow(()=> !modalShow );
    return(
        <div className = 'flexible vertical' style={{paddingTop: '30px'}}>
            {modalShow ? <Portal onChange={renderState}/> : null}
            <div className = 'flexible vertical'>
                <p>
                    You selected a booking for Erstes Nachstechen by
                    Lusine Chakhalyan at 10:00 auf December
                    30, 2019. The price for the service is €150.00.
                    Bitte geben Sie Ihre Daten in das untenstehende
                    Formular ein, um mit der Buchung fortzufahren.
                </p>
                <div className='flexible aStart'>
                    <button className='bookButton' onClick={renderState}>
                        LOG  IN
                    </button>
                </div>
                <div className='flexible vertical'>
                    <form action="">
                        <div className='flexible jBetween inputParent'>
                            <div className='flexible grow vertical'>
                                <p className='inputText '>Vorname</p>
                                <input type="text" className='nameSname inputStyle mRight'/>
                            </div>
                            <div className='flexible grow vertical'>
                                <p className='inputText' >Nachname</p>
                                <input type="text" className='nameSname inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical mRight'>
                                <p className='inputText'>Telefon</p>
                                <input className='logContacts inputStyle '/>
                            </div>
                            <div  className='flexible grow vertical mRight'>
                                <p className='inputText'>Email</p>
                                <input className='logContacts inputStyle'/>
                            </div>
                            <div  className='flexible grow vertical'>
                                <p className='inputText'>E-Mail bestätigen</p>
                                <input className='logContacts inputStyle'/>
                            </div>
                        </div>
                        <p className='booking-service-title'>Address</p>
                        <div className='inputParent flexible'>
                             <div className='flexible grow vertical'>
                                 <p className='inputText'>Land</p>
                                 <input type="text" className='geo inputStyle'/>
                             </div>
                        </div>

                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical'>
                                <p className='inputText'>Bundesland / Region</p>
                                <input type="text" className='geo inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical'>
                                <p className='inputText'>Postleitzahl</p>
                                <input type="text" className='geo inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical'>
                                <p className='inputText'>Stadt</p>
                                <input type="text" className='geo inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical'>
                                <p className='inputText'>Adresse</p>
                                <input type="text" className='geo inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical'>
                                <p className='inputText'>Hausnummer</p>
                                <input type="text" className='geo inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible'>
                            <div className='flexible grow vertical'>
                                <p className='inputText'>Zusätzliche Adresse</p>
                                <input type="text" className='geo inputStyle'/>
                            </div>
                        </div>
                        <div className='inputParent flexible aEnd'>
                            <div className='flexible grow vertical mRight'>
                                <p className='inputText'>Geburtstag</p>
                                <select type="text" className='selectStyle' style={{marginRight: '15px'}}>
                                    <option >Wahle einen monat</option>
                                </select>
                            </div>
                            <div className='flexible grow vertical mRight'>
                                <select type="text" className='selectStyle' style={{marginRight: '15px'}}>
                                    <option >Tag auswehlen</option>
                                </select>
                            </div>
                            <div className='flexible grow vertical'>
                                <select type="text" className='selectStyle' >
                                    <option> Jahr auswahlen</option>
                                </select>
                            </div>
                        </div>
                        <div className='inputParent'>
                            <p className='inputText'>Anmerkungen</p>
                            <textarea className='bookTextArea' />
                        </div>
                        <div className='buttonsParent flexible jBetween'>
                            <button className='bookButton' onClick={()=>{onChange('dec')}}>Zurück</button>
                            <button className='bookButton' onClick={()=>{onChange('inc')}}>Nächster</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default BookSecond