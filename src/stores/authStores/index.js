import { observable, action } from "mobx"

class AuthStore{
@observable tocken;
constructor(){
    this.tocken=localStorage.tocken===undefined?"false":localStorage.tocken;
}
@action.bound
setTocken(){
    this.tocken="true"
    localStorage.setItem("tocken",this.tocken)
}
@action.bound
signOut(){
    this.tocken="false"
    localStorage.setItem("tocken",(this.tocken))
}
}
const authStore=new AuthStore()
export default authStore