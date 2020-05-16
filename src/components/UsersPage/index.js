import React from "react"
import { observer, inject } from "mobx-react"
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure"
//import stores from "../../stores"
import NoDataView from "../common/NoDataView"
//import {userStore} from "../../stores"
@inject('userStore')
@observer
class UsersPAge extends React.Component{
    componentDidMount(){
        
        this.doNetworkCalls()
    }
    doNetworkCalls=()=>{
       // this.getUserStore().getUsers()
      this.getUserStore().getUsers()
    }
    getUserStore=()=>{
        return this.props.userStore
    }
    renderUsersList=()=>{
        const {usersList}=this.getUserStore()
        if(usersList.length===0){
            return <NoDataView/>
        }
    return usersList.map(user=><div>{user}</div>)
    }
render(){
    const{getUsersApiStatus,getUsersApiError}=this.getUserStore()
    return(
   <LoadingWrapperWithFailure 
   apiStatus={getUsersApiStatus}
   apiError={getUsersApiError}
   onRetryClick={this.doNetworkCalls}
   renderSuccessUI={this.renderUsersList}
   />
    )
}
}
export default UsersPAge