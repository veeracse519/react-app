import React from "react"
//import authStore from "../stores/authStore/index.js"
import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  Link,
  Redirect,
  withRouter
}
from "react-router-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { clearUserSession, getAccessToken } from "../utils/StorageUtils.js";
@observer
class Home extends React.Component {

// alert(TailwindCss.token)
@observable tocken ;
constructor(){
  super()
  this.tocken=getAccessToken()
}
  gotoGridScreenIfLogIn=()=>{
    return(
      <Redirect
      to={{
        pathname:'/'
       }}
      />)
  }
  signOut=()=>{
    clearUserSession()
    this.props.history.replace('/')
  }
  render() {
    //console.log(this.token)
    if(!getAccessToken()){
      return this.gotoGridScreenIfLogIn()
    }
    return (
      <div>
        <nav>
          <ul>
          <li>
            <button onClick={this.signOut}>SignOut</button>
          </li>
            <li>
              <Link to="/">Home</Link>
            
            </li>
            <li>
              <Link to="/about">About</Link>
            
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/form-components">FormComponents</Link>
            </li>
            <li>
              <Link to="/countryDashboardApp">Country Dashboard</Link>
            </li>
            <li>
              <Link to="/tailwind-css">Tailwind-CSS</Link>
            </li>
            <li>
              <Link to="/game">Emoji Game</Link>
            </li>
            <li>
              <Link to="/counter-app">Counter App</Link>
            </li>
            <li>
              <Link to="/mobx-project">MobX Project</Link>
            </li>
            <li>
              <Link to="/todo-app">Todo List</Link>
            </li>
            <li>
              <Link to="/mobx-todo-app">Mobx Todo List</Link>
            </li>
            <li>
              <Link to="/mobx-store-todo-app">Mobx Store Todo List</Link>
            </li>
            <li>
              <Link to="/mobx-event-app">EventApp</Link>
            </li>
            <li>
              <Link to="/user-page">UserPage</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
  }
}
export default withRouter(Home)
///mobx-event-app
///provider-example-app