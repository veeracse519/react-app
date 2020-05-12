import React from "react"
import {withRouter} from "react-router-dom"
import ProductPage from "../../components/ProductDetails/productDetails"
import { toast, ToastContainer } from "react-toastify";
import { cartStore } from "../../stores";
import { observer } from "mobx-react";
import Tostify from "../../components/Toastify";
@observer
class ProductDetailsRoute extends React.Component{
    onClickAddToCart=()=>{
        toast.warn(<Tostify/>, {
          position: toast.POSITION.BOTTOM_CENTER
        });
        const{state}=this.props.location
        const ProductDetails=state.eachProduct
        cartStore.onClickAddToCart(ProductDetails)
      }
      render(){
       // const{history}=this.props
        const{state}=this.props.location
        console.log(state,"product-details")
        const ProductDetails=state.eachProduct
        let Rate=String(ProductDetails.price)
         let price=Rate.split(".")
          return(<ProductPage
          onClickAddToCart={this.onClickAddToCart}
          ProductDetails={ProductDetails}
          Rate={Rate}
          price={price}
          />)
      }

}
export default withRouter(ProductDetailsRoute)