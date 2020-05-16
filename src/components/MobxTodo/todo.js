
import React from 'react'

import "../todo.css"
import {EachTodo}from "./mobxStyles"
//import { MdCheckBox } from 'react-icons/md'
//let c = 0;
class Todo extends React.Component {
     // constructor(props) {
     //      super(props)
     //      //this.state = {
     //      //   content: this.props.content
     //      //}

     // }
     add = (event) => {

          this.props.edit(event.target.value, this.props.h)


     }

     render() {

          return (

               <EachTodo>
              <div className="bg-white h-10 flex items-center">
              
                <input className="m-3 w-4 h-4" type="checkbox"  checked={this.props.status1} onClick={this.props.check.bind(this,this.props.id)} />
                </div>
               <input className="todo-status w-11/12" defaultValue={this.props.content} disabled={this.props.status1} onChange={this.add}/>
               <button className="w-12 bg-white h-10 text-red-600" onClick={this.props.delete1.bind(this,this.props.id)}>&#x2717;</button>
               
               </EachTodo>


          )
     }
}

//ReactDOM.render(<TodoList />, document.getElementById("root"))
export { Todo }
/*
width: 30px;
     height: 30px;
     border-radius: 30px;
     background-color: #f2f2f2;
     color: green;
     font-family: arial
*/