import React from "react"
import { Todo } from "./todo.js"
import { Footer } from "./footer.js"
let matter;
let c1 = 0
class TodoList extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               //todoList: [],
               todoListContent: [],
               // activeTodos: [],
               allTasks: []
          }
     }
     checking = (id) => {

          let number;
          let array = [...this.state.todoListContent]
          number = array.indexOf(id)
          array[number].status = !array[number].status
          this.setState({
               todoListContent: array
          })

     }
     activeTodoss = () => {
          const v = this.state.allTasks.filter(item => !item.status)
          this.setState({ todoListContent: v })

     }
     alll = () => {
          this.setState({ todoListContent: this.state.allTasks })


     }
     completed = () => {
          const v = this.state.allTasks.filter(item => item.status)
          this.setState({ todoListContent: v })

     }
     clearCompleted = () => {
          const veera = this.state.allTasks
          const v = this.state.todoListContent
          const v1 = v.filter((item) => !item.status)
          const v2 = veera.filter(item => !item.status)
          this.setState({ allTasks: v2, todoListContent: v1 })
     }
     deleteTodo = (id) => {
          let number;
          let number1;
          let array = [...this.state.todoListContent]
          let array1 = [...this.state.allTasks]
          number = array.indexOf(id)
          number1 = array1.indexOf(id)
          array.splice(number, 1)
          array1.splice(number1, 1)
          this.setState({ todoListContent: array, allTasks: array1 })
     }
     edit = (content, id) => {

          let array = this.state.allTasks
          let index = array.indexOf(id)
          array[index].content = content
          this.setState({ allTasks: array })
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
               let array = [...this.state.todoListContent, emptyObj]
               let array1 = [...this.state.allTasks, emptyObj]
               this.setState({
                    todoListContent: array,
                    allTasks: array1
               })
          }
     }

     render() {
          return (

               <div className="main-todo">
               <div className="heading">todos</div>
               <div className="input"><input className="main" type="text" id="txt" onKeyDown={this.press} placeholder="What Needs to be Done..." /></div>
                {[...this.state.todoListContent].map((item,index)=>
                     <Todo key={item.id} h={item} content={item.content} check={this.checking} id={item} delete1={this.deleteTodo} status1={item.status} edit={this.edit}/>
               )}
               
               <Footer allTodos={this.state.allTasks} active={this.activeTodoss} alTodos={this.alll} completed={this.completed} clear={this.clearCompleted}/>
               
             
               
               

               
               </div>

          )
     }
}
export { TodoList }
