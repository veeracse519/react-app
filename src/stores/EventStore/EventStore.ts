import {observable,action,computed} from "mobx"
import EventModel from "../Models/Event"
// type EventP={
//   event:Array<Object>
// }
class EventStore{
@observable events:Array<EventModel>=[];
@action.bound
onAddEvent(name:string,location:string){
let event=new EventModel(name,location)
this.events.push(event)
}
@action.bound
onDeleteEvent(id:number){
let allEvents=this.events
allEvents.map((eachEvent,index)=>{
  if(eachEvent.id===id){
      allEvents.splice(index,1)
  }
})
allEvents=this.events
}
@computed
get noOfEvents(){
return this.events.length
}
}
const eventStore=new EventStore()
export default eventStore