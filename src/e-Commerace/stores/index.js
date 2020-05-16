import ProductStore from "./ProductStore/productStore";
import ProductService from "../services/ProductServices/productService";
import CartStore from "../../cartModule/stores/cartStore/cartStore";
const productService=new ProductService()
const productStore=new ProductStore(productService)
const cartStore=new CartStore(productStore)
export { productStore,cartStore}