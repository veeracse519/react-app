// import React from "react"
// import {observer} from "mobx-react"
//import { IoLogoModelS } from "react-icons/io"
import {observable,computed,action} from "mobx"
import TodoModel from "../Models/TodoModel"
import { API_INITIAL } from "@ib/api-constants"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
class TodoStore{
@observable todos=[]
@observable selectedFilter="ALL"
@observable count=0
@observable getTodoListAPIStatus;
@observable getTodoListAPIError;
todosAPIService
constructor(todoAPIService){
    this.getTodoListAPIStatus=API_INITIAL
    this.getTodoListAPIError=null
    this.todosAPIService=todoAPIService
}

@action.bound
onAddTodo(title1){
 
    let addTodo=new TodoModel(title1)
    this.todos.push(addTodo)
}
@action.bound
getTodoList=()=>{
  const todoPromise=this.todosAPIService.getTodosAPI()
  return bindPromiseWithOnSuccess(todoPromise)
  .to(this.setGetTodoListAPIStatus,this.setTodoListResponse)
  .catch(this.setGetTodoListAPIError)
}
@action.bound
setTodoListResponse=(todos)=>{
todos.map(eachTodo=>this.onAddTodo(eachTodo))
}
@action.bound
setGetTodoListAPIError=(error)=>{
  
this.getTodoListAPIError=error
}
@action.bound
setGetTodoListAPIStatus=(apiStatus)=>{
this.getTodoListAPIStatus=apiStatus
}
@action.bound
onRemoveTodo(id){
        let todoIndex;
        this.todos.map((eachTodo,index)=>{
            if(eachTodo.id===id){
                
                todoIndex=index
               
            }
        })
        this.todos.splice(todoIndex,1)
}
@action.bound
onChangeSelectedFilter(selected){
    this.selectedFilter=selected

}
@computed
get getFilteredTodos(){
   
    switch(this.selectedFilter){
       
        case "ACTIVE":return this.todos.filter(eachTodo=>eachTodo.isCompleted===false)
        case "COMPLETED":return this.todos.filter(eachTodo=>eachTodo.isCompleted)
        default :return this.todos
    }
    
}
@action.bound
onClearCompleted(){
let filteredArray;
filteredArray=this.todos.filter(eachTodo=>eachTodo.isCompleted===false)
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
// const this.=new TodoStore()

// export {todoStore,TodoStore} 
export default TodoStore