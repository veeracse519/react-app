import React from "react"
import {withRouter,Redirect} from "react-router-dom"
import ProductCart from "../ProductCart/productCart"
import {ProductDetails,ProductTitle,ProductStyleLine,ProductCurrencyFormate,ProductPrice,ProductPriceDecimals,InstallmentsFormate,AddToCartButton} from "./styledComponents";
import { toast, ToastContainer } from "react-toastify";
import Tostify from "../Toastify";
import { cartStore } from "../../stores";
import { getAccessToken } from "../../../utils/StorageUtils";
class ProductPage extends React.Component{
    onClickAddToCart=()=>{
        toast.warn(<Tostify/>, {
          position: toast.POSITION.BOTTOM_CENTER
        });
        const{state}=this.props.location
        const ProductDetails=state.eachProduct
        cartStore.onClickAddToCart(ProductDetails)
      }
    render(){
        if(!getAccessToken()){
            return <Redirect
            to={{pathname:'/'}}
            />
        }
        const{history}=this.props
        const{state}=this.props.location
        const ProductDetails=state.eachProduct
        let Rate=String(ProductDetails.price)
    let price=Rate.split(".")
    
        return(
            <div className="flex">
               
               
                <div className="right-0 top-0 absolute">
                <ProductCart/>
                </div>
               
               
                <div className="flex flex-row" style={{width:"400px"}}>
                    
                <img src={ProductDetails.image}  className="border border-solid border-black"/>
                 <p className={ProductDetails.isFreeShipping?"absolute border border-solid border-black top-10 center-0 bg-black p-1 text-xs text-white":""}>{ProductDetails.isFreeShipping?"FreeShipping":""}</p> 
                </div>
               
               
                <div  style={{height:"500px",width:"600px"}} className="flex flex-col justify-center border border-solid border-black">
                  <p>This T-shirt is Made by pure Cotton and it is very pricious and Lookig handSome</p>
                   <ProductTitle>{ProductDetails.title}</ProductTitle>
                   {/* <ProductStyleLine/> */}
                   <p className="text-center border border-solid border-black">
                   <ProductCurrencyFormate >{ProductDetails.currencyFormat}</ProductCurrencyFormate>
                   <ProductPrice>{price[0]}</ProductPrice>
                   <ProductPriceDecimals>.{price[1]?price[1].length===1?price[1]+"0":price[1]:"00"}</ProductPriceDecimals>
                   <InstallmentsFormate > 

                   {ProductDetails.installments===0?"":"or "+ProductDetails.installments + " X " + ProductDetails.currencyFormat +" "+ (ProductDetails.price/ProductDetails.installments).toFixed(2)}</InstallmentsFormate>
                   </p>
                   
                   <AddToCartButton onClick={this.onClickAddToCart}>Add to cart</AddToCartButton>

               <ToastContainer/>
                </div>
            </div>
    
        )
}
}
export default withRouter(ProductPage)