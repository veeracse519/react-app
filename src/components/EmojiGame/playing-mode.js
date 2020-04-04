import React from "react"
class PlayingMode extends React.Component {
     check = (emoji) => {
          this.props.scoreCheking(emoji)
     }
     render() {
          const { EmojisList } = this.props
          return (<div>
          {
            EmojisList.map(eachEmoji=><div  onClick={()=>this.check(eachEmoji)}>
            <h1 style={{fontSize:"50px"}}>{eachEmoji.EmojiName}</h1>
            </div>)
          }
          
          </div>)
     }
}
export default PlayingMode
