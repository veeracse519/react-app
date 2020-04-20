import React from "react"
import {observer} from "mobx-react"
import {reaction} from "mobx"
import TodoModel from"../../../stores/Models/TodoModel"
import {todoStore} from "../../../stores/TodoStore/TodoStore"
import themeStore from "../../../stores/ThemeStore/index"
import Todo from "../Todo"
import TodoFooter from "../TodoFooter"
type StoreProps={
  todoStore:Array<TodoModel>
}
@observer
class MobxTodoList extends React.Component{
  componentDidMount(){
    alert(1)
    // const data=fetch("https://todo-list-2.getsandbox.com/todos")
    // .then(response=>response.json())
    // .then(todo=>todoStore.todos=todo)
}
    handleUserInput=(e)=>{
      if(e.keyCode===13 && e.target.value!==""){
      todoStore.onAddTodo(e.target.value)   
         e.target.value=""
      }
    }
    reactionMobx=reaction(()=>todoStore.ActiveTodosCount,(length)=>{
      if(length===0){
        let id=setTimeout(() => {
          alert("Todos complted")
        });
      }
      // clearTimeout(id)
      // reaction.dispose()
    })
    render(){
      console.log(todoStore.todos)
        const todos=todoStore.getFilteredTodos
 
        return(<div className="border border-solid border-black w-11/12">      
         <input className="w-11/12 border border-solid border-blue-900" type="text" onKeyDown={this.handleUserInput}></input>
       {todos.map((eachTodo:TodoModel)=>(
           <Todo key={eachTodo.id} todo={eachTodo}/>
        ))}
        <TodoFooter/>
        </div>)
    }
}
export default MobxTodoList
/*key={Math.random().toString()}  selectedFilter={this.selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter} onClearCompleted={this.onClearCompleted}*/ 