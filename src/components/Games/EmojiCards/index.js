import React from "react"
import {EmojiCardStyle} from "./styles.js"
class EmojiCard extends React.Component {
     onEmojiClick = (emoji) => {
          this.props.onEmojiClick(emoji)
     }
     render() {
          const { emojis } = this.props
          return (
               <EmojiCardStyle>
               {
                    emojis.map(item=>
                         <div /*style={{boxShadow:"0 3px 6px #999, 0 3px 6px #999"}}*/ className={this.props.selectedTheme?"shadow-custom rounded-sm my-10 mx-5 w-64 h-64 bg-blue-700 text-white":"rounded-sm my-10 mx-5 w-64 h-64 shadow-custom bg-white"}  onClick={()=>this.onEmojiClick(item)}>
                         <div className="h-48 m-auto w-4/5"><img src={item.image}/></div>
                         <p className="text-center">{item.name}</p>
                         </div>
                    )
               }
               </EmojiCardStyle>
          )
     }
}
export default EmojiCard
