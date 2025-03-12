import axios from "axios";
import { url_service_node } from "./cattalk";
export const mailConfirm = async (mail) => {
    return await axios.post(`${url_service_node}/user/mail-confirm`, { email: mail });
};

export const signUp = async (user) => {
    return await axios.post(`${url_service_node}/user/signup`, user);
}

export const listenEvents = async () => {
    return await axios.get(`${url_service_node}/user/events`);
}

export const authEmail = async (data) => {
    return await axios.post(`${url_service_node}/user/auth-mail`, data);
}


export const logIn = async (user) => {
    return await axios.post(`${url_service_node}/user/login`, user);
}

export const checkAuthentication = async (token) => {
    return await axios.get(`${url_service_node}/user/check-auth`, {
        headers: { authorization: `Bearer ${token}` }
    })
}

export const editProfile = async (data, token) => {
    return await axios.post(`${url_service_node}/user/edit-profile`, data, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const uploadAvatar = async (avatar, token) => {
    return await axios.post(`${url_service_node}/user/upload-avatar`, avatar, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const uploadBackground = async (bg, token) => {
    return await axios.post(`${url_service_node}/user/upload-background`, bg, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const updateAboutUs = async (data, token) => {
    return await axios.post(`${url_service_node}/user/update-about-us`, data, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const getFriends = async (token) => {
    return await axios.get(`${url_service_node}/user/get-friends`, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const searchFriend = async (token, search) => {
    return await axios.get(`${url_service_node}/user/search-friend?search=${search}`, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const searchUser = async (token, search) => {
    return await axios.get(`${url_service_node}/user/search?search=${search}`, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const changeTheme = async (token, theme) => {
    return await axios.get(`${url_service_node}/user/change-theme/${theme}`, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const changePassword = async (data, token) => {
    return await axios.post(`${url_service_node}/user/change-password`, data, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const getInfoOtherUser  = async (userId, token) => {
    return await axios.post(`${url_service_node}/user/get-info-other-user`, {userId: userId}, {
        headers: { authorization: `Bearer ${token}` }
    });
}

export const addFriend = async (userNameAdd, token) => {
    return await axios.post(`${url_service_node}/user/add-friend`, 
        { userNameAdd: userNameAdd }, {
        headers: { authorization: `Bearer ${token}` }
    })
}

export const deleteFriend = async (userNameDelete, token) => {
    return await axios.post(`${url_service_node}/user/delete-friend`,
        { userNameDelete: userNameDelete }, {
        headers: { authorization: `Bearer ${token}` }
    })
}


export const changePrivateAccount = async (privateValue, token) => {
    return await axios.post(`${url_service_node}/user/change-private-user`,
        { private: privateValue }, {
        headers: { authorization: `Bearer ${token}` }
    })
}