import { observable, action, computed } from "mobx"
import { API_INITIAL } from "@ib/api-constants";
import ProductModel from "../Models/productModel";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
class ProductStore{
@observable productList;
@observable getProductListAPIStatus;
@observable getProductListAPIError;
productsAPIService
@observable sizeFilter;
@observable sortBy;
@observable searchByProduct;
constructor(productService){
    this.productsAPIService=productService
    this.init()
}
@action.bound
init(){
    this.getProductListAPIError=null
    this.getProductListAPIStatus=API_INITIAL
    this.productList=[]
    this.sizeFilter=[]
    this.sortBy="SELECT"
    this.searchByProduct='ALL'
}
@action.bound
clearStore(){
    this.init()
}
@action.bound
getProductList(){
const userProductPromise=this.productsAPIService.getProductAPI()
return bindPromiseWithOnSuccess(userProductPromise)
.to(this.setGetProductListAPIStatus,this.setProductListResponse)
.catch(this.setGetProductListAPIError)
}
@action.bound
setProductListResponse(productsList){

productsList.map(eachProduct=>{
    let productModel=new ProductModel(eachProduct)
    this.productList.push(productModel)
})
}
@action.bound
setGetProductListAPIError(error){
    console.log(error)
this.getProductListAPIError=error

}
@action.bound
setGetProductListAPIStatus(apiStatus){
this.getProductListAPIStatus=apiStatus
}
@action.bound
onChangeSortBy(cost){
this.sortBy=cost
}
@action.bound
onSelectSize(size){
if(this.sizeFilter.indexOf(size)===-1){
this.sizeFilter.push(size)
}
else {
     if(this.sizeFilter.indexOf(size)!==-1){
        let delete_Size=this.sizeFilter.indexOf(size)
        this.sizeFilter.splice(delete_Size,1)
     }
}
}
@action.bound
searchBy(name){
this.searchByProduct=name
//alert(this.searchByProduct)
}
@computed
get products(){

}
@computed
get sortedAndFilteredProducts(){

    if(this.sizeFilter.length===0 && this.sortBy==="SELECT" && this.searchByProduct==="ALL"){
        return this.productList
    }
    else if(this.sizeFilter.length===0 && this.sortBy==="SELECT" && this.searchByProduct!=="ALL"){
        let searchtext=this.searchByProduct
        //this.searchByProduct=""
        return this.productList.filter((item) =>
               item.title.toLowerCase().search( searchtext.toLowerCase()) !== -1);
        
               
 }
 else if(this.sizeFilter.length===0 && this.sortBy==="ASCENDING" && this.searchByProduct!=="ALL"){
    let searchtext=this.searchByProduct
    //this.searchByProduct=""
    let sortedList= this.productList.filter((item) =>
    item.title.toLowerCase().search( searchtext.toLowerCase()) !== -1);
    return sortedList.sort(function(product1,product2){
        return product1.price-product2.price
    })
 }
 else if(this.sizeFilter.length===0 && this.sortBy==="DESCENDING" && this.searchByProduct!=="ALL"){
    let searchtext=this.searchByProduct
    //this.searchByProduct=""
    let sortedList= this.productList.filter((item) =>
    item.title.toLowerCase().search( searchtext.toLowerCase()) !== -1);
    return sortedList.sort(function(product1,product2){
        return product2.price-product1.price
    })
 }
    else if(this.sortBy==="ASCENDING" && this.sizeFilter.length===0 && this.searchByProduct==="ALL"){
        return this.productList.sort(function(product1,product2){
            return product1.price-product2.price
        })
    }
    else if(this.sortBy==="DESCENDING" && this.sizeFilter.length===0 && this.searchByProduct==="ALL"){
        return this.productList.sort(function(product1,product2){
            return product2.price-product1.price
        })
    }
    else if(this.sortBy==="SELECT" && this.sizeFilter.length!==0 && this.searchByProduct!=="ALL"){
        let current_List=[]
        let isAvailble = false
        current_List= (this.productList.filter((eachProduct)=>{
        eachProduct.availableSizes.filter(eachSize=>{
            if(this.sizeFilter.indexOf(eachSize) !== -1){
                isAvailble=true
            }

        })
        const isTrue = isAvailble;
        isAvailble=false
       return isTrue?eachProduct:null
       
    }))
    let searchtext=this.searchByProduct
    return current_List.filter((item) =>
               item.title.toLowerCase().search( searchtext.toLowerCase()) !== -1);
    }



    else if(this.sortBy==="ASCENDING" && this.sizeFilter.length!==0 && this.searchByProduct!=="ALL"){
        let current_List=[]
        current_List= this.productList.sort(function(product1,product2){
            return product1.price-product2.price

        })
        let isAvailble = false
        let sortedList= (current_List.filter((eachProduct)=>{
        eachProduct.availableSizes.filter(eachSize=>{
            if(this.sizeFilter.indexOf(eachSize) !== -1){
                isAvailble=true
            }

        })
        const isTrue = isAvailble;
        isAvailble=false
       return isTrue?eachProduct:null
       
    }))
    let searchtext=this.searchByProduct
    return sortedList.filter((item) =>
               item.title.toLowerCase().search( searchtext.toLowerCase()) !== -1);

    }
    else if(this.sortBy==="DESCENDING" && this.sizeFilter.length!==0 && this.searchByProduct!=="ALL"){
        let current_List=[]
        current_List= this.productList.sort(function(product1,product2){
            return product2.price-product1.price

        })
        let isAvailble = false
        let sortedList= (current_List.filter((eachProduct)=>{
        eachProduct.availableSizes.filter(eachSize=>{
            if(this.sizeFilter.indexOf(eachSize) !== -1){
                isAvailble=true
            }

        })
        const isTrue = isAvailble;
        isAvailble=false
       return isTrue?eachProduct:null
       
    }))
    let searchtext=this.searchByProduct
    return sortedList.filter((item) =>
               item.title.toLowerCase().search( searchtext.toLowerCase()) !== -1);

    }
    else if(this.sortBy==="ASCENDING" && this.sizeFilter.length!==0 && this.searchByProduct==="ALL"){
        let current_List=[]
        current_List= this.productList.sort(function(product1,product2){
            return product1.price-product2.price

        })
        let isAvailble = false
        return (current_List.filter((eachProduct)=>{
        eachProduct.availableSizes.filter(eachSize=>{
            if(this.sizeFilter.indexOf(eachSize) !== -1){
                isAvailble=true
            }

        })
        const isTrue = isAvailble;
        isAvailble=false
       return isTrue?eachProduct:null
       
    }))
    }
    else if(this.sortBy==="DESCENDING" && this.sizeFilter.length!==0 && this.searchByProduct==="ALL"){
        let current_List=[]
        current_List= this.productList.sort(function(product1,product2){
            return product2.price-product1.price

        })
        let isAvailble = false
        return (current_List.filter((eachProduct)=>{
        eachProduct.availableSizes.filter(eachSize=>{
            if(this.sizeFilter.indexOf(eachSize) !== -1){
                isAvailble=true
            }

        })
        const isTrue = isAvailble;
        isAvailble=false
       return isTrue?eachProduct:null
       
    }))
    }

























    let isAvailble = false
    return (this.productList.filter((eachProduct)=>{
        eachProduct.availableSizes.filter(eachSize=>{
            if(this.sizeFilter.indexOf(eachSize) !== -1){
                isAvailble=true
            }

        })
        const isTrue = isAvailble;
        isAvailble=false
       return isTrue?eachProduct:null
       
    }))

}
@computed
get totalNoOfProductsDisplayed(){
    return this.sortedAndFilteredProducts.length
//alert(this.sortedAndFilteredProducts.length)
}
}
export default ProductStore