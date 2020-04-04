import React from "react"
class NavBar extends React.Component {
     onChange = () => {
          this.props.onChange()
     }
     render() {
          const { score, topscore } = this.props
          return (<div className="h-24 flex items-center justify-between">
          <div className="p-4  flex">
          <h1>Emooji Game</h1>
          </div>
          <div className="w-1/2 flex justify-around">
          <h1 className="p-2" >Score:{score}</h1>
          <h1 className="p-2">TopScore:{topscore}</h1>
          <button className={this.props.selectedTheme?"p-2 mr-4 border-solid border-white border":"p-1 border-solid border-black border"} onClick={this.onChange}>{this.props.selectedTheme?"DarkMode":"LightMode"}</button>
          </div>
          </div>)
     }
}
export default NavBar
