import React from "react"
import {WinrLoss,Loss,Won,ShowScore,PlayButton} from "./emojis.js"
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
               <WinrLoss>
               <ShowScore>{score}</ShowScore>
          {gameState==="Lost"&&<Loss>YouLose!</Loss>}
          {gameState==="Won"&&<Won>YouWon!</Won>}
          
          <PlayButton onClick={this.playAgain}>PlayAgain</PlayButton>
          {/*<button onClick={this.reset}>Reset</button>*/}
          </WinrLoss>
          )
     }
}
export default WinorLoss;
