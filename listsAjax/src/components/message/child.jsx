import React,{ Component } from "react";

export default class child extends Component{
    render(){
        return (
            <div>
                <h2>子组件</h2>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
// export default Child