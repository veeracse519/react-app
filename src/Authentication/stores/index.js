import AuthServices from "../services/AuthService"
import AuthStore from "./AuthStore/authStore"
const authService=new AuthServices()
const authStore=new AuthStore(authService)
export default authStore
