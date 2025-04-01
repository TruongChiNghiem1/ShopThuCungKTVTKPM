import axios from "axios";
import { url_service_node } from "./cattalk";

export const getAllChat = async(token) => {
    return await axios.get(`${url}/chat/all-chat`, {
        headers: { authorization: `Bearer ${token}` }
    });
};


export const getMessage = async(token, data) => {
    return await axios.post(`${url}/messages-group`, data, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const createGroup = async(token, dataAddGroup) => {
    return await axios.post(`${url}/chat/create-this-group`, dataAddGroup, {
        headers: { authorization: `Bearer ${token}` },

    });
}

export const deleteMessage = async(token, data) => {
    return await axios.post(`${url}/chat/delete-message`, data, {
        headers: { authorization: `Bearer ${token}`},
    })
}
