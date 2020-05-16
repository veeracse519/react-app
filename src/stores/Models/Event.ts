import {observable,action} from "mobx"
class EventModel{
id:number;
@observable name:string;
@observable location:string;
constructor(name:string,location:string){
    this.id=Math.random()
this.name=name
this.location=location
}
@action.bound
onUpdateEventDetails(name,location){

    this.name=name
    this.location=location
}
}
export default EventModel