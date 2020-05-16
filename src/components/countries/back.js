import React from "react"
//import image from '../back-icon.svg'
import { TiArrowLeft } from 'react-icons/ti';
import { withRouter } from "react-router";
import {
     BrowserRouter as Router
  //   Switch,
   //  Route,
     //Link
}
from "react-router-dom";
class Back extends React.Component {
     back = () => {
          const { history } = this.props
          //history.go(-1)
          // console.log(this.props)
          history.goBack();
     }

     render() {

          return (<Router>
          <div>
          <div className={this.props.click?"dark back-button":"light back-button"} onClick={this.back}>
          
<h1 className="arrow"><TiArrowLeft/></h1>
<button>{this.props.element}</button>
</div></div>
</Router>)
     }
}
export default withRouter(Back)
