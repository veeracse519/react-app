import React from "react"
class Footer extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               count: 0,
               activeTodos: []
          }


     }
     itemsLeft = () => {
          const v = this.props.allTodos.filter(item => !item.status)

          return v.length
     }
     status = () => {
          const v = this.props.allTodos.filter(item => item.status)

          return v.length

     }
     count = () => {

          const v = this.props.allTodos

          return v.length
     }

     render() {
          return (

               <div className={this.count()?"footer c":"footer d"}>
               <p>{this.itemsLeft()}:itemsLeft</p>
               <button className="btn" onClick={this.props.alTodos}>All</button>
               <button className="btn" onClick={this.props.active}>Active</button>
               <button className="btn" onClick={this.props.completed}>Completed</button>
               <a  onClick={this.props.clear} className={this.status()?"a":"b"}>Clear Completed</a>
               </div>
          )
     }
}
export { Footer }
