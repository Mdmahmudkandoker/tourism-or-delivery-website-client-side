import './destination.css';
import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import Card from '../../component/Card/Card';

const Destinations = () => {
    const {location} = useContext(Context);
    const cards = location.map((l, i)=>(<Card key={i} {...l}/>))
    return (
        <div className='destinations'>
            <div className="container">
                {cards}
            </div>
        </div>
    )
}

export default Destinations
