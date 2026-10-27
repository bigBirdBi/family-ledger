import cloud from 'wx-server-sdk'
import { AppError } from './errors'
import { fail, ok } from './response'
import { getCloudCtx, type CloudCtx } from './auth'
import type { CloudResult } from './types'

type Impl<T> = (ctx: CloudCtx, event: Record<string, unknown>) => Promise<T>

export function createHandler<T>(name: string, impl: Impl<T>) {
  return async (event: Record<string, unknown> = {}, context: { requestId?: string } = {}): Promise<CloudResult<T>> => {
    const requestId = context.requestId || `${name}-${Date.now()}`
    try {
      cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV as unknown as string })
      const ctx = getCloudCtx(cloud.getWXContext(), requestId)
      const data = await impl(ctx, event || {})
      return ok(data, requestId)
    } catch (error) {
      if (error instanceof AppError) {
        console.error(JSON.stringify({ requestId, fn: name, code: error.code }))
        return fail(error.code, requestId, error.message)
      }
      console.error(JSON.stringify({ requestId, fn: name, code: 'INTERNAL' }))
      return fail('INTERNAL', requestId)
    }
  }
}
