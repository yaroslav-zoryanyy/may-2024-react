import axios from "axios";
import {ICart, IDJResponse} from "../models/ICarts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"},
});

export const getCarts = async (page:number):Promise<IDJResponse & {carts:ICart[]}> => {
    const skip = (page - 1)*10
    const {data} = await axiosInstance.get<IDJResponse & {carts:ICart[]}>('/carts',{
        params:{
            skip:skip,
            limit:10
        }
    })
    return data;
}