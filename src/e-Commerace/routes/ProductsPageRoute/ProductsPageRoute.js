import React from "react"
import ProductsPage from "../../components/ProductsPage"
import { observer, inject } from "mobx-react"
import { observable } from "mobx"
import {withRouter} from "react-router-dom"
import { productStore } from "../../stores"
@inject('authStore')
@observer
class ProductsPageRoute extends React.Component{
    componentDidMount(){
        this.doNetWorkCall()
        }
        doNetWorkCall=()=>{
            productStore.getProductList()
        }
        signOut=()=>{
            this.props.authStore.userSignOut()
            this.props.history.replace("/sign-in")
        }
       
render(){
    return(<ProductsPage 
    doNetWorkCall={this.doNetWorkCall}
    signOut={this.signOut}
    />)
}
}
export default withRouter(ProductsPageRoute)