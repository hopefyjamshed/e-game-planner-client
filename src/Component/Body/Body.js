import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Sidemenu from '../Sidemenu/Sidemenu';
import './Body.css'

const Body = () => {
    const [infos, setInfos] = useState([])
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])

    return (
        <div className='body'>

            <div>
                <h1 className='page-title'>
                    <FontAwesomeIcon style={{ margin: '10px', marginBottom: '0px' }} icon={faFutbol}></FontAwesomeIcon>
                    Game-Planner</h1>
                <h2 className='title'>Make your own Gameplan</h2>
                <div className="card-part">

                    {
                        infos.map(info => <Card
                            key={info.id}
                            info={info}
                        ></Card>)
                    }
                </div>
            </div>
            <div className="side-menu">
                <Sidemenu></Sidemenu>
            </div>
        </div>
    );
};

export default Body;