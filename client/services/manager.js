import {API_KEY, API_URL} from "../constants/constants";
import axios from "axios";

class RouteManager {
    constructor() {
        this.instance = axios.create({
            baseURL: API_URL,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-api-key": API_KEY,
            }
        })
    }

    get(url, cb){
        this.instance.get(url).then((info) => cb && cb(info.data.data)).catch((error) => cb && cb(null))
    }

    post(url, data, cb){
        this.instance.post(url, data).then((info) => cb && cb(info)).catch((error) => console.log("the error it's", error))
    }

    delete(url, cb){
        this.instance.delete(url).then((info) => cb && cb(info)).catch((error) => console.log("the error it's", error))
    }

}

export default new RouteManager()