import React from "react"
import {observer} from "mobx-react"
import {todoStore} from"../../../stores/TodoStore/TodoStore"
import TodoModel from"../../../stores/Models/TodoModel"
import "../Todo.css"
type TodoProps={
    todo:TodoModel
}
@observer
class Todo extends React.Component<TodoProps>{
    onCompleteTodo=()=>{
        const {todo}=this.props
        todo.onCompleteTodo()

    }
     onRemoveTodo=()=>{
         const{todo}=this.props
         todoStore.onRemoveTodo(todo.id)
     }
    onUpdateTodoTitle=(e)=>{
const{todo}=this.props
todo.onUpdateTodoTitle(e.target.value)

    }
    render(){
        const{todo}=this.props
        return(<div className="m-0  flex items-center justify-around ">
           <input type="checkbox" onClick={this.onCompleteTodo} defaultChecked={todo.isCompleted}></input>
       <input style={{textDecoration:todo.isCompleted?"line-through":"none"}} type="text" disabled={todo.isCompleted} defaultValue={todo.title} onChange={this.onUpdateTodoTitle}></input>
<button onClick={this.onRemoveTodo}>X</button>

        </div>)
    }
}
export default Todo
