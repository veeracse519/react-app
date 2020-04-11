import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

class Home extends React.Component {
  render() {
    return (

      <div>
        <nav>
          <ul>
          
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
              <Link to="/provider-example-app">Provider Example</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
  }
}
export { Home }
///mobx-event-app
///provider-example-app