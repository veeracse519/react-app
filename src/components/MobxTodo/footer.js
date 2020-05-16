import React from "react"
import {FooterDiv} from "./mobxStyles"
//import {MobxTodoList} from "./todolist"

class Footer extends React.Component{
     constructor(props) {
          super(props);
          this.state = {
               count: 0,
               activeTodos: []
          }
     }
     itemsLeft = () => {
          const v = this.props.allTodos.filter(item => !item.completed)
          return v.length
     }
     status = () => {
          const v = this.props.allTodos.filter(item => item.completed)
          return v.length
     }
     count = () => {
          const v = this.props.allTodos
          return v.length
     }
     render() {
          return (
<FooterDiv count={this.count()}>
              {/* <div className={this.count()?"footer c":"footer d"}> */}
               <p>{this.itemsLeft()}:itemsLeft</p>
               <button className="border border-solid border-black p-1 " onClick={this.props.alTodos}>All</button>
               <button className="border border-solid border-black p-1" onClick={this.props.active}>Active</button>
               <button className="border border-solid border-black p-1" onClick={this.props.completed}>Completed</button>
               <button  onClick={this.props.clear} className={this.status()?"a hover:underline":"b hover:underline"}>Clear Completed</button>
       
               </FooterDiv>
          )
     }
}
export { Footer }
