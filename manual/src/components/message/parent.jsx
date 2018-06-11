import React,{ Component } from "react";
import Child from './child'

export default class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            name : "zhangsan"
        }
    }
    render(){
        return (
            <div>
                <h1>父组件</h1>
                <Child  name={this.state.name}/>
            </div>
        )
    }
}