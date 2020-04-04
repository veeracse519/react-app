import React from "react"
class ThemeButton extends React.Component {
     change = () => {
          this.props.changeTheme()
     }
     render() {
          return (<div><button onClick={this.change}>ThemeButton</button></div>)
     }
}
export default ThemeButton
