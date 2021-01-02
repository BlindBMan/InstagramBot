import axios from 'axios'
import getCookie from "./components/axiosCSRF";

const csrf_token = getCookie('csrftoken')
const baseUrl = 'https://insta-bot1.herokuapp.com/api'


export const axiosInstance = axios.create({
    timeout: 10000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'X-CSRFToken': csrf_token
    }
})

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config

        if (error.response.status === 401 && originalRequest.url === baseUrl + 'api/token/refresh/') {
            window.location.href = '/login/'
            return Promise.reject(error)
        }

        if (error.response.status === 401 &&
            error.response.data.code === "token_not_valid" &&
            error.response.statusText === "Unauthorized") {

            const refreshToken = localStorage.getItem('refresh_token');

            if (refreshToken){
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp);

                if (tokenParts.exp > now) {
                    return axiosInstance
                        .post('/api/token/refresh/', {refresh: refreshToken})
                        .then((response) => {

                            localStorage.setItem('access_token', response.data.access);
                            localStorage.setItem('refresh_token', response.data.refresh);

                            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                            originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                            return axiosInstance(originalRequest);
                        })
                        .catch(err => {
                            console.log(err)
                        });
                }else{
                    console.log("Refresh token is expired", tokenParts.exp, now);
                    window.location.href = '/login/';
                }
            }else{
                console.log("Refresh token not available.")
                window.location.href = '/login/';
            }
        }
        return Promise.reject(error)
    }
)
