import React from "react"
import CheckoutButton from "../components/CheckoutButton/checkButton"
class CheckButtonRoute extends React.Component{
    onClearCartStore=()=>{
        const{cartStore}=this.props
        cartStore.clearCart()
        setTimeout(()=>{alert(
            "tap.ibhubs.in says Thank you for shopping with us HaHa..! Your products will be delivered in 3 days to the address mentioned in your profile")})
    }
    render(){
        const{cartStore}=this.props
        return(<CheckoutButton cartStore={cartStore} onClearCartStore={this.onClearCartStore}/>)
    }
}
export default CheckButtonRoute