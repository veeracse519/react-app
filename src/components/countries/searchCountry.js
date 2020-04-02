import React from "react"
import { TiZoomOutline } from "react-icons/ti";
class SearchCountry extends React.Component {
     enter = (event) => {
          this.props.filterCountryName(event.target.value)
     }
     render() {
          return (<div className={this.props.class?"dark search-country":"light search-country"} >
          <h1 className="search-icon"><TiZoomOutline/></h1>
          <input className={this.props.class?"enter-text dark":"enter-text light"} type="text" placeholder="search by country" onKeyDown={this.enter}/>
     </div>)
     }
}
export { SearchCountry }
