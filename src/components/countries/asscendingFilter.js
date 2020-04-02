import React from "react"
import { TiZoomOutline } from "react-icons/ti";
class AsscendingFilter extends React.Component {
     enter = (event) => {
          this.props.filterCountryInAlphabeticalOrder(event.target.value)
     }
     render() {
          return (<div  className={this.props.class?"dark back-button s":"light back-button s"} onClick={this.enter}>
          <h4>A->Z</h4>     </div>)
     }
}
export { AsscendingFilter }
