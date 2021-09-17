import React, { Component } from "react";
import ActivitiesCard from "./ActivitiesCard";

class ActivitiesList extends Component{

    render(){
        return(
            <ul>
                {Array.of("Priority", "Hold", "To Begin").map((categories) => {
                    return(
                        <li>
                            <div>{categories}</div>
                            <ActivitiesCard/>
                        </li>
                    );   
                })}
            </ul>
        );
    }
}

export default ActivitiesList;