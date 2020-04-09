import { observable,action } from "mobx"
class ThemeStore {
     @observable buttonClick
     constructor() {
          this.buttonClick = false
     }
    
     setCurrentTheme = () => {
          if (this.buttonClick) {
               this.buttonClick = false


          }
          else {
               this.buttonClick = true
          }
     }

}
const themeStore = new ThemeStore()
export default themeStore
