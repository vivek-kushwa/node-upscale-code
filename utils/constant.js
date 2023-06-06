const Joi = require("joi");

const signValidation = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginValidation = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
const postValidation = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required().max(500),
  // user: Joi.object().keys({
  //   _id: Joi.string().required(),
  //   name: Joi.string().required(),
  // }),
});

module.exports = {
  signValidation,
  loginValidation,
  postValidation,
};
