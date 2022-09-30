
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { click } from '@testing-library/user-event/dist/click';

import React, { useState } from 'react';
import jamsh from '../../jamsh.jpg'
import Time from '../time/Time';


import './Sidemenu.css'

import './Sidemenu.css'

const Sidemenu = (props) => {
    const { infos } = props
    const { time } = props;

    const [select, setSelect] = useState([])

    const timeHandler = (value) => {
        setSelect(value)
    }



    return (
        <div className='sideMenu'>
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
            <h2 className='Break'>Add A Break</h2>
            <div className='set-times'>
                {
                    infos.map(info => <Time
                        key={info.id}
                        info={info}
                        timeHandler={timeHandler}
                    ></Time>)
                }
            </div>


            <div>
                <h2 className='TotalTimeDetails'>Total Time Details</h2>
                <div className="total">
                    <div className="total-time">
                        <h3>Total Time</h3>
                    </div>
                    <div className="total-timeCount">
                        <h3>{time}</h3>
                    </div>
                </div>

                <div className="break-time">
                    <div className="break-time-title">
                        <h3>Break Time</h3>
                    </div>
                    <div className="break-time-amount">
                        <h3>{select}</h3>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sidemenu;