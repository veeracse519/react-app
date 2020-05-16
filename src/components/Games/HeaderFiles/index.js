import React from "react"
import {EmojiName,ResetButton,Header,HeaderScorePart,Padding,ThemeButton,HeaderTextPart} from "./styles.js"
class NavBar extends React.Component {
     onChange = () => {
          this.props.onChange()
     }
     onReset=()=>{
          this.props.resetGame()
     }
     render() {
          const { score, topscore } = this.props
          return (<Header>
          <HeaderTextPart>
          <EmojiName>Emoji Game</EmojiName>
          </HeaderTextPart>
          <HeaderScorePart>
          <span className="font-bold mr-5">Score: <Padding>{score}</Padding></span>
          <span className="font-bold mr-5">Top Score: <Padding>{topscore}</Padding></span>
         
         <ThemeButton selectedTheme={this.props.selectedTheme} onClick={this.onChange}>{this.props.selectedTheme?"LIGHT THEME":"DARK THEME"}</ThemeButton>
          <ResetButton selectedTheme={this.props.selectedTheme} onClick={this.onReset}>RESET</ResetButton>
              </HeaderScorePart>
          </Header>)
     }
}
export default NavBar
