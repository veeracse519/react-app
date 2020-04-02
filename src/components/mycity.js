import React from "react"
let c = 0
class MyCity extends React.Component {
     state = {
          selectedState: '',
          submittedState: '',
          stateList: this.props.states,
          buttonClick: false

     }
     handleChangeState = (event) => {

          this.setState({ selectedState: event.target.value })
     }
     handleSubmit = (e) => {
          e.preventDefault()
          if (this.state.selectedState != "Select State" && this.state.selectedState != "") {
               this.setState({ submittedState: this.state.selectedState, buttonClick: true })
          }
          else {
               this.setState({ submittedState: "Select State", buttonClick: true })
          }
     }
     displayMessage = () => {
          if (this.state.submittedState != "Select State")
               return `I am From ${this.state.submittedState}`
     }

     render() {
          return (
               <form onSubmit={this.handleSubmit}>
          <div className="favirote">
          
          <h3>What is Your Favirote Diseart</h3>
          <div>
     
                    <select onChange={this.handleChangeState} placeholder="Select">
               {this.state.stateList.map((item)=>
                    <option name='states' value={item}>{item}</option>
                    
               )
          }
          </select>
          </div>
          <button className="btn">Make choice</button>
          <p className={this.state.buttonClick?"show":"hide"}>{this.displayMessage()}</p>
          </div>
          </form>)
     }
}
export { MyCity }
