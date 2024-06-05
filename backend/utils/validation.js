// utils/validation.js

const Joi = require('joi');
const config = require('../config');

// Validate movie data
exports.movieValidationSchema = Joi.object({
  name: Joi.string().required(),
  time: Joi.string().required(),
  year: Joi.number().required(),
  image: Joi.string().required(),
  introduce: Joi.string().required()
});

// Validate user registration data
exports.registerValidationSchema = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required()
});

// Validate user login data
exports.loginValidationSchema = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required()
});
