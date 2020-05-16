import React from "react"
// let c = 0
class Disable extends React.Component {
     state = {
          isDisableButtonChecked: false,
          showMessage: '',
          buttonClick: false

     }
     handleChange = (event) => {
          if (this.state.isDisableButtonChecked === false) {
               this.setState({ buttonClick: false })
          }
          this.setState({ isDisableButtonChecked: !this.state.isDisableButtonChecked })
     }
     handleSubmit = (e) => {
          e.preventDefault()
          this.setState({ buttonClick: true })
     }
     displayMessage = () => {
          if (this.state.buttonClick && this.state.isDisableButtonChecked === false) {
               this.state.showMessage = "Hello i am enable"
          }
          else if (this.state.isDisableButtonChecked) {
               this.state.showMessage = "I am diasible"
          }
          else {
               this.state.showMessage = ""
          }
          return this.state.showMessage
     }
     render() {
          return (
               <form onSubmit={this.handleSubmit}>
          <div className="disiable">
          <input type="checkbox" onChange={this.handleChange}/>Disabled:
          <button className="btn" disabled={this.state.isDisableButtonChecked}>Make choice</button>
     </div>
          <p> {this.displayMessage()}</p>
          </form>)
     }
}
export { Disable }
