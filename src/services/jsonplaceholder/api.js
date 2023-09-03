import axios from 'axios'

const baseURLNews = 'https://jsonplaceholder.typicode.com'
const baseURLLocal = ''

const instances = {}

const getInstance = (baseURL) => {
    if (!instances[baseURL]) {
        const config = {
            baseURL,
            timeout: 1000,
            withCredentials: true,
        }
        if (baseURL === baseURLLocal) {
            config.responseType = 'blob'
        }
        instances[baseURL] = axios.create(config)
    }

    return instances[baseURL]
}

export const apiNews = getInstance(baseURLNews)
