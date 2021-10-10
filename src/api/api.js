// api.js
import axios from 'axios';
const API = axios.create();

export const InstaList = () => API.get("/insta/post"); // 인스타 리스트 출력