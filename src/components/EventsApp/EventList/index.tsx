import React from "react"
import {observer} from "mobx-react"
import eventStore from "../../../stores/EventStore/EventStore"
import EventModel from "../../../stores/Models/Event"
import Event from "../Event"
@observer
class EventList extends React.Component{
    render(){
        const allevents=eventStore.events;
        const count=eventStore.noOfEvents;
        return(
        <div>
        <p className={count?"flex justify-center":"hidden"}>No of Events: {count}</p>
   { allevents.map((eachEvent:EventModel)=>(
    <Event eachEvent={eachEvent} key={eachEvent.id}/>
    )
    )
   }
    </div>
)
    }
}
export default EventList