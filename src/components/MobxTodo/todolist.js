import React from "react"
import { Todo } from "./todo.js"
import { Footer } from "./footer.js"
import {TodoDiv,TodoHeading}from "./mobxStyles.js"
import { observable } from "mobx";
import {observer} from "mobx-react"
let matter;
let c1 = 0
@observer
class MobxTodoList extends React.Component {
     // constructor(props) {
     //      super(props)
         
          // this.state = {
          //      //todoList: [],
          //      todoListContent: [],
          //      // activeTodos: [],
          //      allTasks: []
          // }
    // }
    @observable todoListContent=[]
   // @observable activeTodos=[]
    @observable allTasks=[]
     checking = (id) => {
          let number;
          let array = [...this.todoListContent]
          number = array.indexOf(id)
          array[number].status = !array[number].status
          this.check(array)
     }
     check=(array)=>{
          this.allTasks= array
          console.log(this.allTasks)
     }
     activeTodoss = () => {
          const v = this.allTasks.filter(item => !item.status)
          this.active(v)

     }
     active=(v)=>{
          this.todoListContent= v
     }
     alll = () => {
          this.todoListContent=this.allTasks
     }
    
     completed = () => {
          const v = this.allTasks.filter(item => item.status)
          this.complete(v)

     }
     complete=(v)=>{
          this.todoListContent= v
     }
     clearCompleted = () => {
          const veera = this.allTasks
          const v = this.todoListContent
          const v1 = v.filter((item) => !item.status)
          const v2 = veera.filter(item => !item.status)
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
          this.todoListContent= array, 
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
                    status: false,
                    id: c1,
                    content: matter
               }
               let array = [...this.todoListContent, emptyObj]
               let array1 = [...this.allTasks, emptyObj]
               this.addingTodo(array,array1)
          }
     }
addingTodo=(array,array1)=>{
          this.todoListContent= array,
          this.allTasks= array1
}
     render() {
          return (

               <TodoDiv>
               <TodoHeading>todos</TodoHeading>
               <input className="w-11/12 h-10 text-center shadow-2xl" type="text" id="txt" onKeyDown={this.press} placeholder="What Needs to be Done..." />
                {[...this.todoListContent].map((item,index)=>
                     <Todo key={item.id} h={item} content={item.content} check={this.checking} id={item} delete1={this.deleteTodo} status1={item.status} edit={this.edit}/>
               )}
     
               <Footer allTodos={this.allTasks} active={this.activeTodoss} alTodos={this.alll} completed={this.completed} clear={this.clearCompleted}/>
          
             
       
               

               
               </TodoDiv>

          )
     }
}
export { MobxTodoList }
        /*
               box-shadow: 1px 2px 10px lightgrey;
     width: 85%;
     height: 100%;
               */