import React from "react"
import image from './back-icon.svg'
import { withRouter } from "react-router";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
}
from "react-router-dom";
class Back extends React.Component {
     back = () => {
          const { history } = this.props
          //history.push("country-dashboard-app/details")
          //history.goBack();
     }

     render() {
          alert(1)
          return (<Router>
          <div className="back-button">
          
<img style={{color:"white",marginRight:"10px"}} src={image} onClick={this.back}/>
{/*<button className="back" onClick={this.back}></button>*/}
<p style={{color:"white"}}>{this.props.element}</p>
</div>
</Router>)
     }
}
export default withRouter(Back)
