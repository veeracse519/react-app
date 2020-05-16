import React from "react"
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link,
    Redirect,Replace
  } from "react-router-dom"
class RedirectPage extends React.Component{
    render(){
        return(
            <Redirect
            to={{
              pathname:'/projects-page'
             }}
            />
         
        )
    }
}
export default RedirectPage