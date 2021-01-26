// import request from '/@/utils/request'
import axios from '../utils/axios'

export function login(params) {
    return axios.get('/api/userController/login', params);
}
export function register(params) {
    return axios.post('/api/userController/register', params);
}
