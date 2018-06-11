import React, { Component } from "react";

import LifeRound  from "./lifeRound/parent"
import Massage from './message/parent'
// import Render from './render'
import Style from './style'
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return <ul>
        <li>
          {/* {<LifeRound/>} */}
          {/* <Massage/> */}
          {/* <Render/> */}
          <Style/>
        </li>
    </ul>;
  }
}
export default App