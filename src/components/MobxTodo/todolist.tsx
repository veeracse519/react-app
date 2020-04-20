import React from "react"
import { observable } from "mobx";
import {observer} from "mobx-react"
import { Todo } from "./todo.js"
import { Footer } from "./footer.js"
import {TodoDiv,TodoHeading}from "./mobxStyles.js"
import Loading from"./loading.svg"
import load from "./Load.svg"
let matter:string;
let c1:number = 0
type MobxTodoListProps={
     status:Boolean
     id:number
     content:string
}
@observer
class MobxTodoList extends React.Component{
   
    @observable todoListContent:Array<any>=[]
    @observable allTasks:Array<any>=[]
    @observable isLoading:boolean=true
    @observable isAnyError:boolean=false
    componentDidMount(){
    this.fetching()
}
fetching=()=>{
     this.isAnyError=false
     this.isLoading=true
     fetch("https://jsonplaceholder.typicode.com/todos")
     .then(response=>{return response.json();})
     .then(todo=>{
        if(todo.length!==undefined) {this.todoListContent=todo;this.allTasks=todo;this.isLoading=false;}
        else{         
              setTimeout(()=>{this.isAnyError=true},2000)
     }
     })
     .catch(err=>{
          setTimeout(()=>{this.isAnyError=true},2000)
     })
}
     checking = (id) => {
          let number;
          let array:Array<any>
           array = [...this.todoListContent]
          number = array.indexOf(id)
          array[number].completed = !array[number].completed
          this.check(array)
     }
     check=(array)=>{
          this.allTasks= array
          console.log(this.allTasks)
     }
     activeTodoss = () => {
          const v:Array<MobxTodoListProps> = this.allTasks.filter(item => !item.completed)
          this.active(v)
     }
     active=(v)=>{
          this.todoListContent= v
     }
     alll = () => {
          this.todoListContent=this.allTasks
     }
     completed = () => {
          const v = this.allTasks.filter(item => item.completed)
          this.complete(v)
     }
     complete=(v)=>{
          this.todoListContent= v
     }
     clearCompleted = () => {
          const veera = this.allTasks
          const v = this.todoListContent
          const v1 = v.filter((item) => !item.completed)
          const v2 = veera.filter(item => !item.completed)
          this.allTasks= v2
          this.todoListContent= v1
     }
     deleteTodo = (id) => {
          let number;
          let number1;
          let array = [...this.todoListContent]
          let array1 = [...this.allTasks]
          number = array.indexOf(id)
          number1 = array1.indexOf(id)
          array.splice(number, 1)
          array1.splice(number1, 1)
          this.todoListContent= array 
          this.allTasks= array1
     }
     edit = (content1, todo) => {
          let id=todo.id
          let todoIndex;
          let array = this.allTasks
          array.forEach((item,index)=>{
               if(item.id===id){
                    todoIndex=index
               }
          })
          console.log(todoIndex)
          array[todoIndex].content = content1
          this.allTasks= array
     }

     press = (event) => {
          if (event.keyCode === 13 && event.target.value !== "") {
               c1 += 1
               matter = event.target.value;
               event.target.value = ""
               let emptyObj = {
                    completed: false,
                    id: c1,
                    title: matter
               }
               let array:Array<MobxTodoListProps> = [...this.todoListContent, emptyObj]
               let array1:Array<MobxTodoListProps>= [...this.allTasks, emptyObj]
               this.addingTodo(array,array1)
          }
     }
addingTodo=(array,array1)=>{
          this.todoListContent= array
          this.allTasks= array1
}
     render() {
          return (

               <TodoDiv>
                    {
                    this.isAnyError?
                    <div className="flex flex-col items-center justify-center min-h-screen "><p className="text-xl text-center">Something went Wrong</p><button className="p-2 bg-blue-500 text-white rounded-sm" onClick={this.fetching}>Retry</button></div>
                    :this.isLoading?
                    <div className="flex flex-col items-center justify-center min-h-screen"><p className="text-xl text-center ">Loading<img src={load}/></p></div>
                    :this.allTasks.length===0?<div className="w-10/12 flex flex-col items-center min-h-screen"><TodoHeading>todos</TodoHeading> <input className="border border-solid border-black w-full h-10 text-center shadow-2xl" type="text" id="txt" onKeyDown={this.press} placeholder="What Needs to be Done..." /><p className="text-xl">No ToDos Yet</p></div>
                    :<div className="w-10/12"><TodoHeading>todos</TodoHeading>
                          <input className="border border-solid border-black w-full h-10 text-center shadow-2xl" type="text" id="txt" onKeyDown={this.press} placeholder="What Needs to be Done..." />
                          {[...this.todoListContent].map((item,index)=>(
                          <Todo key={index} h={item} content={item.title} check={this.checking} id={item} delete1={this.deleteTodo} status1={item.completed} edit={this.edit}/>
                          ))}
                         <Footer allTodos={this.allTasks} active={this.activeTodoss} alTodos={this.alll} completed={this.completed} clear={this.clearCompleted}/>
                    </div>
                    }
          </TodoDiv>

          )
     }
}
export { MobxTodoList }
//
        /*
               box-shadow: 1px 2px 10px lightgrey;
     width: 85%;
     height: 100%;
               */