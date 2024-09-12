import axios from 'axios';

const API_URL = 'http://localhost:8090/api';

export const registerUser = (user) => {
    return axios.post(`${API_URL}/users/register`, user);
};

export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/users/login`, null, { params: { email, password } });
};

export const createStudent = (student) => {
    return axios.post(`${API_URL}/students`, student);
};

export const getAllStudent = () => {
    return axios.get(`${API_URL}/students`);
};
