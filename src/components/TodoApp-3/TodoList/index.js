import React from "react"
import {observer} from "mobx-react"
import {reaction} from "mobx"
import TodoModel from"../../../stores/Models/TodoModel.js"
import todoStore from "../../../stores/TodoStore/TodoStore.js"
import themeStore from "../../../stores/ThemeStore/index.js"
import Todo from "../Todo"
import TodoFooter from "../TodoFooter"
@observer
class MobxModelTodoList extends React.Component{

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
      clearTimeout(id)
      reaction.dispose()
    })
    render(){
        const todos=todoStore.getFilteredTodos
 
        return(<div className="border border-solid border-black w-11/12">      
         <input className="w-11/12 border border-solid border-blue-900" type="text" onKeyDown={this.handleUserInput}></input>
       {todos.map(eachTodo=>(
           <Todo key={eachTodo.id} todo={eachTodo}/>
        ))}
        <TodoFooter key={Math.random().toString()}  selectedFilter={this.selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter} onClearCompleted={this.onClearCompleted} />
        </div>)
    }
}
export default MobxModelTodoList
