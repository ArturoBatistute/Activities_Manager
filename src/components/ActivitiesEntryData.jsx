import { Component } from "react";

class ActivitiesEntryData extends Component{
    render() {
        return (
          <form>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Write your activity..." />
            <button>New activity</button>
          </form>
        );
      }
}

export default ActivitiesEntryData;