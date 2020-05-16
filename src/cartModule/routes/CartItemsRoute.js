import React from "react"
import CartItem from "../components/CartItems/cartItems"
class CartItemsRoute extends React.Component{
    onRemoveCartItem=()=>{
        const{cartStore}=this.props
        const{eachProduct}=this.props
        cartStore.onRemoveCartItem(eachProduct.cartItemId)
   }
render(){
    const{eachProduct}=this.props
    return(<CartItem eachProduct={eachProduct} onRemoveCartItem={this.onRemoveCartItem}/>)
}
}
export default CartItemsRoute