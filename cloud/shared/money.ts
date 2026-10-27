import { MAX_AMOUNT_CENTS, MIN_AMOUNT_CENTS } from './types'

export function isValidAmountCents(cents: unknown): cents is number {
  return typeof cents === 'number' && Number.isInteger(cents) && cents >= MIN_AMOUNT_CENTS && cents <= MAX_AMOUNT_CENTS
}

export function netExpenseCents(expenseCents: number, refundCents: number): number {
  return expenseCents - refundCents
}
