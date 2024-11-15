import axios from "axios";
import {IUser} from "../models/IUsers";
import {IPosts} from "../models/IPosts";
import {IComments} from "../models/IComments";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

export const getUsers = async ():Promise<IUser[]> =>{
    const response = await axiosInstance.get<IUser[]>('/users');
    return response.data
}
export const getPosts = async ():Promise<IPosts[]> =>{
    const response = await axiosInstance.get<IPosts[]>('/posts');
    return response.data
}
export const getComments = async ():Promise<IComments[]> =>{
    const response = await axiosInstance.get<IComments[]>('/comments');
    return response.data
}