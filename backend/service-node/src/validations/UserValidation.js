const Joi = require('joi');

const signUpValid = Joi.object(
    {
        firstName: Joi.string().required().messages({
            "string.empty": "First name is required",
            "any.required": "First name is required",
            "string.min": "First name must be at least 3 characters"
        }),
        lastName: Joi.string().required().messages({
            "string.empty": "Last name is required",
            "any.required": "Last name is required",
            "string.min": "Last name must be at least 3 characters"
        }),
        password: Joi.string().required().min(8).messages({
            "string.empty": "Password is required",
            "any.required": "Password is required",
            "string.min": "Password must be at least 8 characters",
        }),
        confirmPassword: Joi.string().required().min(8).valid(Joi.ref("password")).messages({
            "any.required": "Confirm password is required",
            "any.only": "Confirm password is not matching",
            "string.empty": "Confirmpassword is not empty",
        }),
        token: Joi.string()
    });

const signInValid = Joi.object(
    {
        email: Joi.string().required().min(3).messages({
            "string.empty": "Email is required",
            "any.required": "Email is required",
            "string.min": "Email must be at least 3 characters"
        }),
        password: Joi.string().required().min(8).messages({
            "string.empty": "Password is required",
            "any.required": "Password is required",
            "string.min": "Password must be at least 8 characters",
        }),
    });

const updatValid = Joi.object(
    {
        firstName: Joi.string().required().messages({
            "string.empty": "First name is required",
            "any.required": "First name is required",
            "string.min": "First name must be at least 3 characters"
        }),
        lastName: Joi.string().required().messages({
            "string.empty": "Last name is required",
            "any.required": "Last name is required",
            "string.min": "Last name must be at least 3 characters"
        }),
        password: Joi.string().required().min(8).messages({
            "string.empty": "Password is required",
            "any.required": "Password is required",
            "string.min": "Password must be at least 8 characters",
        }),
        birthday: Joi.string(),
        hometown: Joi.string(),
        gender: Joi.number(),
    }
)
module.exports = {
    signUpValid, signInValid, updatValid
};

