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
          }
     }

}
const themeStore = new ThemeStore()
export default themeStore
