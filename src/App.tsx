
import React from "react";
import { Provider} from"mobx-react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {observer} from "mobx-react"
import { Header } from "./components/countries/header.js"
import { CarsList } from './components/carsList/inex.js'
import { TodoList } from './components/TodoList/todolist.js'
import { CountriesDashboardApp } from './components/countries/countriesDashboardApp.js'
import { FormComponent } from './components/formcomponent.js'
import Country from "./components/countries/country.js"
//import { CountryCard } from './components/countries/countryCard.js'
import Home from "./components/home.js"
import { Greetings } from "./components/greetings.js"
import { Favirote } from "./components/favirote.js"
import { Visited } from "./components/visited.js"
import { Disable } from "./components/diasible.js"
import Nav from './components/nav.js'
import { MyCity } from './components/mycity.js'
import TailwindCss from"./components/tailwind-css-Project/tailwind-css1-project.js"
import EmojiGame from "./components/Games/EmojisGame"
import EventApp from "./components/EventsApp/EventApp"
import MobxApp from "./components/MobxProject"
import themeStore from"./stores/ThemeStore"
import './components/carsList/car-fleet.css';
import './components/todo.css';

import MobxModelTodoList from "./components/TodoApp-3/TodoList"
import CounterApp from"./components/CounterApp"
import {MobxTodoList} from"./components/MobxTodo/todolist"
import UsersPage from "./components/UsersPage"
//import stores from "./stores"
import {EcommeraceAuthentication} from "./Authentication/routes/SignRoute/index.js";
//import EcommerceCart from "./e-Commerace/routes/ProductsPageRoute/index.js";
import ProductsPage from "./e-Commerace/components/ProductsPage/index.js";
import SignPage from "./Authentication/components/SignInPage/index.js";

import MapContainer from"./components/googleMap"
import ProductPage from "./e-Commerace/components/ProductDetails/productDetails.js";
import { ProtectedRoute } from "./comman/ProtectedRoute/index.js";
import SignInRoute from "./Authentication/routes/SignRoute/SignInRoute.js";
import { ProductsRoute } from "./e-Commerace/routes/ProductsPageRoute/index.js";
import stores from "./stores/index.js";

 @observer class App extends React.Component {
  getCurrentTheme=()=>{
    return themeStore.buttonClick
  }
  changeTheme = () => {
    themeStore.setCurrentTheme()
  }
  render() {
    return (
      <Provider {...stores} >
     <Router basename={process.env.PUBLIC_URL} >
    <Switch>
      {EcommeraceAuthentication}
      {ProductsRoute}
    <ProtectedRoute/>
 
  {/*<Route path="/about">
  
<Nav element="Back"/>
  <h1>About</h1>
  </Route>
  <Route path="/users">
  
<Nav element="Back"/>
  <h1>hi</h1>
  </Route>


  <Route path="/map">
<Nav element="Back"/>
  <MapContainer/>
  </Route>



  <Route path="/counter-app">
<CounterApp/>
  </Route>
  <Route path="/mobx-project">
<MobxApp/>
  </Route>
  <Route path="/user-page" component={UsersPage}>
<UsersPage/>
  </Route> 
  <Route path="/products-page">
<ProductsPage/>
  </Route>*/}
 
{/* <Route path="/countryDashboardApp">
<div className={this.getCurrentTheme()?"white":"black"}>
<Header change={this.changeTheme} name={this.getCurrentTheme()}/>
<CountriesDashboardApp  class1={this.getCurrentTheme()}/>
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
<Route path="/mobx-store-todo-app" component={MobxModelTodoList}>
  <MobxModelTodoList/>
</Route>
<Route path="/mobx-event-app">
  <EventApp/>
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
<Route path="/product-details">
<ProductPage/>
</Route>

<Route path="/diasible">
<Nav element="Disiable Button"/>
<Disable/>
</Route>
<Route path="/projects-page">
<Home />
</Route>
<Route path="/game">
<EmojiGame/>
</Route>
<Route path="/todo-app">
<TodoList/>
</Route>
<Route path="/mobx-todo-app">
<MobxTodoList/>
</Route>
<Route path="/:id">
<div className={this.getCurrentTheme()?"white":"black"}>
<Header change={this.changeTheme} name={this.getCurrentTheme()}/>
<Country class1={this.getCurrentTheme()}/>
</div>
</Route> */}
</Switch>
</Router>
</Provider>
    );
  }
}
export default App
