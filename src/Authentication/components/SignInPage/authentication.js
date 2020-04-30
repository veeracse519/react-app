import React from "react"
// import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"
import authStore from "../../stores/index.js"
import { observable } from "mobx"
 import { getAccessToken } from "../../utils/StorageUtils";
import { observer } from "mobx-react";
import {Redirect,withRouter} from "react-router-dom"
import loading from "./Loading.svg"
import animatedLoading from  "./NewAnimated.svg"
import CookieConsent, { Cookies } from "react-cookie-consent";
import {SignInDiv,Form,Heading,PageHeading,UserNameBox,PasswordBox,SignInButton,ErrorMessege} from "./styledComponents";
//import { getAccessToken } from "../../../utils/StorageUtils"
@observer
class SignPage extends React.Component{
@observable username;
@observable password;
@observable errorMessage;
@observable tocken;
@observable isClicked
constructor(){
    super()
    this.tocken=getAccessToken()
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
   await authStore.userSignIn()
}

onClickSignIn=async ()=>{
this.isClicked=true
if(this.username!=="" && this.password!==""){
await this.doNetworkCall()
if(getAccessToken()===undefined){
    this.errorMessage="NetworkError"
   this.isClicked=false
}
else{
    this.tocken=getAccessToken()   
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
        if(this.tocken){
            return <Redirect
            to={{pathname:'/products-page'}}
            />
        }
    return(
        
        <SignInDiv>
            <CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
            <Form>
                <PageHeading>Sign in</PageHeading>
                <UserNameBox type="text" placeholder="UserName" defaultValue={this.username} onChange={this.onChangeUsername}></UserNameBox>
                <PasswordBox type="password" placeholder="Password" defaultValue={this.password} onChange={this.onChangePassword}></PasswordBox>
                <SignInButton type="button" onClick={this.onClickSignIn}>{this.isClicked?<img src={animatedLoading}/>:"Sign in"}</SignInButton>
                <ErrorMessege>{this.errorMessage}</ErrorMessege>
            </Form>
        </SignInDiv>
    )
}
}
export default withRouter(SignPage)
