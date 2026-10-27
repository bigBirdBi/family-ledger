import { initCloud } from './db'
import { AppError } from './errors'

export type CloudCtx = {
  openid: string
  requestId: string
  appid: string
}

export function getCloudCtx(wxContext: { OPENID?: string; APPID?: string }, requestId: string): CloudCtx {
  initCloud()
  const openid = wxContext.OPENID
  if (!openid) {
    throw new AppError('UNAUTHENTICATED')
  }
  return {
    openid,
    requestId,
    appid: wxContext.APPID || '',
  }
}
