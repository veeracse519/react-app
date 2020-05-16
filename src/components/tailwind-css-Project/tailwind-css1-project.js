import React from "react"
import { MdPerson } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { TiKey } from "react-icons/ti";
import { DivWrap,UserNameBox,Userdiv,Color} from"./tailwind-css.js"
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link,
    Redirect,
    withRouter
  }
  from "react-router-dom";
  import RedirectPage from "../../components/Redirect/index.js"
import { observer } from "mobx-react";
import { observable } from "mobx";
import authStore from"../../stores/authStore/index.js"
import { setAccessToken, getAccessToken } from "../../utils/StorageUtils.js";
  @observer
class TailwindCss extends React.Component{
    
    @observable token
    @observable colorId="#434190";
    @observable username;
    @observable password;
    constructor(){
        super()
        this.token = getAccessToken()
        this.username=''
        this.password=''

    }
    changeColor=(event)=>{
   
        this.colorId=event.target.value
    }
    click=()=>
    {
        if(this.username!=="" && this.password!=="")
        {
      setAccessToken(this.password)
      this.token=getAccessToken()
     
        }
        else{
            alert("enter valid username and password")
        }
    
    }
        handleUsername=(e)=>{
this.username=e.target.value
        }
        handlePassword=(e)=>{
this.password=e.target.value
        }
    render(){
       // console.log(this.token)
            if(this.token){
               
      return <RedirectPage/>
    }
        
        return(<DivWrap id={this.colorId}>
            <p>Please Enter UserName and Password</p>
            <button>ChangeYourFavirotecolor</button>
            <Color >
            <button onClick={this.changeColor} value="#9b2c2c">Red</button>
            <button onClick={this.changeColor} value="#434190">Blue</button>
            <button onClick={this.changeColor} value="#2f855a">Green</button>
            </Color>
            <h1>Welcome</h1>
            <h1><FaFacebookSquare/></h1>
      <Userdiv ><MdPerson/><UserNameBox id={this.colorId} type="text" placeholder="User Name" defaultValue={this.username} onChange={this.handleUsername}></UserNameBox></Userdiv>
      <Userdiv ><TiKey/><UserNameBox id={this.colorId} type="password" placeholder="Password" defaultValue={this.password} onChange={this.handlePassword}></UserNameBox></Userdiv>
<button onClick={this.click}>SignIn</button>

<a href="https://www.facebook.com/veeraru.kandhula"> Already Have an Account</a>
        </DivWrap>)
    }
}
export default withRouter(TailwindCss)
//FaFacebookSquare
//MdPerson
//TiKey