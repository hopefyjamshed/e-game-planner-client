import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Sidemenu from '../Sidemenu/Sidemenu';
import './Body.css'

const Body = () => {
    const [infos, setInfos] = useState([])
    const [time, setTime] = useState(0)

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])


    const handler = (info) => {

        const newTime = JSON.parse(time + info)

        setTime(newTime)



    }






    return (
        <div className='body'>

            <div>
                <h1 className='page-title'>
                    <FontAwesomeIcon className='football' icon={faFutbol}></FontAwesomeIcon>
                    Game-Planner</h1>
                <h2 className='title'>Make your own Gameplan</h2>
                <div className="card-part">

                    {
                        infos.map(info => <Card
                            key={info.id}
                            info={info}
                            handler={handler}

                        ></Card>)
                    }
                </div>
            </div>
            <div className="side-menu">
                <Sidemenu
                    infos={infos}
                    time={time}

                ></Sidemenu>
            </div>
        </div>
    );
};

export default Body;