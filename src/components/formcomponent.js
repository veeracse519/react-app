import React from "react"
import './form.css'
import Nav from './nav.js'
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
}
from "react-router-dom";

class FormComponent extends React.Component {
     render() {
          return (


               <div>
<Nav element="From Component"/>
<ul>
<li>
<Link to="/greetings">Greetings</Link>
</li>
<li>
<Link to="/favirote">Favirote Dessert</Link>
</li>
<li>
<Link to="/visited">Visited Cities</Link>
</li>
<li>
<Link to="/my-city">Your State</Link>
</li>
<li>
<Link to="/diasible">Diasible Button</Link>
</li>
</ul>
</div>
)}}      
export { FormComponent }
