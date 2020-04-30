import React from "react"
import { observer } from "mobx-react"
import {CartItemBody,RemoveButton,CartItemDetails,ProductTitle,ProductStyle,ProductQuantity,ProducrPrice} from "./styledComponents"

@observer
class CartItem extends React.Component{
onRemoveCartItem=()=>{
const{cartStore}=this.props
const{eachProduct}=this.props
cartStore.onRemoveCartItem(eachProduct.cartItemId)
    }
render(){
    const{eachProduct}=this.props
return(<div>
    <hr></hr>
    <CartItemBody>
    <RemoveButton   onClick={this.onRemoveCartItem}>x</RemoveButton>
    <img src={eachProduct.product.image} className="w-12 object-contain"/>
    <CartItemDetails>
<ProductTitle>{eachProduct.product.title}</ProductTitle>
<ProductStyle>{eachProduct.product.printStyle}</ProductStyle>
<ProductQuantity>Quantity:{eachProduct.quantity}</ProductQuantity>
    </CartItemDetails>
    <ProducrPrice>{eachProduct.product.price}</ProducrPrice>
</CartItemBody>
</div>
)
}
}
export default CartItem
