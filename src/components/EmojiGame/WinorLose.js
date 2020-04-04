import React from "react"
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
               <div className="border-solid border-black border w-screen h-screen flex flex-col justify-center items-center">
               <h1>{score}</h1>
          {gameState==="Lost"&&<h1 className="text-red-800">YouLose!</h1>}
          {gameState==="Won"&&<h1 className="text-green-600">YouWon!</h1>}
          
          <button  className="p-3 bg-blue-700 text-white" onClick={this.playAgain}>PlayAgain</button>
          {/*<button onClick={this.reset}>Reset</button>*/}
          </div>
          )
     }
}
export default WinorLoss;
