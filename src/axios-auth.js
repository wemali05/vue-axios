import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-palylist-e6df4.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
