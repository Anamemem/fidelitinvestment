import axios from 'axios'
axios.defaults.baseURL = 'https://auth-user-d35t.onrender.com'


 function setToken(token){
    axios.defaults.headers.common.Authorization = token?  `Beerer ${token}`: ''
    axios.defaults.headers.common.Token = token?  `${token}`: ''
 } 
 export { setToken } 