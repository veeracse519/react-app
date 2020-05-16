import React from "react"
import {observer} from "mobx-react"
import AddEvent from "../AddEvent"
import EventList from "../EventList"
@observer
class EventApp extends React.Component{
    render(){
        return(<div>
            <AddEvent key={Math.random().toString()}/>
            <div className="border border-solid border-black">
            <EventList key={Math.random().toString()}/>
            </div>
        </div>)
    }
}
export default EventApp