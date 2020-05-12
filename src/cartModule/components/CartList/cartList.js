import React from "react"
import { observer } from "mobx-react"
import CartItem from "../CartItems/cartItems"
import { cartStore } from "../../../e-Commerace/stores"
import CartItemsRoute from "../../routes/CartItemsRoute"

@observer
class CartList extends React.Component{
render(){
    const{cartStore}=this.props
return(<div>
    {
       cartStore.noOfProductsInCart?cartStore.cartProductList.map(eachItem=>(
<CartItemsRoute eachProduct={eachItem} cartStore={cartStore}/>
        )):<div style={{width:"350px"}} className="flex justify-center items-center "><p className="text-white">Add some more Items</p></div>
    
}
</div>)
}
}
export default CartList
/*
productsInCart
onRemoveCartItem
getProductDetailsById
*/