import React from "react"
import {observer, inject} from "mobx-react"
// import {todoStore} from "../../../stores/TodoStore/TodoStore";
//import {TodoStore} from "../../../stores/TodoStore/TodoStore";
// type todoProps={
//     todoStore:Array<any>
// }
@inject('todoStore')
@observer
class TodoFooter extends React.Component{
    getTodoStore=()=>{
       return  this.props.todoStore
    }
    onChangeSelectedFilter=(e)=>{
let selectedFilter=e.target.value
this.getTodoStore().onChangeSelectedFilter(selectedFilter)
    }
    render(){
        const count=this.getTodoStore().ActiveTodosCount
        const computedCount=this.getTodoStore().CompletedTodosCount
        return(<div  className={this.getTodoStore().todos.length?" flex w-6/12 items-center justify-around text-xs bg-white shadow-paperStack   h-10 text-center":"hidden"}>
            <p >{count}:itemsLeft</p>
            <button className="border border-solid border-black px-1" onClick={this.onChangeSelectedFilter} value="ALL">All</button>
            <button className="border border-solid border-black px-1" onClick={this.onChangeSelectedFilter} value="ACTIVE">Active</button>
            <button className="border border-solid border-black px-1" onClick={this.onChangeSelectedFilter} value="COMPLETED">Completed</button>
            <button className={computedCount?"flex hover:underline":"hidden"}  value="CLEAR COMPLETED" onClick={this.getTodoStore().onClearCompleted}>clear complete</button>
        </div>
        )
    }
}
export default TodoFooter