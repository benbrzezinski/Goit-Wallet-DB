import Joi from 'joi';

export const userRegisterSchema = Joi.object().keys({
  username: Joi.string().min(1).max(12).trim().required().messages({
    'string.base': 'Username must be a string',
    'string.min': 'Username must contain at least 1 character',
    'string.max': 'Username must contain max 12 characters',
    'any.required': 'Username is required',
  }),

  email: Joi.string().email().trim().required().messages({
    'string.base': 'E-mail must be a string',
    'string.email': 'Enter a valid e-mail address',
    'any.required': 'E-mail is required',
  }),

  password: Joi.string().min(6).max(12).trim().required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must contain at least 6 characters',
    'string.max': 'Password must contain max 12 characters',
    'any.required': 'Password is required',
  }),
});

export const userLoginSchema = Joi.object().keys({
  email: Joi.string().email().trim().required().messages({
    'string.base': 'E-mail must be a string',
    'string.email': 'Enter a valid e-mail address',
    'any.required': 'E-mail is required',
  }),

  password: Joi.string().min(6).max(12).trim().required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must contain at least 6 characters',
    'string.max': 'Password must contain max 12 characters',
    'any.required': 'Password is required',
  }),
});

export const userLogoutSchema = Joi.object({}).unknown(false).messages({
  'object.unknown': 'Body must be empty',
});

export const userReverifySchema = Joi.object().keys({
  email: Joi.string().email().trim().required().messages({
    'string.base': 'E-mail must be a string',
    'string.email': 'Enter a valid e-mail address',
    'any.required': 'E-mail is required',
  }),
});
