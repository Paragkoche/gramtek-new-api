export const STATUS = Object.freeze({
  Success: 'SUCCESS',
  Error: 'ERROR',
})

export type Status = (typeof STATUS)[keyof typeof STATUS]
