//import SignPage from "../../components/SignInPage"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "../../components/ProductsPage";
class EcommerceCart extends React.Component{
render(){
    alert(1)
    return(
        <Router basename={process.env.PUBLIC_URL}>
      <Route path="/products-page">
    <ProductsPage/>
      </Route>
      </Router>
    )
}
}
export default EcommerceCart