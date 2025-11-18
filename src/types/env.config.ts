import * as Joi from 'joi'

export const ENV_CONFIG = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  DB_SYNCHRONIZE: Joi.boolean().required(),
  PORT: Joi.number().required(),
  API_PREFIX: Joi.string().required(),
  I18N_FALLBACK_LANGUAGE: Joi.string().required(),
})
export type EnvVars = {
  DB_HOST: string
  DB_PORT: number
  DB_USERNAME: string
  DB_PASSWORD: string
  DB_DATABASE: string
  DB_SYNCHRONIZE: boolean
  PORT: number
  API_PREFIX: string
  I18N_FALLBACK_LANGUAGE: string
}
