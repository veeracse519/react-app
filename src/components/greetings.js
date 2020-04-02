import React from "react"
let name = ""
class Greetings extends React.Component {
     state = {
          UserInput: '',
          displayName: '',
          buttonClick: false
     }
     handleSubmit = (e) => {
          e.preventDefault()
          if (this.state.UserInput != "") {
               this.setState({
                    buttonClick: true,
                    displayName: this.state.UserInput
               })
          }
     }
     handleInput = (event) => {

          this.setState({
               UserInput: event.target.value
          })
     }
     displayMessage = () => {
          return `Hi ${this.state.displayName} Have a nice day`

     }

     render() {
          return (
               <form onSubmit={this.handleSubmit}>
          <div className="greeting">
     
          <input className="input-box" type="text"  onChange={this.handleInput} placeholder="Enter Your Name...."/>
          <button className="btn" >Greet</button>
          <p className={this.state.buttonClick?"show":"hide"} >{this.displayMessage()}</p>
          </div>
          </form>
          )
     }
}
export { Greetings }
