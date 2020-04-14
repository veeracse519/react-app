import React from 'react'
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

               <div className="todo">
               <input  type="checkbox" className="round" checked={this.props.h.status} onClick={this.props.check.bind(this,this.props.id)} />
               <input className="todo-status" defaultValue={this.props.content} disabled={this.props.status1} onChange={this.add}/>
               <h2 className="cancel" onClick={this.props.delete1.bind(this,this.props.id)}>&#x2717;</h2>
               </div>


          )
     }
}

//ReactDOM.render(<TodoList />, document.getElementById("root"))
export { Todo }
