import React from "react"
class EmojiCard extends React.Component {
     onEmojiClick = (emoji) => {
          this.props.onEmojiClick(emoji)
     }
     render() {
          const { emojis } = this.props
          return (
               <div className="pt-10 flex flex-wrap justify-around">
               {
                    emojis.map(item=>
                         <div style={{boxShadow:"0 3px 6px #999",width:"290px"}} className={this.props.selectedTheme?"bg-blue-700 text-white mb-10":"bg-white mb-10"}  onClick={()=>this.onEmojiClick(item)}>
                         <img src={item.image}/>
                         <p className="text-center">{item.name}</p>
                         </div>
                    )
               }
               </div>
          )
     }
}
export default EmojiCard
