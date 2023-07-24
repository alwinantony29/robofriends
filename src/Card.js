import React from 'react';
import { robots } from './robots';
import './Card.css';





const Card = (PropTypes) => {
    return (
        <div className=''>
            <img alt='robots' src={'https://robohash.org/${i.id}200x200'} />
            <div>
                <h2>{PropTypes.name}</h2>
                <p>{PropTypes.email}</p>
            </div>
        </div>
    )
}

export default Card;