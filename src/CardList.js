import React from "react";
import Card from './Card';
import PropTypes from 'prop-types';
import { robots } from './robots';


const CardList = (PropTypes) => {
    const CardComponent = PropTypes.robots.map((user, i) => {

        return <div className="bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5" key={i}><Card id={robots[i].id} name={robots[i].name} email={robots[i].email} /></div>

    });
    return (
        <div>
            {CardComponent}
        </div>
    );
}
export default CardList;