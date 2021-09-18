import { Component } from "react";
import "./style.css"

class ActivitiesCard extends Component{
    render(){
        return(
            <section className="activities-card">
                <header className="activities-card_header">
                    <h3 className="activities-card_title">Title</h3>
                </header>
                <p className="activities-card_body">Write ur activity here</p>
            </section>
        );
    }
}

export default ActivitiesCard;