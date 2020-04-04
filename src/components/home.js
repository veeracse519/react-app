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
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
  }
}
export { Home }
