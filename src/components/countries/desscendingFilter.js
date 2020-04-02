import React from "react"
import { TiZoomOutline } from "react-icons/ti";
class DesscendingFilter extends React.Component {
     enter = (event) => {
          this.props.filterCountryInReverseAlphabeticalOrder(event.target.value)
     }
     render() {
          return (<div className={this.props.class?"dark back-button s":"light back-button s"} onClick={this.enter}>
          <h4>Z->A</h4>
     </div>)
     }
}
export { DesscendingFilter }
