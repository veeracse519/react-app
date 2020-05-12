import React from "react"
import { getAccessToken } from "../../utils/StorageUtils"
import {Route,Redirect} from "react-router-dom"
import { isLogedin } from "../../Authentication/utils/signedIn"
import ProductsPage from "../../e-Commerace/components/ProductsPage"
import { PRODUCTS_PATH } from "../../utils/path"
import { SIGN_PATH } from "../../constants/paths"
import { EcommeraceAuthentication } from "../../Authentication/routes/SignRoute"
import SignInRoute from "../../Authentication/routes/SignRoute/SignInRoute"
import ProductsPageRoute from "../../e-Commerace/routes/ProductsPageRoute/ProductsPageRoute"

export const ProtectedRoute=(props)=>{
    let path=PRODUCTS_PATH
    if(getAccessToken()){
        if(props.location.pathname=="/"){
            return <Redirect
             to={{pathname:"/products-page"}}
             />
        }
        else{
        return <Route render={()=><ProductsPageRoute/>}/>
        }
    }
    return <Redirect
    to={{pathname:"/sign-in"}}
    />
    
}