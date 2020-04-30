import React from "react"
import { observer } from "mobx-react"
import Product from "../Product/product"
import { ProductsListDivision } from "./styledComponents"

@observer
class ProductList extends React.Component{

render(){
    const{list,productStore}=this.props
    let products=list
    return( <ProductsListDivision>
    {
        products.map(eachProduct=>(
       <Product key={eachProduct.id} eachProduct={eachProduct} store={productStore}/>
        ))
    }
    </ProductsListDivision>)
}
}
export default ProductList