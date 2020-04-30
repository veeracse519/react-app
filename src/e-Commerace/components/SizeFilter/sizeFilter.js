import React from "react"
import  {SignOutButton,ProductsDiv,SizesDiv,SizesHeading,XSsizeButton,SsizeButton,MsizeButton,LsizeButton,XLsizeButton,XXLsizeButton} from "./styledComponents.js"
import { observer } from "mobx-react"
import { observable, action } from "mobx"
@observer
class SizeFilter extends React.Component{
   // @observable onSelectSize;
  
    onSelectSize=(e)=>{
        const{selectSize}=this.props
        selectSize(e.target.value)
    }
    render(){
        return(
        <SizesDiv>
        <SizesHeading>Sizes:</SizesHeading>
        <XSsizeButton style={this.props.sizeFilter.indexOf('XS')!==-1?{backgroundColor:"black",color:"white"}:{}} value="XS" onClick={this.onSelectSize}>XS</XSsizeButton>
        <SsizeButton style={this.props.sizeFilter.indexOf('S')!==-1?{backgroundColor:"black",color:"white"}:{}}  value="S" onClick={this.onSelectSize}>S</SsizeButton>
        <MsizeButton style={this.props.sizeFilter.indexOf('M')!==-1?{backgroundColor:"black",color:"white"}:{}} value="M" onClick={this.onSelectSize}>M</MsizeButton>
        <LsizeButton  style={this.props.sizeFilter.indexOf('L')!==-1?{backgroundColor:"black",color:"white"}:{}} value="L" onClick={this.onSelectSize}>L</LsizeButton>
        <XLsizeButton  style={this.props.sizeFilter.indexOf('XL')!==-1?{backgroundColor:"black",color:"white"}:{}} value="XL" onClick={this.onSelectSize}>XL</XLsizeButton>
        <XXLsizeButton  style={this.props.sizeFilter.indexOf('XXL')!==-1?{backgroundColor:"black",color:"white"}:{}} value="XXL" onClick={this.onSelectSize}>XXL</XXLsizeButton>
        </SizesDiv>
        )
    }
}
export default SizeFilter