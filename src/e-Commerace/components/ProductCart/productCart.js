import React from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import CartItem from "../../../cartModule/components/CartItems/cartItems";
import CartList from "../../../cartModule/components/CartList/cartList";
import { cartStore } from "../../stores";
import CheckoutButton from "../../../cartModule/components/CheckoutButton/checkButton";
import SubTotal from "../../../cartModule/components/SubTotal/subTotal";
import {HideCartButton,ShowCartDivision,CartButton,CartItemsAlignment,CartImageSize,Productscount,CartName,ProductsList,HidededCartDivision} from "./styledComponents";
@observer
class ProductCart extends React.Component{
    @observable shouldDisplayCart=false;
    showCart=()=>{
this.shouldDisplayCart=true
    }
    hideCart=()=>{
this.shouldDisplayCart=false
    }
render(){
return(<div>
 {this.shouldDisplayCart?
 <div className="flex h-screen items-start h-5 cursor-pointer">
    <HideCartButton onClick={this.hideCart}>X</HideCartButton>
   <CartButton>
    <CartItemsAlignment>
        <CartImageSize>
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" ><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>      
                   <Productscount>{cartStore.noOfProductsInCart}</Productscount>
        </CartImageSize>
        <CartName>Cart</CartName>
    </CartItemsAlignment>
        <ProductsList>
    <CartList cartStore={cartStore}/>
        </ProductsList>
        <SubTotal/>
    </CartButton>
 </div>:<HidededCartDivision onClick={this.showCart}>
 <CartImageSize>
 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" ><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
<Productscount>{cartStore.noOfProductsInCart}</Productscount>
        </CartImageSize>
    </HidededCartDivision>}
</div>)
}
}
export default ProductCart
//catStore