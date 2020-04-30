import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { apiMethods } from "../../constants/APIConstants"
import { baseUrl } from "../../constants/url"

// import baseUrl from "../../constants/url"
class AuthServices{
    api
    constructor(){
       
this.api=create({
    baseURL:baseUrl
})
}
getSignInAPI=()=>{
    //alert("hello")
   // console.log(baseUrl)
return networkCallWithApisauce(
this.api,
'v1/signin/',
{},
apiMethods.get
)
}
}
export default AuthServices
