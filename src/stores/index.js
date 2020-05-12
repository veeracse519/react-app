import CounterStore from './CounterStore'
import UserServices from "../Services/UserServices/index.api"
import UserStore from"./UsersStore"
import TodoServices from "../Services/TodoServices/index.api";
import TodoStore from "./TodoStore/TodoStore"
import authStore from "../Authentication/stores";
const counterStore = new CounterStore()
const userService=new UserServices()
const userStore=new UserStore(userService)
const todoService=new TodoServices()
const todoStore=new TodoStore(todoService)
export default {
   authStore,userStore,counterStore,todoStore
}
