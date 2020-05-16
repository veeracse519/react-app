import React from "react"
import EmojiCard from "../EmojiCards"
import WinorLoss from "../GameStatus"
import NavBar from "../HeaderFiles"
import HowToPlay from "../Instructions"
class EmojiGame extends React.Component {
     state = {
          emojis: [{ id: 1, isClicked: false, name: "Exploding Head", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png" },
               { id: 2, isClicked: false, name: "Grinning Face with Sweat", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png" },
               { id: 3, isClicked: false, name: "Smilimg Face with Heart-Eyes", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png" },
               { id: 4, isClicked: false, name: "Smirking Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png" },
               { id: 5, isClicked: false, name: "Thinking Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png" },
               { id: 6, isClicked: false, name: "Winking Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png" },
               { id: 7, isClicked: false, name: "Grining Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png" },
               { id: 8, isClicked: false, name: "Crying Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png" },
               { id: 9, isClicked: false, name: "Astonished Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png" },
               { id: 10, isClicked: false, name: "Face with Tears", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png" },
               { id: 11, isClicked: false, name: "Star-Struck", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png" },
               { id: 12, isClicked: false, name: "Winking Face with Tongue", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png" }
          ],
          score: 0,
          topscore: 0,
          gameState: "Playing",
          isWon: false,
          selectedTheme: false,
          status: true
     }
     onEmojiClick = (emoji) => {
          let emojislist = this.state.emojis
          let index = emojislist.indexOf(emoji)

          if (this.state.score + 1 === this.state.emojis.length) {
               this.setState({ gameState: "Won", status: false, score: this.state.score + 1, topscore: this.state.emojis.length })
          }
          else {
               if (emoji.isClicked) {
                    this.setTopScore()
               }
               else {
                    this.incrementScore()
               }
          }
          /*let emojisList =*/ this.shuffleEmojis(this.state.emojis, index)
     }
     shuffleEmojis = (emojis, index) => {
          let i, t, j;
          emojis[index].isClicked = true
          for (i = emojis.length - 1; i > 0; i--) {
               j = Math.floor(Math.random() * (i + 1))
               t = emojis[i]
               emojis[i] = emojis[j]
               emojis[j] = t

          }
          return emojis
     }
     incrementScore = () => {
          let score=this.state.score
          score += 1
          this.setState({ status: true,score:score })
     }
     setTopScore = () => {
          this.setState({ status: false, gameState: "Lost" })
     }
     onChangeTheme = () => {
          this.setState({ selectedTheme: !this.state.selectedTheme })
     }
     onPlayAgain = () => {
          let emojisList = this.state.emojis
          let presentScore=this.state.score
          let higestScore=this.state.topscore
          if (presentScore> higestScore) {
               this.setState({topscore:presentScore})
          }
          emojisList.map(item =>
               item.isClicked = false
          )
          this.setState({ score: 0, emojis: emojisList, status: true })
     }
     render() {
          const status=this.state.selectedTheme
          return (<div >
          <div className={status?"bg-gray-800 w-full text-white":"bg-white"}>
          <NavBar score={this.state.score} topscore={this.state.topscore} selectedTheme={this.state.selectedTheme} onChange={this.onChangeTheme} resetGame={this.onPlayAgain}/>
   </div>
       
          <div className={status?"bg-gray-900 text-white":"bg-indigo-100"}>
          {this.state.status?<EmojiCard emojis={this.state.emojis} selectedTheme={this.state.selectedTheme} onEmojiClick={this.onEmojiClick}/>:<WinorLoss selectedTheme={this.state.selectedTheme} playAgain={this.onPlayAgain} score={this.state.score} gameState={this.state.gameState}/>}
          </div>
          <div className={status?"bg-gray-700 text-white":"bg-white"}>
          <HowToPlay/>
          </div>
          </div>)
     }
}
export default EmojiGame
