import SignPage from "../../components/SignInPage"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
@observer
class EcommeraceAuthentication extends React.Component{
render(){
    alert(1)
    return(
        <Router basename={process.env.PUBLIC_URL}>
      <Route path="/">
    <SignPage/>
      </Route>
      </Router>
    )
}
}
export default EcommeraceAuthentication