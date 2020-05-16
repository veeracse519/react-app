import React from "react"
import { observer } from "mobx-react"
//import authStore from "../../../Authentication/stores/index.js"
import { getAccessToken } from "../../utils/StorageUtils.js"
import{Redirect} from "react-router-dom"
import { observable } from "mobx"
import authStore from "../../../Authentication/stores/index.js"
// import authStore from "../../../Authentication/stores"

import{withRouter} from "react-router-dom"

import  {SignOutButton,ProductsDiv,SizesDiv,SizesHeading,XSsizeButton,SsizeButton,MsizeButton,LsizeButton,XLsizeButton,XXLsizeButton} from "./styledComponents.js"
import {productStore} from "../../stores/index.js"
import ProductList from "../ProductList/productList.js"
import ProductFilter from "../ProductSort/productSort.js"
import SizeFilter from "../SizeFilter/sizeFilter.js"
import ProductCart from "../ProductCart/productCart.js"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure/index.js"
import ProductFilterRoute from "../../routes/ProductsPageRoute/ProductFilterRoute.js"

@observer
class ProductsPage extends React.Component{
    // componentDidMount(){
    // this.doNetWorkCall()
    // }
    // doNetWorkCall=()=>{
    //     productStore.getProductList()
    // }
    // signOut=()=>{
    //     authStore.userSignOut()
    //     this.props.history.replace("/sign-in")
    // }
    renderUsersList=observer(()=>{
      const{signOut}=this.props
        return(
                 <div className="m-6 relative responsive-container">
                <SignOutButton onClick={signOut}>signOut</SignOutButton>
               <div className="fixed top-0 right-0 z-20">
                <ProductCart key={Math.random().toString()}/>
                </div>

        <div className="flex justify-center">
        <SizeFilter selectSize={productStore.onSelectSize} sizeFilter={productStore.sizeFilter}/>
       
        
        <div className="flex flex-col flex-1">
        <ProductFilterRoute key={Math.random().toString()} count={productStore.totalNoOfProductsDisplayed} serachBy={productStore.searchBy}  sortBy={productStore.onChangeSortBy} searchedName={productStore.searchByProduct}/>
        
            <ProductList key={Math.random().toString()}  list={productStore.sortedAndFilteredProducts} productStore={productStore}/>
           
           
        </div>
        </div>
      </div>
        )
    })
    render(){
        const{getProductListAPIStatus,getProductListAPIError,doNetWorkCall}=productStore
        return(
            <LoadingWrapperWithFailure
            apiStatus={getProductListAPIStatus}
            apiError={getProductListAPIError}
            onRetryClick={doNetWorkCall}
            renderSuccessUI={this.renderUsersList}
            />
        )
    }
}
export default ProductsPage