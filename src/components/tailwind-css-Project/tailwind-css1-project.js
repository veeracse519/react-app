import React from "react"
import { MdPerson } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { TiKey } from "react-icons/ti";
import { DivWrap,UserNameBox,Userdiv,Color} from"./tailwind-css.js"
class TailwindCss extends React.Component{
    state={
        colorId:"#434190"
    }
    changeColor=(event)=>{
        alert(event.target.value)
        this.setState({colorId:event.target.value})
    }
    render(){
        return(<DivWrap id={this.state.colorId}>
            <button>ChangeYourFavirotecolor</button>
            <Color >
            <button onClick={this.changeColor} value="#9b2c2c">Red</button>
            <button onClick={this.changeColor} value="#434190">Blue</button>
            <button onClick={this.changeColor} value="#2f855a">Green</button>
            </Color>
            <h1>Welcome</h1>
            <h1><FaFacebookSquare/></h1>
      <Userdiv ><MdPerson/><UserNameBox id={this.state.colorId} type="text" placeholder="User Name"></UserNameBox></Userdiv>
      <Userdiv ><TiKey/><UserNameBox id={this.state.colorId} type="password" placeholder="Password"></UserNameBox></Userdiv>
<button>SignIn</button>
<a href="#"> Already Have an Account</a>
        </DivWrap>)
    }
}
export default TailwindCss
//FaFacebookSquare
//MdPerson
//TiKey