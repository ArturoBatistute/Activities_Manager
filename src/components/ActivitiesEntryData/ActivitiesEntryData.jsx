import { Component } from "react";
import "./style.css";

class ActivitiesEntryData extends Component{
    render() {
        return (
          <form className="activities-data-entry">
            <input 
              type="text" 
              placeholder="Title"
              className="activities-data-entry_input"
            />
            <textarea
              rows={15}
              placeholder="Write your activity..."
              className="activities-data-entry_input"
            />
            <button className="activities-data-entry_input activities-data-entry_submit">
              New activity
            </button>
          </form>
        );
    }
}

export default ActivitiesEntryData;