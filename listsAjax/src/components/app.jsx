import React, { Component } from "react";

// import LifeRound  from "./lifeRound/parent"
// import Massage from './message/parent'
// import Render from './render'
// import Header from './content/render'
// import Section from './content/section'
import List from './content/lists'
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return <div className="wrap">
          {/* <Header/>
          <Section/> */}
          <List/>
    </div>
          
      
  }
}
export default App