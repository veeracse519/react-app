import React from "react"
class LoseMode extends React.Component {
     play = () => {
          this.props.playAgain();
     }
     render() {
          return (<div>{this.props.winningStatus}
          
          <button onClick={this.play}>PlayAgain</button>
          </div>)
     }
}
export default LoseMode
