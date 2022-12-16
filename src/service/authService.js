import axios from "../axios/axios";
import { LoginDto } from "../dto/LoginDto";
const LOGIN_PATH = "/login";

const login = async (email, password) => {
    const loginDto = {
        email: email,
        password: password,
        grantType: "password"
    } 
    return await axios.post(LOGIN_PATH, new LoginDto(loginDto));
}

export default {login}