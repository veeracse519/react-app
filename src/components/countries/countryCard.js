import React from "react"
import './countries.css'
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
}
from "react-router-dom";
import { withRouter } from "react-router-dom"
class CountryCard extends React.Component {

     showCountry = () => {
          this.props.showCountry(true, this.props.data)
     }
     country = () => {
          const { history, data, countries } = this.props
          history.push(`country-dashboard-app/details/:${this.props.data.alpha3Code}`, { data, countries });
     }

     render() {
          return (
               <div onClick={this.country}>
          <div className={this.props.click?"dark total1":"light total"} onClick={this.showCountry}>
          <div className="flag">
          <img className="image" src={this.props.data.flag} width="100%" height="100%"/>
          </div>
          <div className="data">
          <h3>{this.props.data.name}</h3>
          <p><b>Region:</b>{this.props.data.region}</p>
          
          <p><b>Population:</b>{this.props.data.population}</p>
          <p><b>Cappital:</b>{this.props.data.capital}</p>
          
          </div>
          </div>
          
          
          </div>)
     }
}

export default withRouter(CountryCard)
