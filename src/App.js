import { Component } from "react";
import ActivitiesEntryData from "./components/ActivitiesEntryData";
import ActivitiesList from "./components/ActivitiesList";

class App extends Component{
  render(){
    return (
      <form>
        <ActivitiesEntryData/>
        <ActivitiesList/>
      </form>
    );
  }
}

export default App;
