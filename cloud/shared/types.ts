export type FamilyStatus = 'active' | 'dissolved'
export type MemberRole = 'admin' | 'member'
export type MemberStatus = 'active' | 'left'
export type TransactionType = 'expense' | 'income' | 'refund'

export type ErrorCode =
  | 'UNAUTHENTICATED'
  | 'NO_FAMILY'
  | 'FORBIDDEN'
  | 'INVITE_INVALID'
  | 'INVITE_EXPIRED'
  | 'INVITE_USED'
  | 'FAMILY_FULL'
  | 'ALREADY_IN_FAMILY'
  | 'INVALID_PARAM'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'RATE_LIMITED'
  | 'INTERNAL'
  | 'NOT_IMPLEMENTED'

export type CloudOk<T> = {
  ok: true
  data: T
  requestId: string
}

export type CloudErr = {
  ok: false
  code: ErrorCode
  message: string
  requestId: string
}

export type CloudResult<T> = CloudOk<T> | CloudErr

export const COLLECTIONS = {
  users: 'users',
  families: 'families',
  memberships: 'memberships',
  transactions: 'transactions',
  budgets: 'budgets',
  inviteAttempts: 'invite_attempts',
} as const

export const CATEGORY_IDS = [
  'food',
  'grocery',
  'daily',
  'transport',
  'housing',
  'entertainment',
  'medical',
  'childcare',
] as const

export const MEMBER_LIMIT = 8
export const MIN_AMOUNT_CENTS = 1
export const MAX_AMOUNT_CENTS = 99_999_999
export const MAX_NOTE_LENGTH = 200
export const INVITE_TTL_MS = 10 * 60 * 1000
export const LIST_PAGE_SIZE = 20
