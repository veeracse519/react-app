import React from "react"
class HelloText extends React.Component{
    render(){
    return(<p>Hello {this.props.message}</p>)
    }
}
export {HelloText}