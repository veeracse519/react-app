<<<<<<< HEAD
import { observable } from "mobx"
class ThemeStore {
     @observable selectedTheme
     constructor() {
          this.selectedTheme = false
     }
     setCurrentTheme = () => {
          if (this.selectedTheme) {
               this.selectedTheme = false
               return false

          }
          else {
               this.selectedTheme = true
               return true
=======
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
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
          }
     }

}
const themeStore = new ThemeStore()
export default themeStore
