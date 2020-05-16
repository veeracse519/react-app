import { getAccessToken } from "../../utils/StorageUtils"

export const isLogedin=()=>{
    const tocken=getAccessToken()
    return tocken
}