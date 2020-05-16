import React from "react"
import {observable,action} from "mobx"
import {observer} from "mobx-react"
import eventStore from "../../../stores/EventStore/EventStore.js";
@observer
class Event extends React.Component{
    @observable isEditEvent=false;
    @observable eventName=this.props.eachEvent.name;
    @observable eventLocation=this.props.eachEvent.location;
    @action.bound
    onDeleteEvent(){

const {eachEvent}=this.props
eventStore.onDeleteEvent(eachEvent.id)
    }
    @action.bound
    onChangeEventName(e){
this.eventName=e.target.value;
    }
    @action.bound
    onChangeEventLocation(e){
        this.eventLocation=e.target.value;
    }
    @action.bound
    onUpdateEventDetails(){
        const {eachEvent}=this.props
        if(this.eventName!=="" && this.eventLocation!==""){
        eachEvent.onUpdateEventDetails(this.eventName,this.eventLocation)
        this.isEditEvent=!this.isEditEvent
        }
    }
    @action.bound
    renderNewBox(){
    
        this.isEditEvent=!this.isEditEvent
    }    

    render(){
        const{eachEvent}=this.props
        return(
            <div>   
                 <div className={this.isEditEvent?"flex":"hidden"}>
    <div className="w-9/12 m-20 flex justify-center items-center border border-solid border-black">
    <div className=" flex flex-col">    
        <input className="m-2 w-64 border border-solid border-black" type="text" placeholder="Event name" defaultValue={this.eventName} onChange={this.onChangeEventName}></input>
        <input className="m-2 w-64 border border-solid border-black" type="text" placeholder="Event Location" defaultValue={this.eventLocation} onChange={this.onChangeEventLocation}></input>
    </div>
    <button onClick={this.onUpdateEventDetails} className="p-2 border border-solid border-black ">UpdateEvent</button>
    </div>
    </div>
    <div className={this.isEditEvent===false?"w-9/12 m-20 flex justify-center items-center border border-solid border-black":"hidden"}>
    <div className=" flex flex-col">    
    <p className="m-2 w-64">Event Name: {eachEvent.name}</p>
    <p className="m-2 w-64" >Event Location: {eachEvent.location}</p>
    </div>
    <div className="flex flex-col">
    <button onClick={this.renderNewBox} className="m-2 border border-solid border-black ">Edit</button>
    <button onClick={this.onDeleteEvent} className="m-2 border border-solid border-black ">Delete</button>
    </div>
    </div>
    </div>

        )
    }
}
export default Event