import React from "react"
import { TiZoomOutline } from "react-icons/ti";
class AsscendingFilter extends React.Component {
     enter = (event) => {
          this.props.filterCountryInAlphabeticalOrder(event.target.value)
     }
     render() {
          return (<div  className={this.props.class?"dark back-button symbol":"light back-button symbol"} onClick={this.enter}>
          <button>A->Z</button>     </div>)
     }
}
export { AsscendingFilter }
