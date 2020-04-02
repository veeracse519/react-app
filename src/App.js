//import './components/carsList/car-fleet.css';
//import "./components/countries/countries.css"
//import './components/todo.css';
//import "./components/form.css"
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import HomePage from "./components/HomePage";
//import Page1 from "./components/Page1";
import { Header } from "./components/countries/header.js"
import { CarsList } from './components/carsList/inex.js'
import { TodoList } from './components/todolist.js'
import { CountriesDashboardApp } from './components/countries/countriesDashboardApp.js'
import { FormComponent } from './components/formcomponent.js'
import Country from "./components/countries/country.js"
import { CountryCard } from './components/countries/countryCard.js'
import { Home } from "./components/home.js"
import { Greetings } from "./components/greetings.js"
import { Favirote } from "./components/favirote.js"
import { Visited } from "./components/visited.js"
import { Disable } from "./components/diasible.js"
import Nav from './components/nav.js'
import { MyCity } from './components/mycity.js'



//import "./App.css";
class App extends React.Component {
  state = {
    buttonClick: false,
    name: false
  }
  changeTheme = () => {
    this.setState({ buttonClick: !this.state.buttonClick, name: !this.state.name })
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
    <Switch>
  <Route path="/about">
  
<Nav element="Back"/>
  <h1>About</h1>
  </Route>
  <Route path="/users">
  
<Nav element="Back"/>
  <h1>hi</h1>
  </Route>
<Route path="/countryDashboardApp">
<div className={this.state.buttonClick?"white":"black"}>
<Header change={this.changeTheme} name={this.state.name}/>
<CountriesDashboardApp  class1={this.state.buttonClick}/>
</div>
</Route>
<Route path="/form-components">
<FormComponent/>
</Route>
//
<Route path="/greetings">
<Nav element="Greetings"/>
<Greetings/>
</Route>
<Route path="/favirote">
<Nav element="Favirote Deesert"/>
<Favirote deserts={["Vanila","Gukab Jamun","Butter Scotch","Lalli","Tasneem"]}/>
</Route>
<Route path="/visited">
<Nav element="Visited Cities"/>
<Visited cities={["Hyderbad","Vizag","Vijayawada","Bangoleru"]}/>
</Route>
<Route path="/my-city">
<Nav element="State"/>
<MyCity states={["Select State","Andhra Pradesh","Telangana","Karnataka","MP"]}/>
</Route>
<Route path="/diasible">
<Nav element="Disiable Button"/>
<Disable/>
</Route>

<Route path="/:id">
<div className={this.state.buttonClick?"white":"black"}>

<Header change={this.changeTheme} name={this.state.name}/>
<Country class1={this.state.buttonClick}/>
</div>
</Route>
<Route path="/">
<Home/>
</Route>
</Switch>

</Router>
    );
  }
}
export default App
