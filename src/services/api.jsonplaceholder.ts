import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComments} from "../models/IComments";

let axiosInstans = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

export const getUsers = async ():Promise<IUser[]> => {
    return (await axiosInstans.get<IUser[]>("/users")).data;
}
export const getPosts = async ():Promise<IPost[]> => {
   return  (await axiosInstans.get<IPost[]>("/posts")).data
}
export const getComments = async ():Promise<IComments[]> => {
   return  (await axiosInstans.get<IComments[]>("/comments")).data
}
export const getUser = async (id:string):Promise<IUser> => {
    return  (await axiosInstans.get<IUser>("/users/" + id)).data
}
export const getPostsOfUser = async (id:string):Promise<IPost[]> => {
    return (await axiosInstans.get('posts/' + id)).data
}
export const getPost = async (id:string):Promise<IPost> => {
    return  (await axiosInstans.get<IPost>("/posts/" + id)).data
}
export const getCommentsOfPosts = async (id:string):Promise<IComments[]> => {
    return (await axiosInstans.get('comments/' + id)).data
}