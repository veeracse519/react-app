import React from "react"
import {observer} from "mobx-react"
import TodoModel from "../Models/TodoModel.js"
import {observable,computed,action} from "mobx"
import { IoLogoModelS } from "react-icons/io"
class TodoStore{
@observable todos=[]
@observable selectedFilter="ALL"
@observable count=0
@action.bound
onAddTodo(title1){
    let addTodo=new TodoModel(title1)
    console.log(addTodo)
    this.todos.push(addTodo)
}
@action.bound
onRemoveTodo(id){
        let todoIndex;
        todoStore.todos.map((eachTodo,index)=>{
            if(eachTodo.id===id){
                todoIndex=index
            }
        })
        todoStore.todos.splice(todoIndex,1)
}
@action.bound
onChangeSelectedFilter(selected){
    this.selectedFilter=selected
   
}
@computed
get getFilteredTodos(){
    switch(this.selectedFilter){
        case "ACTIVE":return this.todos.filter(eachTodo=>eachTodo.isCompleted===false)
        case "COMPLETED":return this.todos.filter(eachTodo=>eachTodo.isCompleted===true)
        default :return this.todos
    }
}
@action.bound
onClearCompleted(){
let filteredArray;
filteredArray=todoStore.todos.filter(eachTodo=>eachTodo.isCompleted===false)
this.todos=filteredArray
}
 get ActiveTodosCount(){
    let count=0
    this.todos.forEach(eachTodo=>{
        if(eachTodo.isCompleted===false){
            count++
        }
    })
    return count
}
 get CompletedTodosCount(){
    let count=0
    this.todos.forEach(eachTodo=>{
        if(eachTodo.isCompleted===true){
            count++
        }
    })
    return count
}
}
const todoStore=new TodoStore()
export default todoStore