import { Component } from "react";
import ActivitiesEntryData from "./components/ActivitiesEntryData";
import ActivitiesList from "./components/ActivitiesList";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component{
  render(){
    return (
      <section className="contents">
        <ActivitiesEntryData/>
        <ActivitiesList/>
      </section>
    );
  }
}

export default App;
