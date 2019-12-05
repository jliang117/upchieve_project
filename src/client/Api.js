import axios from 'axios'

export default {
    getCollegeData() {
        return axios.create({ baseURL: `http://localhost:8081` }).get('getCollegeData')
    }
}
