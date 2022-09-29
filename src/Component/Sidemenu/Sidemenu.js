
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import jamsh from '../../jamsh.jpg'
import './Sidemenu.css'

import './Sidemenu.css'

const Sidemenu = () => {
    return (
        <div>
            <div className='personal-info'>
                <img className='jamsh' src={jamsh} alt="" />
                <div>
                    <h3 className='my-name'>Towhidul Islam</h3>
                    <p className='location'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <span>chittagong, Bangladesh</span></p>
                </div>
            </div>
            <div className='personal-data'>
                <div className="data">
                    <h2 className='h2'>65 <span className='small'>kg</span> </h2>
                    <p className='quantity'>weigth</p>
                </div>
                <div className="data">
                    <h2 className='h2'>5.11 <span className='small'>inch</span> </h2>
                    <p className='quantity'>Height</p>
                </div>
                <div className="data">
                    <h2 className='h2'>26 <span className='small'>Years</span> </h2>
                    <p className='quantity'>Age</p>
                </div>

            </div>
        </div>
    );
};

export default Sidemenu;