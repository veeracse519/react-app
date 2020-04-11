import {observable,action,computed} from "mobx"
import Event from "../Models/Event.js"
class EventStore{
@observable events=[];
@action.bound
onAddEvent(name,location){
let event=new Event(name,location)
this.events.push(event)
}
@action.bound
onDeleteEvent(id){
alert(id)
let allEvents=this.events
allEvents.map((eachEvent,index)=>{
  if(eachEvent.id===id){
      allEvents.splice(index,1)
  }
})
allEvents=this.events
}
get noOfEvents(){
return this.events.length
}
}
const eventStore=new EventStore()
export default eventStore