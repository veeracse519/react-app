import React from "react"
<<<<<<< HEAD
=======
import {WinrLoss,Loss,Won,ShowScore,PlayButton} from "./emojis.js"
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
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
<<<<<<< HEAD
               <div className="border-solid border-black border w-screen h-screen flex flex-col justify-center items-center">
               <h1>{score}</h1>
          {gameState==="Lost"&&<h1 className="text-red-800">YouLose!</h1>}
          {gameState==="Won"&&<h1 className="text-green-600">YouWon!</h1>}
          
          <button  className="p-3 bg-blue-700 text-white" onClick={this.playAgain}>PlayAgain</button>
          {/*<button onClick={this.reset}>Reset</button>*/}
          </div>
=======
               <WinrLoss>
               <ShowScore>{score}</ShowScore>
          {gameState==="Lost"&&<Loss>YouLose!</Loss>}
          {gameState==="Won"&&<Won>YouWon!</Won>}
          
          <PlayButton onClick={this.playAgain}>PlayAgain</PlayButton>
          {/*<button onClick={this.reset}>Reset</button>*/}
          </WinrLoss>
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
          )
     }
}
export default WinorLoss;
