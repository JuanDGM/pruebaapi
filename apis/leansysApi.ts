import axios from "axios";

const leansysApi = axios.create({
    baseURL: '/api'
});

export default leansysApi;
