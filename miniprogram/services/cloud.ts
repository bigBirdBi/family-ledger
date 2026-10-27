import { ErrorCode, messageForCode } from '../constants/errors'

export type CloudSuccess<T> = {
  ok: true
  data: T
  requestId: string
}

export type CloudFailure = {
  ok: false
  code: string
  message: string
  requestId: string
}

export class CloudCallError extends Error {
  code: string
  requestId: string

  constructor(code: string, message: string, requestId: string) {
    super(message)
    this.code = code
    this.requestId = requestId
  }
}

export function callCloud<T>(name: string, data: Record<string, unknown> = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name,
      data,
      success(res) {
        const body = res.result as CloudSuccess<T> | CloudFailure | undefined
        if (!body || typeof body !== 'object') {
          reject(new CloudCallError(ErrorCode.INTERNAL, messageForCode(ErrorCode.INTERNAL), ''))
          return
        }
        if (body.ok) {
          resolve(body.data)
          return
        }
        reject(
          new CloudCallError(
            body.code || ErrorCode.INTERNAL,
            body.message || messageForCode(body.code),
            body.requestId || '',
          ),
        )
      },
      fail() {
        reject(new CloudCallError(ErrorCode.NETWORK, messageForCode(ErrorCode.NETWORK), ''))
      },
    })
  })
}

export function toastCloudError(error: unknown): void {
  if (error instanceof CloudCallError) {
    wx.showToast({ title: error.message, icon: 'none' })
    return
  }
  wx.showToast({ title: messageForCode(ErrorCode.INTERNAL), icon: 'none' })
}
