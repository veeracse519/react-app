import React from "react"
import {observer, inject} from "mobx-react"
import {reaction} from "mobx"
import TodoModel from"../../../stores/Models/TodoModel"
// import {todoStore} from "../../../stores/TodoStore/TodoStore"
import themeStore from "../../../stores/ThemeStore/index"
import Todo from "../Todo"
import TodoFooter from "../TodoFooter"
import LoadingWrapperWithFailure from "../../common/LoadingWrapperWithFailure"
import NoDataView from "../../common/NoDataView"
@inject('todoStore')
@observer
class MobxModelTodoList extends React.Component{
  componentDidMount(){
   this.doNetworkCalls()
}
doNetworkCalls=()=>{
  this.getTodoStore().getTodoList()
}
getTodoStore=()=>{
  return this.props.todoStore
}
    handleUserInput=(e)=>{
      if(e.keyCode===13 && e.target.value!==""){
      this.props.todoStore.onAddTodo(e.target.value)   
         e.target.value=""
      }
    }
    reactionMobx=reaction(()=>this.getTodoStore().ActiveTodosCount,(length)=>{
      if(length===0){
        let id=setTimeout(() => {
          alert("Todos complted")
        });
      }
      // clearTimeout(id)
      // reaction.dispose()
    })
    renderUsersList=observer(()=>{
      
      return(<div className="flex flex-col items-center justify-center border border-solid border-black min-h-screen bg-indigo-100">  
         <div><h1 className="text-6xl text-pink-500 text-center opacity-50">todos</h1></div>    
         <input className=" w-6/12 shadow-lg h-10 text-center text-xl" type="text" onKeyDown={this.handleUserInput} placeholder="What You Need?"></input>
         {this.getTodoStore().todos.length===0?<NoDataView/>:
       this.getTodoStore().getFilteredTodos.map((eachTodo)=>(
           <Todo key={eachTodo.id} todo={eachTodo}/>
        ))}
        <TodoFooter key={this.getTodoStore().selectedFilter}/>
        </div>)
      })
    
    render(){
      
        const{getTodoListAPIStatus,getTodoListAPIError}=this.getTodoStore()
       const length=this.getTodoStore().todos.length
console.log(length)
        return(
          <LoadingWrapperWithFailure
         // status={this.getTodoStore().selectedFilter}
          apiStatus={getTodoListAPIStatus}
   apiError={getTodoListAPIError}
   onRetryClick={this.doNetworkCalls}
   renderSuccessUI={this.renderUsersList}
  // key={length}
          />
        )
    }
}
export default MobxModelTodoList
/*key={Math.random().toString()}  selectedFilter={this.selectedFilter} onChangeSelectedFilter={this.onChangeSelectedFilter} onClearCompleted={this.onClearCompleted}*/ 