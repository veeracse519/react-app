import { observable, action } from "mobx"
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { clearUserSession, setAccessToken } from "../../utils/StorageUtils";
//import { clearUserSession, setAccessToken } from "../../../utils/StorageUtils";
import{withRouter,Redirect} from "react-router-dom"
import { productStore } from "../../../e-Commerace/stores";
class AuthStore{
@observable getUserSignInAPIStatus;
@observable getUserSignInAPIError;
authAPIService
constructor(authAPIService){
    this.init()
    
    this.authAPIService=authAPIService
}
@action.bound
init(){
    this.getUserSignInAPIStatus=API_INITIAL
    this.getUserSignInAPIError=null
}
@action.bound
setUserSignInAPIResponse(tocken){
    let access_tocken=tocken[0].access_token
setAccessToken(access_tocken)
}
@action.bound
setGetUserSignInAPIError(error){
this.getUserSignInAPIError=error
}
@action.bound
setGetUserSignInAPIStatus(apiStatus){
this.getUserSignInAPIStatus=apiStatus
}
@action.bound
userSignOut(){
   // alert("veera")
    // const{history}=this.props
     clearUserSession()
     productStore.clearStore()
    // this.clearStore()
    // history.replace("/")
}
    
@action.bound
clearStore(){
    this.init()
}
@action.bound
userSignIn(){
const userSignPromise=this.authAPIService.getSignInAPI()
//console.log(userSignPromise)
return bindPromiseWithOnSuccess(userSignPromise)
.to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
.catch(this.setGetUserSignInAPIError)
}
}
export default AuthStore