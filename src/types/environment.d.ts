import type { EnvVars } from './env.config'

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVars {}
  }
}
export {}
