const SHANGHAI_OFFSET_MS = 8 * 60 * 60 * 1000

export function shanghaiToday(now = new Date()): string {
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000
  const shanghai = new Date(utc + SHANGHAI_OFFSET_MS)
  const y = shanghai.getFullYear()
  const m = `${shanghai.getMonth() + 1}`.padStart(2, '0')
  const d = `${shanghai.getDate()}`.padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function shanghaiMonth(now = new Date()): string {
  return shanghaiToday(now).slice(0, 7)
}

export function isValidOccurredOn(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const [ys, ms, ds] = value.split('-')
  const y = Number(ys)
  const m = Number(ms)
  const d = Number(ds)
  const check = new Date(Date.UTC(y, m - 1, d))
  return check.getUTCFullYear() === y && check.getUTCMonth() === m - 1 && check.getUTCDate() === d
}

export function isValidMonth(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}$/.test(value)) return false
  const month = Number(value.slice(5))
  return month >= 1 && month <= 12
}
