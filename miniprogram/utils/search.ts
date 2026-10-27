export function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function normalizeSearchKeyword(input: string, maxLength = 40): string {
  return input.trim().slice(0, maxLength)
}
