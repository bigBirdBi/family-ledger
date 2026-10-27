export const ErrorCode = {
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  NO_FAMILY: 'NO_FAMILY',
  FORBIDDEN: 'FORBIDDEN',
  INVITE_INVALID: 'INVITE_INVALID',
  INVITE_EXPIRED: 'INVITE_EXPIRED',
  INVITE_USED: 'INVITE_USED',
  FAMILY_FULL: 'FAMILY_FULL',
  ALREADY_IN_FAMILY: 'ALREADY_IN_FAMILY',
  INVALID_PARAM: 'INVALID_PARAM',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  RATE_LIMITED: 'RATE_LIMITED',
  INTERNAL: 'INTERNAL',
  NETWORK: 'NETWORK',
  NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
} as const

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode]

const USER_MESSAGES: Record<string, string> = {
  [ErrorCode.UNAUTHENTICATED]: '登录已失效，请重新打开小程序',
  [ErrorCode.NO_FAMILY]: '你还没有加入家庭',
  [ErrorCode.FORBIDDEN]: '没有权限执行该操作',
  [ErrorCode.INVITE_INVALID]: '邀请码无效',
  [ErrorCode.INVITE_EXPIRED]: '邀请码已过期',
  [ErrorCode.INVITE_USED]: '邀请码已使用',
  [ErrorCode.FAMILY_FULL]: '家庭成员已满',
  [ErrorCode.ALREADY_IN_FAMILY]: '你已加入家庭',
  [ErrorCode.INVALID_PARAM]: '输入有误，请检查后重试',
  [ErrorCode.NOT_FOUND]: '记录不存在或已删除',
  [ErrorCode.CONFLICT]: '操作冲突，请稍后重试',
  [ErrorCode.RATE_LIMITED]: '尝试过于频繁，请稍后再试',
  [ErrorCode.INTERNAL]: '服务暂时不可用，请稍后重试',
  [ErrorCode.NETWORK]: '网络异常，请检查后重试',
  [ErrorCode.NOT_IMPLEMENTED]: '该功能即将开放',
}

export function messageForCode(code: string, fallback?: string): string {
  return USER_MESSAGES[code] || fallback || USER_MESSAGES[ErrorCode.INTERNAL]
}
