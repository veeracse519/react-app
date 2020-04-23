import React from "react"
import {observer, inject} from "mobx-react"
import TodoModel from"../../../stores/Models/TodoModel"
import "../Todo.css"

@inject('todoStore')
@observer
class Todo extends React.Component{
    onCompleteTodo=()=>{
        const {todo}=this.props
        todo.onCompleteTodo()

    }
    getTodoStore=()=>{
        return this.props.todoStore
    }
     onRemoveTodo=()=>{
         const{todo}=this.props
         this.getTodoStore().onRemoveTodo(todo.id)
     }
    onUpdateTodoTitle=(e)=>{
const{todo}=this.props
todo.onUpdateTodoTitle(e.target.value)

    }
    render(){
        const{todo}=this.props
   
        return(<div className="w-6/12 bg-white h-10 flex items-center">
           <input className="m-3 w-4 h-4" type="checkbox" onClick={this.onCompleteTodo} defaultChecked={todo.isCompleted}></input>
       <input className="h-10 w-full text-center" style={{textDecoration:todo.isCompleted?"line-through":"none"}} type="text" disabled={todo.isCompleted} defaultValue={todo.title} onChange={this.onUpdateTodoTitle}></input>
<button className="w-12 bg-white h-10 text-red-600" onClick={this.onRemoveTodo}>X</button>

        </div>)
    }
}
export default Todo
