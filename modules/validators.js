const { celebrate, Joi } = require('celebrate');

// валидация запросов при входе пользователя
module.exports.userSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

// валидация запросов при создании пользователя
module.exports.userSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .regex(/(^[А-ЯЁ][а-яё]+(( [А-ЯЁ][а-яё]+)+)?$)|(^[A-Z][a-z]+(( [A-Z][a-z]+)+)?$)|(^[a-z][a-z]+(( [a-z][a-z]+)+)?$)|(^[а-яё][а-яё]+(( [а-яё][а-яё]+)+)?$)/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});
