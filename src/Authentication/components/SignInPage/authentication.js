import React from "react"
// import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"
import authStore from "../../stores/index.js"
import { observable } from "mobx"
//  import { getAccessToken } from "../../utils/StorageUtils";
import { observer } from "mobx-react";
import {Redirect,withRouter} from "react-router-dom"
import loading from "./Loading.svg"
import animatedLoading from  "./NewAnimated.svg"
import CookieConsent, { Cookies } from "react-cookie-consent";

import {SignInDiv,Form,Heading,PageHeading,UserNameBox,PasswordBox,SignInButton,ErrorMessege} from "./styledComponents";
import { isLogedin } from "../../utils/signedIn.js";
import { PRODUCTS_PATH } from "../../../utils/path.js";
import { getAccessToken } from "../../../utils/StorageUtils.js";
//import { getAccessToken } from "../../../utils/StorageUtils"
@observer
class SignPage extends React.Component{
    usernameRef=React.createRef()
    passwordRef=React.createRef()
    render(){ 
        const{username,password,usernameRef,passwordRef,onChangeUsername,onChangePassword,onClickSignIn,isClicked,errorMessage}=this.props
        if(getAccessToken()){
            return <Redirect
            to={{pathname:PRODUCTS_PATH}}
            />
        }
    return(
        
        
        <SignInDiv>
            <CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
            <Form>
                <PageHeading>Sign in</PageHeading>
                <UserNameBox ref={this.usernameRef} type="text" placeholder="UserName" defaultValue={username} onChange={onChangeUsername}></UserNameBox>
                <PasswordBox ref={this.passwordRef} type="password" placeholder="Password" defaultValue={password} onChange={onChangePassword}></PasswordBox>
                <SignInButton type="button" text="Sign in" onClick={onClickSignIn}>
                    {isClicked?<img src={animatedLoading}/>:"Sign in"}</SignInButton>
                <ErrorMessege>{errorMessage}</ErrorMessege>
            </Form>
        </SignInDiv>
    )
}
}
export default SignPage
