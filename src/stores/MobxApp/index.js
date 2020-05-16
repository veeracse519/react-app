import React from "react"
import {observable,action} from "mobx"
class MobxApp{
    @observable classList=[{name:"veera",id:1},{name:"Anil",id:2},{name:"Ravi",id:3}]
    @action.bound
    options(){
        return this.classList;
    }
}
const mobxApp=new MobxApp()
export default mobxApp