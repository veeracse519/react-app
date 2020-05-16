import React from "react"
import {observer} from "mobx-react"
import counterApp from "../../stores/CounterApp"
 class CounterApp extends React.Component{
    onIncrement=()=>{
        counterApp.onIncrement()
    }
    onDecrement=()=>{
        counterApp.onDecrement()
    }
    onChangeCount=(e)=>{
counterApp.onChangeCount(e.target.value)
    }
    render(){
        return(
            <div className="h-screen flex flex-col items-center justify-center">
                <h3 className="mb-6 text-5xl font-bold">Counter</h3>
                <div>
                <button className="h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded" onClick={this.onIncrement}><h1>+</h1></button>
                <input className="w-40 h-12 sm:h-16 text-3xl border-orange-400 border-2 text-center rounded" type="number" onChange={this.onChangeCount} value={counterApp.count}/>
                <button className="h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded" onClick={this.onDecrement}><h1>-</h1></button>
                </div>
            </div>

        )
    }
}
export default observer(CounterApp)