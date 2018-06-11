import React, { Component } from "react";

class LifeRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "zhangsan"
    };
  }
  componentWillMount() {}
  changeHandle(){
      this.setState({
          name : "父组件改变"
      })
  }
  render() {
    return <div>
        <h2>生命周期</h2>
        <p>{this.state.name}</p>
        <button onClick={()=>this.changeHandle()}>按钮</button>
    </div>;
  }
  componentDidMount() {}
  componentWillReceiveProps(props) {
    this.setState({
      name: props.name
    });
  }
  shouldComponentUpdate(newProps, newState) {
    return newState.name == this.state.name;
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  componentDidMount(){
    
  }
}
export default LifeRound