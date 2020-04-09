import React from "react"
import "./countries.css"
import { SearchCountry } from "./searchCountry.js"
import { SearchRegion } from "./selectRegion.js"
import { AsscendingFilter } from "./asscendingFilter.js"
import { DesscendingFilter } from "./desscendingFilter.js"
class CountriesFilterBar extends React.Component {
     render() {
          return (<div className="seraching">
          <SearchCountry filterCountryName={this.props.filterCountryName} class={this.props.class}/>
         <div className="flex">
          <AsscendingFilter filterCountryInAlphabeticalOrder={this.props.filterCountryInAlphabeticalOrder} class={this.props.class}/>
          <DesscendingFilter filterCountryInReverseAlphabeticalOrder={this.props.filterCountryInReverseAlphabeticalOrder} class={this.props.class}/>
          </div>

          <SearchRegion filterCountryRegion={this.props.filterCountryRegion} class={this.props.class} region={this.props.region}/>
     </div>)
     }
}
export { CountriesFilterBar }
