import React from "react"
import image from '../back-icon.svg'
import { TiArrowRight } from 'react-icons/ti';
import { withRouter } from "react-router";
import { IoIosHome } from "react-icons/io";
//import { home3 } from 'react-icons-kit/icomoon/home3' IoIosHeadset
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
}
from "react-router-dom";
class HomeButton extends React.Component {
     back = () => {
          const { history, state } = this.props
          history.push('/countryDashboardApp');
     }

     render() {
          return (<Router>
          <div>
          <div className={this.props.click?"dark back-button":"light back-button"} onClick={this.back} >
          
<h4 className="arrow1"><IoIosHome/></h4>
<h4>{this.props.element}</h4>
</div></div>
</Router>)
     }
}
export default withRouter(HomeButton)
//TiArrowRight
