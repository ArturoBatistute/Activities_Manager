import React, { Component } from "react";
import ActivitiesCard from "../ActivitiesCard";
import "./style.css"

class ActivitiesList extends Component{

    render(){
        return(
            <ul className="activities-list">
                {Array.of("Priority", "Hold", "To Begin").map((categories, index) => {
                    return(
                        <li className="activities-list_item" key={index}>
                            <ActivitiesCard/>
                        </li>
                    );   
                })}
            </ul>
        );
    }
}

export default ActivitiesList;