import { observable, action } from "mobx"
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants"
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
// import UserServices from "../../Services/UserServices/index.fixture.js"
class UsersStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable usersList;
    userService
    constructor(userService){
        this.usersList=[]
        this.init()
        this.userService=userService
    }
    @action
    init(){
        this.getUsersApiStatus=API_INITIAL
        this.getUsersApiSError=null
    }
    @action.bound
    setUsersRespose(users){
      
     this.usersList=users.map((users)=>users.name)
  
    }
    @action.bound
    setUsersApiError(error){
       
this.getUsersApiError=error

    }
    @action.bound
    setUsersApiStatus(apiStatus){
        this.getUsersApiStatus=apiStatus
    }
    @action.bound
    getUsers(){
       const userPromise=this.userService.getUsersAPI()
        return bindPromiseWithOnSuccess(userPromise)
        .to(this.setUsersApiStatus,this.setUsersRespose)
        .catch(this.setUsersApiError)




    }
    @action
    clearSrore(){
        this.init()
    }
}
// const userService=new UserServices()
// const userStore=new UsersStore(userService)
export default UsersStore