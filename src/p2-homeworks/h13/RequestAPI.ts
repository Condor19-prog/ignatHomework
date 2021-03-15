import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/`
})

export const requestAPI = {
    requestPost(success: boolean) {
        return instance.post(`test`, {success})
    }
}