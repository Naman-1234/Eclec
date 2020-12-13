import React from 'react'
import "./Leftpart.css";
import {NavLink} from "react-router-dom";
function Leftpart() {
    return (
        <div>
        <div className="left">
            <NavLink exact to ="/comparison"> <button className="compare__btn">See your Ranking</button></NavLink>
        </div>
        </div>
    )
}

export default Leftpart;
