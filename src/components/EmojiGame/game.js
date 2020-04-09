//
import React from 'react'
import PlayingMode from "./playing-mode.js"
import LoseMode from "./lose-mode.js"
import Header from "./header-mode.js"

let b = [];
class Game extends React.Component {
     state = {
          Emojis: [{
                    EmojiName: "😊",
                    id: "1",
                    isClicked: false
               },
               {
                    EmojiName: "😍",
                    id: "2",
                    isClicked: false
               },
               {
                    EmojiName: "🤪",
                    id: "3",
                    isClicked: false
               },
               {
                    EmojiName: " 🤩",
                    id: "4",
                    isClicked: false
               }
          ],
          status: true,
          score: 0,
          topscore: 0,
          scoreList: [],
          gameState: "Playing",
          list: [1, 2, 3, 4],
          buttonClick: false
     }

     scoreIncrement = (emoji) => {
          let a = this.state.Emojis
          let i, j, t;
          for (i = a.length - 1; i > 0; i--) {
               j = Math.floor(Math.random() * (i + 1))
               t = a[i]
               a[i] = a[j]
               a[j] = t
          }
          let b;
          b = this.state.scoreList;
          if (this.state.score + 1 === this.state.Emojis.length) {
               this.setState({ gameState: "Won", topscore: this.state.Emojis.length, status: false, score: this.state.score + 1 })
          }
          else {
               if (b.includes(emoji)) {
                    if (this.state.score > this.state.topscore) {
                         this.state.topscore = this.state.score
                    }
                    this.setState({ status: false, gameState: "Lost" })
               }
               else {
                    this.state.score += 1
                    b.push(emoji)
                    this.setState({ scoreList: b, status: true, })
               }
          }
          this.setState({
               Emojis: a,
          })
     }
     playAgain = () => {
          this.setState({
               status: true,
               score: 0,
               gameState: "Playing",
               scoreList: []
          })
     }
     changeTheme = () => {
          this.setState({ buttonClick: !this.state.buttonClick })
     }
     render() {
          return (
               <div className={this.state.buttonClick?"bg-blue-900 text-white":"bg-white"}>
               <Header score={this.state.score} topscore={this.state.topscore} changeTheme={this.changeTheme}/>
               {this.state.status?<PlayingMode EmojisList={this.state.Emojis} scoreCheking={this.scoreIncrement}/>:<LoseMode winningStatus={this.state.gameState} playAgain={this.playAgain}/>}
               </div>)
     }

}
export { Game }
