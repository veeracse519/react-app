import React from "react"
import { observer } from "mobx-react"
import CheckoutButton from "../CheckoutButton/checkButton"
import { cartStore } from "../../../e-Commerace/stores"
import {TotalPriceCheckout,PriceDetails,Title,TotalCost} from "./styledComponents"
@observer
class SubTotal extends React.Component{
render(){
return(   

<TotalPriceCheckout>
<PriceDetails>
    <Title>SUBTOTAL</Title>
<TotalCost>₹ 
{cartStore.cartProductList.length?(cartStore.totalCartAmount).toFixed(2):"0"}</TotalCost>
</PriceDetails>
<CheckoutButton  cartStore={cartStore}/>
        </TotalPriceCheckout>)
}
}
export default SubTotal
/*
total

*/