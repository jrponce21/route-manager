import {API_KEY, API_URL} from "../constants/constants";

class RouteManager {
    constructor() {
    }

    get(url, cb){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("x-api-key", API_KEY);

        xhr.onload = function() {
            const responseText = xhr.responseText;
            cb && cb(JSON.parse(responseText).data);
        };

        xhr.onerror = function() {
            cb && cb(null)
        };
        xhr.send();
    }

}

export default new RouteManager()