import React from "react"
<<<<<<< HEAD
=======
import {EmojiCardStyle} from "./emojis.js"
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
class EmojiCard extends React.Component {
     onEmojiClick = (emoji) => {
          this.props.onEmojiClick(emoji)
     }
     render() {
          const { emojis } = this.props
          return (
<<<<<<< HEAD
               <div className="pt-10 flex flex-wrap justify-around">
=======
               <EmojiCardStyle>
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
               {
                    emojis.map(item=>
                         <div style={{boxShadow:"0 3px 6px #999",width:"290px"}} className={this.props.selectedTheme?"bg-blue-700 text-white mb-10":"bg-white mb-10"}  onClick={()=>this.onEmojiClick(item)}>
                         <img src={item.image}/>
                         <p className="text-center">{item.name}</p>
                         </div>
                    )
               }
<<<<<<< HEAD
               </div>
=======
               </EmojiCardStyle>
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
          )
     }
}
export default EmojiCard
