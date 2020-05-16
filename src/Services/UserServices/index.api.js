// import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import  {create} from "apisauce";
import {networkCallWithApisauce} from"../../utils/APIUtils"
import {apiMethods} from "../../constants/APIConstants";
class UserServices{
    api
    constructor(){
        this.api=create({
            baseURL:'https://jsonplaceholder.typicode.com'
        })
    }
    getUsersAPI(){
        return networkCallWithApisauce(
            this.api,
            'users/',
            null,
            apiMethods.get
            )
    }
}
export default UserServices