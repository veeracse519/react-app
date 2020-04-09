import React from "react"
import {InstructionHeading,InstructionsText} from "./styles.js"
class HowToPlay extends React.Component {
     render() {
          return (<div className="p-2">
               <InstructionHeading>How to play?</InstructionHeading>
               <InstructionsText>Get points by clicking on an image but don't click on any image more than once!</InstructionsText>

           </div>)
     }
}
export default HowToPlay
