import React from "react"
import {observer} from "mobx-react"
import mobxApp from"../../stores/MobxApp"
class MobxApp extends React.Component{
    
    render(){
        //const {options}=mobxApp
      const options1=mobxApp.options()
      console.log(options1)
       return(<div>
                {options1.map(item=>(
                    <div className="shadow border border-solid border-blue-700 m-2 w-64 flex items-center justify-around">
                        <button className="p-1 border border-solid border-green-500">Add</button>
                        <h1 className=" m-4 h-4 text-black">{item.name}</h1>
                    <h1>{item.id}</h1>
                    <button className="p-1 border border-solid border-red-500">X</button>
                    </div>
                ))
            }
            </div>)
    }
}
export default observer(MobxApp)