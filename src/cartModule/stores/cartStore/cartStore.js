import { observable, action, computed } from "mobx";
import CartItemModel from "../Models/cartModel";

class CartStore {
  @observable cartProductList;
  @observable productStore;
  @observable totalAmount;
  constructor(productStore) {
    this.productStore = productStore;
    this.cartProductList = [];
    this.totalAmount = 0;
  }
  @action.bound
  onClickAddToCart(product) {
    if (this.cartProductList.length === 0) {
      let cartModel = new CartItemModel(product);
      this.cartProductList.push(cartModel);
    } else {
      let isAvailble = false;
      this.cartProductList.map((eachProduct) => {
        if (eachProduct.product.id === product.id) {
          eachProduct.incrementQuantity();
          isAvailble = true;
        }
      });
      if (isAvailble === false) {
        let cartModel = new CartItemModel(product);
        this.cartProductList.push(cartModel);
      }
    }
  }
  @action.bound
  onRemoveCartItem(id) {
    this.cartProductList.map((eachProduct) => {
      if (eachProduct.cartItemId === id) {
        let index = this.cartProductList.indexOf(eachProduct);
        this.cartProductList.splice(index, 1);
      }
    });
  }
  @action.bound
  clearCart() {
    this.cartProductList = [];
  }
  @action.bound
  getProductDetailsById() {}
  @computed
  get totalCartAmount() {
    let sum = 0;
    this.cartProductList.map((eachProduct) => {
      sum = sum + eachProduct.product.price * eachProduct.quantity;
    });
    return sum;
  }
  @computed
  get noOfProductsInCart() {
    let sum = 0;
    this.cartProductList.map((eachProduct) => {
      sum += eachProduct.quantity;
    });
    return sum;
  }
}
export default CartStore;
