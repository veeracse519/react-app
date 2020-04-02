import React from "react"
class AllCities extends React.Component {
     render() {
          return (
               <div>
               
                    <input type="checkbox" name='desserts' value={this.props.city}/>{this.props.city}
                    </div>
          )
     }
}
export { AllCities }
