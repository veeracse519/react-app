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
class Nav extends React.Component {
     back = () => {
          const { history } = this.props
          history.goBack();
     }

     render() {
          return <Router>
          <div className="decorate">
<img style={{color:"white",marginRight:"10px"}} src={image} onClick={this.back}/>
<p style={{color:"white"}}>{this.props.element}</p>
</div>
</Router>
     }
}
export default withRouter(Nav)
