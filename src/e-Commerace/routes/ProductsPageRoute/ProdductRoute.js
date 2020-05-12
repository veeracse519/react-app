import React from "react"
import Product from "../../components/Product/product"
import {withRouter} from "react-router-dom"
import { observable } from "mobx";
import { observer } from "mobx-react";
import { cartStore } from "../../stores";
//import ProductCart from "../ProductCart/productCart.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tostify from "../../components/Toastify";
@observer
class ProductRoute extends React.Component{
    @observable isAdded=false
    @observable isClicked=false
    onClickAddToCart=()=>{
      toast.warn(<Tostify/>, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      const{eachProduct}=this.props
      
      cartStore.onClickAddToCart(eachProduct)
    }
    productDetails=()=>{
      const{history,eachProduct,store}=this.props
      history.push('/product-details',{eachProduct})
      store.clearStore()
    }
    render(){
        const{eachProduct}=this.props
        return(<Product onClickAddToCart={this.onClickAddToCart}
        productDetails={this.productDetails}
        isAdded={this.Added}
        isClicked={this.isClicked}
        eachProduct={eachProduct}
        />)
    }
}
export default withRouter(ProductRoute)