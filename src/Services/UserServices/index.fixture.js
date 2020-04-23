// import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import usersResponse from "../../Fixtures/getUsersResponse.json"
class UserFixtureServices{
    getUsersAPI(){
        return new Promise((resolve,reject)=>{
            resolve(usersResponse)
        })
    }
}
export default UserFixtureServices