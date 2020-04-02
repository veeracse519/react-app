import React from "react"
let c = 0
class Visited extends React.Component {
     state = {
          visitedCities: [],
          selectedCities: [],
          cityOptions: this.props.cities,
          buttonClick: false

     }
     handleUserInput = (event) => {
          if (event.target.checked) {
               let dummyArray = [...this.state.selectedCities, event.target.value]
               this.setState({ selectedCities: dummyArray })
          }
          else {
               let dummyArray = [...this.state.selectedCities]
               let index = dummyArray.indexOf(event.target.value)
               dummyArray.splice(index, 1)
               this.setState({ selectedCities: dummyArray })
          }
     }
     handleSubmit = (e) => {
          e.preventDefault()
          this.setState({ visitedCities: this.state.selectedCities, buttonClick: true })

     }
     displayVisitedCityMessage = () => {
          if (this.state.visitedCities.length > 0) {
               return `You are Visited to  ${this.state.visitedCities}`
          }
          else {
               return ""
          }
     }

     render() {

          return (
               <form onSubmit={this.handleSubmit}>
          <div className="favirote">
          
          <h3>What is Your Favirote Diseart</h3>
          <div>
     
               {this.state.cityOptions.map((item)=>
                    <div>
                    <input type="checkbox" name='desserts' value={item} onChange={this.handleUserInput}/>{item}
                    </div>
               )
          }
          </div>
          <button className="btn">Make choice</button>
          <p className={this.state.buttonClick?"show":"hide"}>{this.displayVisitedCityMessage()}</p>
          </div>
          </form>)
     }
}
export { Visited }
