import React from "react"
import { observer } from "mobx-react";
import { cartStore } from "../../../e-Commerace/stores";
import ShipItButton from "./stledComponents";

@observer
class CheckoutButton extends React.Component{
    onClearCartStore=()=>{
        const{cartStore}=this.props
        cartStore.clearCart()
        setTimeout(()=>{alert(
            "tap.ibhubs.in says Thank you for shopping with us HaHa..! Your products will be delivered in 3 days to the address mentioned in your profile")})
    }
render(){
    const{cartStore}=this.props
return(<div>
    <ShipItButton disabled={cartStore.cartProductList.length?false:true} value={cartStore.cartProductList.length} onClick={this.onClearCartStore}>CHECKOUT</ShipItButton>
</div>)
}
}
export default CheckoutButton
/*
total
clearCart
*/