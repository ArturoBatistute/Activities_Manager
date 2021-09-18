import { Component } from "react";
import ActivitiesEntryData from "./components/ActivitiesEntryData";
import ActivitiesList from "./components/ActivitiesList";

class App extends Component{
  render(){
    return (
      <section>
        <ActivitiesEntryData/>
        <ActivitiesList/>
      </section>
    );
  }
}

export default App;
