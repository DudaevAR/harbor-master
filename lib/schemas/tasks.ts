import * as Joi from 'joi';

export const list = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

export const inspect = {
  options: Joi.object()
};