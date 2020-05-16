import React from "react"
import {observable,action} from "mobx"
class AddTodo{
    @observable todoTitle=""
    @action.bound
    onAddTodo(){
alert("add Todo")
    }
    @action.bound
    onChangeInput(){
alert("Changed Todo")
    }

}
const addTodo=new AddTodo()
export default addTodo