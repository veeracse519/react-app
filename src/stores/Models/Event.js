import {observable,action,computed} from "mobx"
class Event{
id;
@observable name;
@observable location;
constructor(name,location){
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
export default Event