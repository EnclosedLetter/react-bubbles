import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token"); //this will be getting the token from our local storage.
    return axios.create ({
        baseURL: "http://localhost:5000", //setting the baseURL for our api?
        headers: {
            Authorization: token
        }
    });
};

//done