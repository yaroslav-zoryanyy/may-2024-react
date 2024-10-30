import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postSchema} from "../validators/post";
import {postItem} from "../services/api.jsonplaceholder .post";

type FormProps = {
    userId:number,
    id:number,
    title:string,
    body:string
}
const Form = () => {
    const {
        handleSubmit,
        register,
        formState:{
            errors,
            isValid,
        }
    } = useForm<FormProps>({mode:'all',resolver:joiResolver(postSchema)});

    const customHanler = (infoFromRorm:FormProps) => {
        postItem()
    }
    return (
        <form onSubmit={handleSubmit(customHanler)}>
            <div>
                <label>
                    <input type="number" placeholder="userId" {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="number" placeholder="id" {...register('id')} />
                    {errors.id && <div>{errors.id.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="string" placeholder="title" {...register('title')} />
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="string" placeholder="body" {...register('body')} />
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>Click my</button>
        </form>
    );
};

export default Form;