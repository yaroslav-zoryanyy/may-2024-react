import Joi from "joi";

export const postSchema = Joi.object({
    userId: Joi.number().min(1).max(99).messages({
        "number.min" : 'userId must be at least 1 characters',
        "number.max" : 'userId must be no longer 99 characters',
    }),
    id: Joi.number().min(1).max(99).messages({
        "number.min" : 'id must be at least 1 characters',
        "number.max" : 'id must be no longer 99 characters',
    }),
    title: Joi.string().min(3).max(120).messages({
        "string.min" : 'title must be at least 3',
        "string.max" : 'title must be no longer 120'
    }),
    body: Joi.string().min(3).max(120).messages({
        "string.min" : 'body must be at least 3',
        "string.max" : 'body must be no longer 120'
    }),
});