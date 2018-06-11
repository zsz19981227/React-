import React,{Component} from 'react'

export default class Input extends Component{
    constructor(props){
        super(props)
        this.state={
            forData:{
                name : 'zhangsan',
                password : "",
                sex : 0,
                love : ["篮球"],
                addr : "南京",
                description : "按时拿到"
            },
            regData:{
                name : {
                    reg : /^[a-zA-Z]{6-12}$/,
                    msg : "请输入正确的用户名"
                },
                password : {
                    reg : /^[a-zA-Z0-9]{6-16}$/,
                    msg : "请输入正确的密码"
                },
            }
        }
    }
    testReg(e){
      let state = this.state.regData[e.target.name].reg.test(this.state.forData[e.target.name])
      console.log(!state)
        if(!state){
            clearnTip()
            let el = document.createElement("p")
            el.setAttribute('class',"show")
            el.innerHTML = this.state.regData[e.target.name].msg
            e.target.parentNode.appendChild(el)
        }else{
            clearnTip()
        }
        function clearnTip() {
            let $p = e.target.parentNode.getElementsByTagName("p")[0]
            console.log($p)
            if($p){
                e.target.parentNode.removeChild($p)
            }
            
            //console.log(e.target.parentNode.removeChild($p))
        }

    }
    changeBind(e){
        console.log(e.target)
        let obj = null;
        switch (e.target.type) {
            case "checkbox":{
                let love = [...this.state.forData.love]
                if(love.includes(e.target.value)){
                    love.splice(love.indexOf(e.target.value),1)
                    console.log(love)
                }else{
                    love.push(e.target.value)
                }
                console.log(love)
                obj={
                    [e.target.name] : love
                }
            } break;
        
            default:{
                obj={
                    [e.target.name] : e.target.value
                }
            }
        }
        this.setState({
            forData:Object.assign(this.state.forData,{
                 [e.target.name] : e.target.value
            })
        })
    }
    submit(){
        console.log(this.state.forData)
    }
    render(){
        return (
            <ul>
                <li>
                    <p>表单</p>
                    <label htmlFor="">用户名：</label>
                    <input type="text" name="name" onChange={this.changeBind.bind(this)} value={this.state.forData.name} onBlur={this.testReg.bind(this)} />
                </li>
                <li>
                    <label htmlFor="">用户名：</label>
                    <input type="password" name="password" onChange={this.changeBind.bind(this)} value={this.state.forData.password}/>
                </li>
                <li>
                    <label htmlFor="">性别：</label>
                    男:
                    <input type="radio" name="sex" value="0" onChange={this.changeBind.bind(this)}
                    checked={this.state.forData.sex == "0"} />&nbsp;
                    女:
                    <input type="radio" name="sex" value="1" onChange={this.changeBind.bind(this)}
                    checked={this.state.forData.sex== "1"} />
                </li>
                <li>
                    <label htmlFor="">爱好：</label>
                    篮球:
                    <input type="checkbox" onChange={this.changeBind.bind(this)} value="篮球" name="love"
                    checked={this.state.forData.love.includes('篮球')} />&nbsp;
                    足球:
                    <input type="checkbox" onChange={this.changeBind.bind(this)}  value="足球" name="love"
                    checked={this.state.forData.love.includes('足球')} />
                    乒乓球:
                    <input type="checkbox" onChange={this.changeBind.bind(this)}  value="乒乓球" name="love"
                    checked={this.state.forData.love.includes('乒乓球')} />
                </li>
                <li>
                <label htmlFor="">城市选择：</label>
                <select name="addr" id="" onChange={this.changeBind.bind(this)}>
                    <option value="北京">北京</option>
                    <option value="南京">南京</option>
                    <option value="上海">上海</option>
                </select>
                </li>
                <li>
                <label htmlFor="">描述：</label>
                <textarea name="description" id="" cols="30" rows="10" onChange={this.changeBind.bind(this)} defaultValue={this.state.forData.description}></textarea>
                </li>
                <li>
                    <button onClick={this.submit.bind(this)}>提交</button>
                </li>
            </ul>
        )
    }
}