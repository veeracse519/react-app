import { observable, action } from "mobx";
class CartItemModel{
    @observable cartItemId
    @observable productId
    @observable quantity
    constructor(product){
       this.cartItemId=Math.random().toString()
       this.product=product
       this.quantity=1
    }
    @action.bound
    incrementQuantity(){
       this.quantity++;
    }
}
export default CartItemModel