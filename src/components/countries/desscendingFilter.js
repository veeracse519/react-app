import React from "react"
import { TiZoomOutline } from "react-icons/ti";
class DesscendingFilter extends React.Component {
     enter = (event) => {
          this.props.filterCountryInReverseAlphabeticalOrder(event.target.value)
     }
     render() {
          return (<div className={this.props.class?"dark back-button symbol":"light back-button symbol"} onClick={this.enter}>
          <button>Z->A</button>
     </div>)
     }
}
export { DesscendingFilter }
