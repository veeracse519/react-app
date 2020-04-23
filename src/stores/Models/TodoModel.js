// import React from "react"
// import {observer} from "mobx-react"
import {observable,action} from "mobx"
class TodoModel{
    @observable
    id;
    @observable title=""
    @observable isCompleted=false
    constructor(data){
        
    this.id=data.id?data.id:Math.random().toString()//Date.now()
    this.title=data.title?data.title:data
    this.isCompleted=data.completed===undefined?false:data.completed
    }
    @action.bound
    onCompleteTodo(){
this.isCompleted=!this.isCompleted
    }  
    @action.bound
    onUpdateTodoTitle(updatedvalue){
        this.title=updatedvalue
    }
}
export default TodoModel