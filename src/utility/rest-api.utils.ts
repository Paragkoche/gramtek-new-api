import type { Status } from '@/static/status.static'
import { ApiResponse } from '@/types/api.types'

export const generateApiResponse = <DataType = unknown>(
  data: DataType,
  message: string,
  statusCode: number = 200,
  status: Status,
  success: boolean = true,
  timestamp: string = new Date().toISOString(),
): ApiResponse<DataType, undefined> => ({
  data,
  message,
  statusCode,
  status,
  success,
  timestamp,
})

export const generateApiErrorResponse = <ErrType = unknown>(
  error: ErrType,
  message: string,
  statusCode: number = 500,
  status: Status,
  success: boolean = false,
  timestamp: string = new Date().toISOString(),
): ApiResponse<undefined, ErrType> => ({
  error,
  message,
  statusCode,
  status,
  success,
  timestamp,
})
