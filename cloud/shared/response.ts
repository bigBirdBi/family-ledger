import type { CloudErr, CloudOk, ErrorCode } from './types'
import { userMessage } from './errors'

export function ok<T>(data: T, requestId: string): CloudOk<T> {
  return { ok: true, data, requestId }
}

export function fail(code: ErrorCode, requestId: string, message?: string): CloudErr {
  return {
    ok: false,
    code,
    message: message || userMessage(code),
    requestId,
  }
}
