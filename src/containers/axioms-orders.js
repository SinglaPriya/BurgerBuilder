import axios from 'axios'

const instance = axios.create({
    baseURL: "https://burgerbuilder-9eb82.firebaseio.com/"
})

export default instance;