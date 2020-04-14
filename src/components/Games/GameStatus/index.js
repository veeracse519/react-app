import React from "react"
import {WinrLoss,Loss,Won,PlayButton} from "./styles.js"
class WinorLoss extends React.Component {
     playAgain = () => {
          this.props.playAgain()
     }
     reset = () => {
          this.props.resetGame()
     }
     render() {
          const { gameState, score } = this.props
          return (
               <WinrLoss style={{height:"460px"}}>
               <p className={this.props.selectedTheme?"text-4xl font-bold text-white m-0":"text-4xl font-bold text-blue-900"}>{score}</p>
          {gameState==="Lost"&&<Loss>YouLose!</Loss>}
          {gameState==="Won"&&<Won>YouWon!</Won>}
          
          <PlayButton onClick={this.playAgain}>PlayAgain</PlayButton>
          {/*<button onClick={this.reset}>Reset</button>*/}
          </WinrLoss>
          )
     }
}
export default WinorLoss;
