import type { Type } from '@nestjs/common'
import { Field, ObjectType } from '@nestjs/graphql'
import { ApiResponse } from '@/types/api.types'

export interface BaseResponse<T, K> extends ApiResponse<T, K> {}

export function createResponseType<T>(classRef: Type<T>, name?: string) {
  @ObjectType(name ?? `${classRef.name}Response`)
  class ResponseType {
    @Field()
    success: boolean
    @Field({ nullable: true })
    message: string
    @Field({ nullable: true })
    timestamp: string
    @Field({ nullable: true })
    status: string
    @Field({ nullable: true })
    statusCode: number
    @Field(() => classRef, { nullable: true })
    data?: T
  }
  return ResponseType
}
