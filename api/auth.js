import axios from "axios";

const loginAPI =async (data) => {
    const baseURL = "http://ipaddress:8000/apiv1/auth/login"
    axios.post(baseURL,data)
};
