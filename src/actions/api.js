import axios from "axios";

const baseURL = "https://dev.codeleap.co.uk/"

const api = axios.create({
    baseURL
})

export const requestAPI = async (method, url, payload) => {
    try {
        const response = await api.request({
            method,
            url,
            data:{
                ...payload
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}