// import React from "react"
// import {observer} from "mobx-react"
import {observable,action} from "mobx"
class TodoModel{
    @observable
    id;
    @observable title=""
    @observable isCompleted=false
    constructor(data){
 
    this.id=Math.random()//Date.now()
    this.title=data
    this.isCompleted=false
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