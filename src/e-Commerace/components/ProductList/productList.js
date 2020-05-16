import React from "react"
import { observer } from "mobx-react"
import Product from "../Product/product"
import { ProductsListDivision } from "./styledComponents"
//import { ProductRoute } from "../../routes/ProductsPageRoute/ProdductRoute"
import ProductRoute from "../../routes/ProductsPageRoute/ProdductRoute"
@observer
class ProductList extends React.Component{

render(){
    const{list,productStore}=this.props
    let products=list
    return( <ProductsListDivision>
    {
        products.map(eachProduct=>(
       <ProductRoute key={eachProduct.id} eachProduct={eachProduct} store={productStore}/>
        ))
    }
    </ProductsListDivision>)
}
}
export default ProductList