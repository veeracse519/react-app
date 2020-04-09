import React from "react"
class SearchRegion extends React.Component {
     selectedOption = (event) => {
          this.props.filterCountryRegion(event.target.value)
     }
     render() {
          const regions = this.props.region;
          const arry = [...new Set(regions.map(item => item.region))]
          return (
               <div className="select-region"><select className={this.props.class?"select-Region white":"select-Region black"}  onChange={this.selectedOption}>
          <option>ALL</option>
          {arry.map(item=>
          <option>{item}</option>
          )}
          </select></div>)
     }
}
export { SearchRegion }
