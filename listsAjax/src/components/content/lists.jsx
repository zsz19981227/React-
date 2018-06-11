import React,{Component} from 'react'
import axios  from 'axios';

export default class Lists extends Component{
    constructor(props) {
        super(props)
        this.state={
            data : []
        }
    }
    clickList(e){
        e.target.nextElementSibling.style.display = "block"
       if(e.target.nextElementSibling.style.display == "block"){
            let col = [...e.target.nextElementSibling.children]
            for(let i=0;i<col.length;i++){
                col[i].onclick = ()=>{
                    col[i].className = "col"
                    for(let j=0;j<col.length;j++){
                        let nexts = col;
                        if(nexts[j]!= col[i]){
                            nexts[j].className = ""
                        }
                    }
                }
            }
       }
    }
    render(){
        let list = this.state.data.map((item,ind)=>{
            if(ind == 0){
                return(<li key={ind}>首页</li>) 
            }else{
                return (
                    <li key={ind}>
                        <p onClick={this.clickList.bind(this)}>{item.title}
                        <span>↓</span>
                        </p>
                        <ol>
                            {item.cont.map((ite,ind)=>{
                                return <li key={ind}>{ite.title}</li>
                            })}
                        </ol>
                    </li>
                )
           
            }
        })
        return(
            <ul className="uls">
                {list}
            </ul>
        )
    }
    componentDidMount(){
        axios.get('/api').then(res=>{
            console.log(res.data)
            const data = res.data;
            data.map(item=>{
                this.setState({ data })
            })
        })
    }
}