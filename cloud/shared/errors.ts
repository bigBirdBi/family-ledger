import type { ErrorCode } from './types'

const USER_MESSAGES: Record<ErrorCode, string> = {
  UNAUTHENTICATED: '登录已失效，请重新打开小程序',
  NO_FAMILY: '你还没有加入家庭',
  FORBIDDEN: '没有权限执行该操作',
  INVITE_INVALID: '邀请码无效',
  INVITE_EXPIRED: '邀请码已过期',
  INVITE_USED: '邀请码已使用',
  FAMILY_FULL: '家庭成员已满',
  ALREADY_IN_FAMILY: '你已加入家庭',
  INVALID_PARAM: '输入有误，请检查后重试',
  NOT_FOUND: '记录不存在或已删除',
  CONFLICT: '操作冲突，请稍后重试',
  RATE_LIMITED: '尝试过于频繁，请稍后再试',
  INTERNAL: '服务暂时不可用，请稍后重试',
  NOT_IMPLEMENTED: '该功能即将开放',
}

export class AppError extends Error {
  code: ErrorCode

  constructor(code: ErrorCode, message?: string) {
    super(message || USER_MESSAGES[code])
    this.code = code
  }
}

export function userMessage(code: ErrorCode): string {
  return USER_MESSAGES[code]
}
