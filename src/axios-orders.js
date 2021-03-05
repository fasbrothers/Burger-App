import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-140e2-default-rtdb.firebaseio.com/'
})

export default instance;
