import React from "react"
import { observer } from "mobx-react";
import { cartStore } from "../../../e-Commerace/stores";
import ShipItButton from "./stledComponents";

@observer
class CheckoutButton extends React.Component{
render(){
    const{cartStore,onClearCartStore}=this.props
return(<div>
    <ShipItButton disabled={cartStore.cartProductList.length?false:true} value={cartStore.cartProductList.length} onClick={onClearCartStore}>CHECKOUT</ShipItButton>
</div>)
}
}
export default CheckoutButton
/*
total
clearCart
*/