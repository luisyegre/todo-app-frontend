import axios from "axios"

const axiosIns = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
  }
})

axiosIns.defaults.headers.common = {
  'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
}

export default axiosIns