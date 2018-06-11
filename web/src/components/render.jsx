import React,{Component} from 'react'
export default class Render extends Component{
    constructor(props){
        super(props)
        this.state = {
            stateT : false,
            list : [1,2,3,4,5,6]
        }
    }
    changeFn(){
        this.setState({
            stateT : !this.state.stateT
        })
    }
    render (){
        // var element = null;
        // if(this.state.stateT){
        //     element = <div>stateT为true时</div>
        // }else{
        //     element = <div>stateT为false时</div>
        // }
        // return (
        //     <div>
        //         <button onClick={()=>this.changeFn()}>按钮</button>
        //         {this.state.stateT?<div>stateT为true时</div>:<div>stateT为false时</div>}
        //     </div>
        // )
        let el = this.state.list.map((i,index)=>{
            return <li key={index}>{i}</li>
        })
        return <ul>
            {el}
        </ul>
    }
}