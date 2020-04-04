import React from "react"
import ScoreCard from "./score"
import TopScoreCard from "./topscore.js"
import ThemeButton from "./theme-change.js"
class Header extends React.Component {
     render() {
          return (<div className="flex">
          <h3>Emoji Game</h3>
          <ScoreCard score={this.props.score}/>
          <TopScoreCard topscore={this.props.topscore}/>
          <ThemeButton changeTheme={this.props.changeTheme}/>
          </div>)
     }
}
export default Header
