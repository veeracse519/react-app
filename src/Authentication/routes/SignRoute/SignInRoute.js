import SignPage from "../../components/SignInPage"
import React from "react"
import { BrowserRouter as Router, Switch, Route,withRouter } from "react-router-dom";
import { SIGN_PATH } from "../../../constants/paths";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { getAccessToken } from "../../../utils/StorageUtils";
//import authStore from "../../stores/index.js";
import { PRODUCTS_PATH } from "../../../utils/path";
@inject('authStore')
@observer
class SignInRoute extends React.Component{
    
@observable username;
@observable password;
@observable errorMessage;
@observable tocken;
@observable isClicked
authStore
constructor(props){
    super(props)
    this.authStore=this.props.authStore
    // this.tocken=getAccessToken()
    this.username=""
    this.password=""
    this.errorMessage=""
    this.isClicked=false
}
onChangeUsername=(e)=>{

this.username=e.target.value
}
onChangePassword=(e)=>{
this.password=e.target.value
}
doNetworkCall= async ()=>{
   await this.authStore.userSignIn()
}

onClickSignIn=async ()=>{
this.isClicked=true
if(this.username!=="" && this.password!==""){
await this.authStore.userSignIn()
console.log("veera")
if(getAccessToken()===undefined){
    this.errorMessage="NetworkError"
   this.isClicked=false
}
else{
    console.log("Tocken:")
this.props.history.replace(PRODUCTS_PATH)

}
}
else{
    this.isClicked=false
    if(this.username==""){
    this.errorMessage="please enter username"
    
    }
    else {
        this.errorMessage="please enter password"
    }
}
}
render(){
    return(
    <SignPage
     username={this.username}
     password={this.password}
     onChangeUsername={this.onChangeUsername}
     onChangePassword={this.onChangePassword}
     onClickSignIn={this.onClickSignIn}
     isClicked={this.isClicked}
     errorMessage={this.errorMessage}
    />
    )
}
}
export default withRouter(SignInRoute)