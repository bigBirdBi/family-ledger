import { createHmac, randomInt } from 'crypto'

export function randomInviteCode(): string {
  return randomInt(0, 1_000_000).toString().padStart(6, '0')
}

export function hashInviteCode(code: string, secret: string): string {
  return createHmac('sha256', secret).update(code).digest('hex')
}

export function getInviteSecret(): string {
  const secret = process.env.INVITE_HMAC_SECRET || ''
  if (!secret || secret === 'REPLACE_IN_CLOUD_CONSOLE') {
    throw new Error('INVITE_SECRET_MISSING')
  }
  return secret
}
