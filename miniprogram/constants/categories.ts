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

export type CategoryId = (typeof CATEGORY_IDS)[number]

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  food: '餐饮',
  grocery: '买菜',
  daily: '日用',
  transport: '交通',
  housing: '住房',
  entertainment: '娱乐',
  medical: '医疗',
  childcare: '育儿',
}

export function isCategoryId(value: string): value is CategoryId {
  return (CATEGORY_IDS as readonly string[]).includes(value)
}
