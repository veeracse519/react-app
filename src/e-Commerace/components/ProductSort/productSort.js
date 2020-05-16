import React from "react"
import ProductList from "../ProductList/productList"
import { observer } from "mobx-react"
import { Selection,SelectionName,HeaderSection,ProductsCount } from "./styledComponents"
import { observable } from "mobx"
import { productStore } from "../../stores"

@observer
class ProductFilter extends React.Component{
    // @observable searchName=""
    // selectedOption=(e)=>{
    //     if(e.target.value!=="Select"){
    //     this.props.sortBy(e.target.value)
    //     }
    // }
    // handleUserInput=(e)=>{
    //     this.searchName=e.target.value
    //     this.search(this.searchName)
    // }
    // search=(e)=>{
    //     if(e.keyCode===13)
    //     {
    //      this.props.serachBy(e.target.value)
    //     }
    // }
    // all=(e)=>{
    //     this.props.serachBy(e.target.value)
    // }
render(){
  const{search,all,selectedOption,count,searchBy,sortBy,searchedName}=this.props
    return(<HeaderSection>
    <ProductsCount>
{count} Product(s) Found
    </ProductsCount>
    <div>
    <input  onKeyDown={search}  placeholder="Seach Product By Style.." defaultValue={searchedName!=="ALL"?searchedName:""}className="border border-solid border-black"/>
   <button onClick={all} value="ALL" className="border border-solid border-black px-1">ALL</button>
    </div>
    <SelectionName>Sort price by:
    <Selection onClick={selectedOption}>
        <option  hidden>
          Select
        </option>
        <option value="ASCENDING" >
        Lowest to highest
        </option>
        <option value="DESCENDING">
        Highest to lowest
        </option>

    </Selection>
    </SelectionName>
</HeaderSection>)
}
}
export default ProductFilter