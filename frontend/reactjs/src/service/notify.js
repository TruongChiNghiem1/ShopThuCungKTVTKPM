import axios from "axios";
import { url_service_node } from "./cattalk";

export const getAllNotify = async (token) => {
    return await axios.get(`${url}/notify/all-notify`, {
        headers: { authorization: `Bearer ${token}` }
    });
};

export const deleteNotify = async (ids, token) => {
    return await axios.get(`${url}/notify/all-notify`, ids, {
        headers: { authorization: `Bearer ${token}` }
    });
};