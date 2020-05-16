// import React from "react"
import {observable} from "mobx"
class CounterApp{
    @observable count=0;
    onIncrement=()=>{
this.count++;
    }
    onDecrement=()=>{
this.count--;
    }
    onChangeCount=(count)=>{
        this.count=count
    }
    
}
const counterApp = new CounterApp()
export default counterApp