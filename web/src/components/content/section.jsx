import React, { Component } from "react";
import axios from "axios";

export default class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    console.log(this.state.data);
    let lis = this.state.data.map((item, ind) => {
      return (
        <li key={ind}>
          <h3>{item.title}</h3>
          <p>{item.cont}</p>
          <p>
            <span>{item.city}</span>
            <span>{item.york}</span>
          </p>
          <p>
            <img src={item.img} alt="" />
            <span>{item.name}</span>
          </p>
        </li>
      );
    });
    return (
      <div className="section">
        <ul>{lis}</ul>
      </div>
    );
  }

  componentDidMount() {
    axios.get("/api").then(res => {
      //this.data = res.data;
      const data = res.data;
      data.map(item => {
        this.setState({ data });
      });
    });
  }
}
