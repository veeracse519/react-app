import React from "react"
import {observer} from "mobx-react"
import todoStore from "../../../stores/TodoStore/TodoStore";
@observer
class TodoFooter extends React.Component{
    onChangeSelectedFilter=(e)=>{
let selectedFilter=e.target.value
todoStore.onChangeSelectedFilter(selectedFilter)
    }
    render(){
        const count=todoStore.ActiveTodosCount
        const computedCount=todoStore.CompletedTodosCount
        //alert(count)
        return(<div  className={todoStore.todos.length?"flex justify-around items-center text-xs":"hidden"}>
            <p >{count}:itemsLeft</p>
            <button onClick={this.onChangeSelectedFilter} value="ALL">All</button>
            <button onClick={this.onChangeSelectedFilter} value="ACTIVE">Active</button>
            <button onClick={this.onChangeSelectedFilter} value="COMPLETED">Completed</button>
            <a className={computedCount?"flex":"hidden"} onClick={todoStore.onClearCompleted} value="CLEAR COMPLETED">clear complete</a>
        </div>)
    }
}
export default TodoFooter