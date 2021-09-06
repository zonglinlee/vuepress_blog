
import axios from "axios";
// import {Message} from "element-ui"

let config = {
    baseURL: "http://localhost:8080",
    timeout: 10000,
    // withCredentials: true
}
const instance = axios.create(config)
// instance.interceptors.request.use((config) => {
//     config.data = qs.stringify(config.data);
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     return config;
// }, (error) => {
//     return Promise.reject(error.response);
// });

// instance.interceptors.response.use(
//     (response) => {
//         if (response.data.status !== 200) {
//         } else {
//         }
//     }, (error) => {
//         return Promise.reject(error.response)
//     }
// );
export default instance