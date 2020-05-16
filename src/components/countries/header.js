import React from "react"
import "./countries.css"
import { FiMoon } from "react-icons/fi";
class Header extends React.Component {
     changeTheme = () => {
          this.props.change()
     }
     render() {
          return (
               <div className={this.props.name?"dark header":"light header"}>
          <div>
          <h3>Where in the world ?</h3>
          </div>
          <div className="header-mode">
          <h1 className="symbol-size"><FiMoon/></h1>
          <button className={this.props.name?"dark-mode moon-symbol":"light moon-symbol"} onClick={this.changeTheme}>{this.props.name?"Dark Mode":"Light Mode"}</button>
               </div></div>)
     }
}
export { Header }
//WiNightClear