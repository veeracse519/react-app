import  {create} from "apisauce";
import {networkCallWithApisauce} from"../../utils/APIUtils"
import {apiMethods} from "../../constants/APIConstants";
class TodoServices{
    api
    constructor(){
        this.api=create({
            baseURL:"https://jsonplaceholder.typicode.com"
        })
    }
    getTodosAPI(){
        return networkCallWithApisauce(
            this.api,
            "/todos",
            null,
            apiMethods.get
        )
    }
}
export default TodoServices