import React from "react"
import { GoSearch } from "react-icons/go";
class SearchCountry extends React.Component {
     enter = (event) => {
          this.props.filterCountryName(event.target.value)
     }
     render() {
          return (<div className={this.props.class?"dark search-country":"light search-country"} >
          <h1 className="search-icon"><GoSearch/></h1>
          <input className={this.props.class?"text-box dark":"text-box light"} type="text" placeholder="search by country" onKeyDown={this.enter}/>
     </div>)
     }
}
export { SearchCountry }
//TiZoomOutline