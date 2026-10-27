import { MAX_AMOUNT_CENTS, MIN_AMOUNT_CENTS } from '../constants/limits'

export function formatYuanFromCents(cents: number): string {
  const sign = cents < 0 ? '-' : ''
  const abs = Math.abs(Math.trunc(cents))
  const yuan = Math.floor(abs / 100)
  const remainder = abs % 100
  return `${sign}${yuan}.${remainder.toString().padStart(2, '0')}`
}

export function parseYuanToCents(input: string): number | null {
  const trimmed = input.trim()
  if (!trimmed) return null
  if (!/^\d+(\.\d{0,2})?$/.test(trimmed)) return null
  const [yuanPart, fractionPart = ''] = trimmed.split('.')
  const yuan = Number(yuanPart)
  if (!Number.isSafeInteger(yuan)) return null
  const centsPart = (fractionPart + '00').slice(0, 2)
  const amount = yuan * 100 + Number(centsPart)
  if (!Number.isSafeInteger(amount)) return null
  return amount
}

export function isValidAmountCents(cents: number): boolean {
  return Number.isInteger(cents) && cents >= MIN_AMOUNT_CENTS && cents <= MAX_AMOUNT_CENTS
}
