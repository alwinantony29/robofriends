import React from "react";
import Card from './Card';
import { robots } from './robots';

const CardList = (PropTypes) => {
    // console.log(PropTypes.robots);
    return (
        <>
        {
        PropTypes.robots.map((user, i) => {
            // console.log(user)
            return(
            <div className="bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5" key={i}>
                <Card id={user.id} name={user.name} email={user.email} />
            </div>
            )
        })
    }
    </>
    )
}
export default CardList;