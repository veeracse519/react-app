import React from "react"
import {Route} from "react-router-dom"
import ProductPage from "../../components/ProductDetails/productDetails.js"
import ProductDetailsRoute from "./ProductDetailsRoute.js"
export const ProductsRoute= <Route path="/product-details" component={ProductDetailsRoute}/>