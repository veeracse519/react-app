import React from "react"
let c = 0
class Favirote extends React.Component {
     state = {
          selectedDessert: '',
          favoriteDessert: '',
          dessertList: this.props.deserts,
          buttonClick: false

     }
     handleUserInput = (event) => {
          this.setState({ selectedDessert: event.target.value })
     }
     handleSubmit = (e) => {
          e.preventDefault()
          if (this.state.selectedDessert != "") {
               this.setState({ favoriteDessert: this.state.selectedDessert, buttonClick: true })
          }
          else {
               alert("not selected")
          }
     }
     displayMessage = () => {
          return `Your Gavirote Diseert is ${this.state.favoriteDessert}`
     }
     renderDessertOptions = () => {

     }
     render() {
          return (
               <form onSubmit={this.handleSubmit}>
          <div className="favirote">
          
          <h3>What is Your Favirote Diseart</h3>
          <div>
     
               {this.state.dessertList.map((item)=>
                    <div>
                    <input type="radio" name='desserts' value={item} onChange={this.handleUserInput}/>{item}
                    </div>
               )
          }
          </div>
          <button className="btn">Make choice</button>
          <p className={this.state.buttonClick?"show":"hide"}>{this.displayMessage()}</p>
          </div>
          </form>)
     }
}
export { Favirote }
