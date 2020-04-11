import React from "react"
import {Provider,inject,observer} from "mobx-react"
import { observable,action } from "mobx"
@observer
class A extends React.Component{
    render(){
        return(
            <Provider temp="veera">
                <B />
            </Provider>)
    }
}
@inject('temp')
@observer
class B extends React.Component{
    @observable name="";
    @action.bound
    handleInpu(e){
        this.name=e.target.value
    }
    render(){
       const{temp}=this.props
       alert("from B")
        return(
            <div>
                <input className="border border-solid border-black" type="text" onChange={this.handleInpu} defaultValue={this.name}/>
           
        <C name={this.name}/>
        </div>
        )
        
    }
}
@inject('temp','name')
class C extends React.Component{
    render(){
        const {temp,name}=this.props
    return(<div><p>{temp} {name}</p></div>)
    }
}
export default A