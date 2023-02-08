import axios from 'axios';

export default function axiosGET(api) {
    axios.get(api) // USE THE PROXY!
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}
