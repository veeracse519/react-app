import React from "react"
import "./countries.css"
import { WiNightClear } from "react-icons/wi";
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
          <div className="mode">
          <h1 className="arrow size"><WiNightClear/></h1>
          <div className={this.props.name?"dark1 s":"light s"} onClick={this.changeTheme}>{this.props.name?"Dark Mode":"Light Mode"}</div>
               </div></div>)
     }
}
export { Header }
