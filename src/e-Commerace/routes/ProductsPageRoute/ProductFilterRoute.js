import React from "react"
import ProductFilter from "../../components/ProductSort/productSort"
import { observer } from "mobx-react"
import { observable } from "mobx"
@observer
class ProductFilterRoute extends React.Component{
    @observable searchName=""
    selectedOption=(e)=>{
        if(e.target.value!=="Select"){
        this.props.sortBy(e.target.value)
        }
    }
    search=(e)=>{
        if(e.keyCode===13)
        {
         this.props.serachBy(e.target.value)
        }
    }
    all=(e)=>{
        this.props.serachBy(e.target.value)
    }
render(){
 return(<ProductFilter
 selectedOption={this.selectedOption}
 search={this.search}
 all={this.all}
 searchedName={this.props.searchedName}
 serachBy={this.props.serachBy}
 sortBy={this.props.sortBy}
 count={this.props.count}
 />)   
}
}
export default ProductFilterRoute