import React from 'react';

import {MdClose} from 'react-icons/md';

import './style.css';
import '../../style.css';

const Modal = ({onChange}) => {
    return (
      <div className='Modal flexible jCenter'>
          <form className='login flexible vertical'>
              <div style ={{padding: '0 10px'}}>
                  <div className='flexible jEnd'>
                      <MdClose onClick ={onChange} className='mdClose'/>
                  </div>
                  <p>Login</p>
              </div>
              <div className='log'>
                 <div className='flexible vertical'>
                     <p>Username</p>
                     <input type="email" className='logInput' />
                 </div>
                  <div className='flexible vertical'>
                      <p>Password</p>
                      <input type="password" className='logInput'/>
                  </div>
                  <div className='flexible aCenter'>
                      <input type='checkbox'  className='checkbox'/>
                      <span>Remember me</span>
                  </div>
              </div>
              <div className='last flexible jBetween'>
                  <a href='http://lanushmuenchen.de/wp-login.php?action=lostpassword'>Lost your password?</a>
                  <div className='flexible aCenter'>
                      <button>Log In</button>
                      <p onClick ={onChange}>Cancel</p>
                  </div>
              </div>
          </form>
      </div>
    );
};

export default Modal;