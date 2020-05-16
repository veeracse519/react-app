import React from "react"
import {EmojiName,Header,HeaderScorePart,Padding,ThemeButton,HeaderTextPart} from "./emojis.js"
class NavBar extends React.Component {
     onChange = () => {
          this.props.onChange()
     }
     render() {
          const { score, topscore } = this.props
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
     }
}
export default NavBar
