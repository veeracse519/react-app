import React from "react"
import { observer } from "mobx-react";
import { cartStore, productStore } from "../../stores";
import ProductCart from "../ProductCart/productCart.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ProductDetails,ProductTitle,ProductStyleLine,ProductCurrencyFormate,ProductPrice,ProductPriceDecimals,InstallmentsFormate,AddToCartButton} from "./styledComponents";
import Tostify from "../Toastify";
import {withRouter} from "react-router-dom"
import { observable } from "mobx";
@observer
class Product extends React.Component{
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
    let Rate=String(eachProduct.price)
    let price=Rate.split(".")
   
    return( <ProductDetails  >
      <div className="cursor-pointer" onClick={this.productDetails}>   
         <p className={eachProduct.isFreeShipping?"absolute top-10 right-0 bg-black p-1 text-xs text-white":""}>{eachProduct.isFreeShipping?"FreeShipping":""}</p>
    <img  src={eachProduct.image} alt={eachProduct.printStyle} className="w-4/5  object-contain mb-2"/>
    <ProductTitle>{eachProduct.title}</ProductTitle>
    <ProductStyleLine/>
     <p className="text-center">
    <ProductCurrencyFormate >{eachProduct.currencyFormat}</ProductCurrencyFormate>
    <ProductPrice>{price[0]}</ProductPrice>
    <ProductPriceDecimals>.{price[1]?price[1].length===1?price[1]+"0":price[1]:"00"}</ProductPriceDecimals>
    <InstallmentsFormate > 
    {eachProduct.installments===0?"":"or "+eachProduct.installments + " X " + eachProduct.currencyFormat +" "+ (eachProduct.price/eachProduct.installments).toFixed(2)}</InstallmentsFormate>
    </p>
    </div>

     <AddToCartButton onClick={this.onClickAddToCart}>Add to cart</AddToCartButton>
     <ToastContainer>
       
     </ToastContainer>
    </ProductDetails>)
}
}
export default withRouter(Product)