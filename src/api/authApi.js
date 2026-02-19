import api from "./api";

const signup = (data) => api.post("/auth/signup", data);
const login = (data) => api.post("/auth/login", data);

export default {
    signup,
    login,
};
