export interface ApiResponse<DataType = unknown, ErrType = unknown> {
  data?: DataType
  error?: ErrType
  message: string
  statusCode: number
  status: string
  success: boolean
  timestamp: string
}
