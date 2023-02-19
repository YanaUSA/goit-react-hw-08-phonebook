import axios from 'axios';

const PublicFetchAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

const PrivateFetchAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
    set: token => {
        PrivateFetchAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clear: () => {
        PrivateFetchAPI.defaults.headers.common.Authorization = null;
    },
};

export { PublicFetchAPI, PrivateFetchAPI, token };
