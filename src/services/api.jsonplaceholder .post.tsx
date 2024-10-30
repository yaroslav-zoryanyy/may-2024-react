import axios from 'axios'

export const axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8',}
})

export let postItem = () =>{
    axiosInstanse.post('/posts')
        .then(response => {
            console.log(response.data)
        })
}
