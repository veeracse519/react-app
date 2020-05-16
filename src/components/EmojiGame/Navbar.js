import React from "react"
<<<<<<< HEAD
=======
import {EmojiName,Header,HeaderScorePart,Padding,ThemeButton,HeaderTextPart} from "./emojis.js"
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
class NavBar extends React.Component {
     onChange = () => {
          this.props.onChange()
     }
     render() {
          const { score, topscore } = this.props
<<<<<<< HEAD
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
=======
          return (<Header>
          <HeaderTextPart>
          <EmojiName>Emooji Game</EmojiName>
          </HeaderTextPart>
          <HeaderScorePart>
          <Padding>Score:{score}</Padding>
          <Padding>TopScore:{topscore}</Padding>
         
         <ThemeButton selectedTheme={this.props.selectedTheme} onClick={this.onChange}>{this.props.selectedTheme?"Dark Mode":"Light Mode"}</ThemeButton>
              </HeaderScorePart>
          </Header>)
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
     }
}
export default NavBar
