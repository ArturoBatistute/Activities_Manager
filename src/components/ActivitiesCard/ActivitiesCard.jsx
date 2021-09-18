import { Component } from "react";
import "./style.css"

class ActivitiesCard extends Component{
    render(){
        return(
            <section className="activities-card">
                <header>
                    <h3>Title</h3>
                </header>
                <p>Write ur activity here</p>
            </section>
        );
    }
}

export default ActivitiesCard;