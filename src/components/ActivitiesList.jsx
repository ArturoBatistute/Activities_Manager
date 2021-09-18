import React, { Component } from "react";
import ActivitiesCard from "./ActivitiesCard/ActivitiesCard";

class ActivitiesList extends Component{

    render(){
        return(
            <ul>
                {Array.of("Priority", "Hold", "To Begin").map((categories, index) => {
                    return(
                        <li key={index}>
                            
                            <ActivitiesCard/>
                        </li>
                    );   
                })}
            </ul>
        );
    }
}

export default ActivitiesList;