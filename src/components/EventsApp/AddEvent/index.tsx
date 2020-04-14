import React from "react";
import {observer} from "mobx-react";
import { observable,action } from "mobx";
import eventStore from "../../../stores/EventStore/EventStore"
@observer
class AddEvent extends React.Component{
    @observable eventName="";
    @observable eventLocation="";
@action.bound
onAddEvent(){
    if(this.eventName!=="" && this.eventLocation!==""){
    eventStore.onAddEvent(this.eventName,this.eventLocation)
this.eventName="";
this.eventLocation=""; 
}
}
@action.bound
onChangeEventName(e:any){
    this.eventName=e.target.value

}
@action.bound
onChangeEventLocation(e:any){
  
    this.eventLocation=e.target.value
    
}
render(){
    return(<div className="w-9/12 m-20 flex justify-center items-center border border-solid border-black">
    <div className=" flex flex-col">    
        <input className="m-2 w-64 border border-solid border-black" type="text" placeholder="Event name" onChange={this.onChangeEventName} value={this.eventName}></input>
        <input className="m-2 w-64 border border-solid border-black" type="text" placeholder="Event Location" onChange={this.onChangeEventLocation} value={this.eventLocation}></input>
    </div>
    <button onClick={this.onAddEvent} className="border border-solid border-black ">AddEvent</button>
    </div>)
}
}
export default AddEvent