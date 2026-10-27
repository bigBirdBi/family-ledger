const SHANGHAI_OFFSET_MS = 8 * 60 * 60 * 1000

function shanghaiParts(date = new Date()): { y: number; m: number; d: number } {
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000
  const shanghai = new Date(utc + SHANGHAI_OFFSET_MS)
  return {
    y: shanghai.getFullYear(),
    m: shanghai.getMonth() + 1,
    d: shanghai.getDate(),
  }
}

function pad2(n: number): string {
  return n.toString().padStart(2, '0')
}

export function shanghaiToday(): string {
  const { y, m, d } = shanghaiParts()
  return `${y}-${pad2(m)}-${pad2(d)}`
}

export function shanghaiMonth(date = new Date()): string {
  const { y, m } = shanghaiParts(date)
  return `${y}-${pad2(m)}`
}

export function isValidOccurredOn(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const [ys, ms, ds] = value.split('-')
  const y = Number(ys)
  const m = Number(ms)
  const d = Number(ds)
  const utc = Date.UTC(y, m - 1, d)
  const check = new Date(utc)
  return check.getUTCFullYear() === y && check.getUTCMonth() === m - 1 && check.getUTCDate() === d
}

export function addMonths(month: string, delta: number): string {
  const [ys, ms] = month.split('-')
  const date = new Date(Date.UTC(Number(ys), Number(ms) - 1 + delta, 1))
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}`
}

export function monthLabel(month: string): string {
  const [ys, ms] = month.split('-')
  return `${ys}年${Number(ms)}月`
}
