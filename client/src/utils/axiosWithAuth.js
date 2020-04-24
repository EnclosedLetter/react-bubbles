import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token"); //this will be getting the token from our local storage.
    return axios.create ({
        baseURL: "https://localhost:5000",
        headers: {
            Authorization: token
        }
    });
};