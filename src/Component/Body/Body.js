import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
            <div className="card-part">
                {
                    infos.map(info => <Card
                        key={info.id}
                        info={info}
                    ></Card>)
                }
            </div>
            <div className="side-menu">
                <h1> this is sidemenu</h1>
            </div>
        </div>
    );
};

export default Body;