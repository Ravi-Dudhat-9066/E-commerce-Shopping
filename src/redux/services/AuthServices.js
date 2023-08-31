import { GET_ALBUMS_API, LOGIN_API } from "../config/apiEndPoints";
import { baseApiCall } from "../config/BaseApiCall";


export const loginApiCall = (data) => {
    return baseApiCall({
        url: LOGIN_API,
        method: "post",
        data
    });

}

export const getalbumsApi = () => {
    return baseApiCall({
        url: GET_ALBUMS_API,
        method: "get"
    });

}